import {
  Config,
  EVENT_DIRECTIONS,
  EventListener,
  Export,
  type Pickup,
  type PickupOptions,
} from '@armoury/fivem-framework-server';
import { Inject, Injectable } from 'injection-js';
import { ZoneService } from '../zone/zone.service';

@Injectable()
export class PickupService {
  private readonly _pickups = new Map<number, Pickup>();
  private readonly _streamed = new Map<number, Set<number>>();
  private readonly _collected = new Map<number, Set<number>>();
  private _rearmInterval?: ReturnType<typeof setInterval>;

  public constructor(
    @Inject(ZoneService) private readonly _zones: ZoneService,
    @Config('pickup') private readonly _pickupConfig: { streamRadius: number }
  ) {
    // Local-only handlers: network callers cannot supply another player's ID.
    Cfx.Server.on('armoury:safe:zone:enter', this.streamIn.bind(this));
    Cfx.Server.on('armoury:safe:zone:exit', this.streamOut.bind(this));
  }

  @Export()
  public create(position: [number, number, number], pickupHash: string | number, options: PickupOptions = {}): number {
    const rearmRadius = options.rearmRadius ?? 1.35;
    const destroyOnCollect = options.destroyOnCollect ?? true;

    if (position.length !== 3 || !position.every(Number.isFinite)) {
      throw new Error('Invalid pickup position.');
    }

    if (!Number.isFinite(rearmRadius) || rearmRadius <= 0 || rearmRadius >= this._pickupConfig.streamRadius) {
      throw new Error('Pickup rearmRadius must be greater than 0 and less than 50.');
    }

    if (!destroyOnCollect && options.modelHash === undefined) {
      throw new Error('Persistent pickup visuals require a modelHash.');
    }

    const hash = typeof pickupHash === 'string' ? Cfx.Server.GetHashKey(pickupHash) : pickupHash;
    const model = typeof options.modelHash === 'string' ? Cfx.Server.GetHashKey(options.modelHash) : options.modelHash;
    if (!Number.isInteger(hash) || hash === 0 || (model !== undefined && (!Number.isInteger(model) || model === 0))) {
      throw new Error('Invalid pickup or model hash.');
    }

    const value = options.value ?? 0;
    if (!Number.isInteger(value) || value < 0) {
      throw new Error('Pickup value must be a nonnegative integer.');
    }

    const zoneId = this._zones.createSphereZone(position, this._pickupConfig.streamRadius);

    this._pickups.set(zoneId, {
      id: zoneId,
      zoneId,
      position: [...position],
      pickupHash: hash,
      modelHash: model,
      rotating: options.rotating ?? false,
      destroyOnCollect,
      rearmRadius,
      value,
    });

    return zoneId;
  }

  @Export()
  public remove(id: number): void {
    const pickup = this._pickups.get(id);
    if (!pickup) {
      return;
    }

    this._pickups.delete(id);
    const collected = this._collected.values();
    for (let entry = collected.next(); !entry.done; entry = collected.next()) entry.value.delete(id);
    this.pruneCollected();
    this._zones.removeZone(pickup.zoneId);

    const players = this._streamed.keys();
    for (let entry = players.next(); !entry.done; entry = players.next()) {
      this.streamOut(entry.value, id);
    }
  }

  @EventListener({ eventName: 'armoury:unsafe:zone:enter', direction: EVENT_DIRECTIONS.CLIENT_TO_SERVER })
  protected onClientZoneEnter(zoneId: number): void {
    // Resend on a client-observed entry: an earlier server push may have arrived
    // before its ped existed or before it crossed the rendering boundary.
    this.streamIn(Number(Cfx.source), zoneId, true);
  }

  @EventListener({ eventName: 'armoury:unsafe:zone:exit', direction: EVENT_DIRECTIONS.CLIENT_TO_SERVER })
  protected onClientZoneExit(zoneId: number): void {
    this.streamOut(Number(Cfx.source), zoneId);
  }

  @EventListener({ eventName: 'armoury:unsafe:pickup:collect', direction: EVENT_DIRECTIONS.CLIENT_TO_SERVER })
  protected onClientPickupCollect(pickupId: number): void {
    const playerId = Number(Cfx.source);
    if (!Number.isSafeInteger(playerId) || playerId <= 0 || !Number.isSafeInteger(pickupId)) {
      return;
    }

    const pickup = this._pickups.get(pickupId);
    if (!pickup || !this._streamed.get(playerId)?.has(pickupId) || this._collected.get(playerId)?.has(pickupId)) {
      return;
    }

    const position = this.getPlayerPosition(playerId);
    if (!position || this.distanceSquared(position, pickup.position) > pickup.rearmRadius ** 2) {
      return;
    }

    let collected = this._collected.get(playerId);
    if (!collected) {
      collected = new Set<number>();
      this._collected.set(playerId, collected);
    }

    // Latch before dispatch, including if a reward listener synchronously emits another request.
    collected.add(pickupId);
    if (this._rearmInterval === undefined) {
      this._rearmInterval = setInterval(this.rearmCollected.bind(this), 100);
    }

    console.log(`Player with ID ${playerId} collected pickup with id ${pickupId}.`);
    Cfx.emit('armoury:safe:pickup:collect', playerId, pickupId);
  }

  private getPlayerPosition(playerId: number): number[] | undefined {
    const ped = Cfx.Server.GetPlayerPed(playerId.toString());
    if (!ped || !Cfx.Server.DoesEntityExist(ped) || Cfx.Server.GetEntityHealth(ped) <= 0) return;
    const position = Cfx.Server.GetEntityCoords(ped);
    if (position.length !== 3 || !position.every(Number.isFinite)) return;
    return position;
  }

  private distanceSquared(a: number[], b: number[]): number {
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;
  }

  private rearmCollected(): void {
    const players = this._collected.entries();
    for (let entry = players.next(); !entry.done; entry = players.next()) {
      const [playerId, collected] = entry.value;
      const position = this.getPlayerPosition(playerId);
      if (!position) continue;
      const ids = collected.values();
      for (let id = ids.next(); !id.done; id = ids.next()) {
        const pickup = this._pickups.get(id.value);
        if (!pickup) {
          collected.delete(id.value);
          continue;
        }

        if (this.distanceSquared(position, pickup.position) > pickup.rearmRadius ** 2) {
          console.log(`Player (id: ${playerId}) left the rearm radius of Pickup (id: ${pickup.id}).`);
          collected.delete(id.value);
          Cfx.emit('armoury:safe:pickup:leave', playerId, id.value);
        }
      }
    }
    this.pruneCollected();
  }

  private pruneCollected(): void {
    const players = this._collected.entries();
    for (let entry = players.next(); !entry.done; entry = players.next()) {
      if (entry.value[1].size === 0) this._collected.delete(entry.value[0]);
    }
    if (this._collected.size === 0 && this._rearmInterval !== undefined) {
      clearInterval(this._rearmInterval);
      this._rearmInterval = undefined;
    }
  }

  private streamIn(playerId: number, zoneId: number, force = false): void {
    const pickup = this._pickups.get(zoneId);
    if (!pickup || !Number.isInteger(playerId) || playerId <= 0) {
      return;
    }

    const ped = Cfx.Server.GetPlayerPed(playerId.toString());
    if (!ped || !Cfx.Server.DoesEntityExist(ped)) {
      return;
    }

    const [x, y, z] = Cfx.Server.GetEntityCoords(ped);
    const [px, py, pz] = pickup.position;
    if ((x - px) ** 2 + (y - py) ** 2 + (z - pz) ** 2 > this._pickupConfig.streamRadius ** 2) {
      return;
    }

    let streamed = this._streamed.get(playerId);
    if (!streamed) {
      streamed = new Set<number>();
      this._streamed.set(playerId, streamed);
    }

    if (streamed.has(pickup.id) && !force) {
      return;
    }

    streamed.add(pickup.id);
    Cfx.emitNet('armoury:safe:pickup:stream-in', playerId, pickup);
  }

  private streamOut(playerId: number, zoneId: number): void {
    const streamed = this._streamed.get(playerId);
    if (!streamed || !streamed.delete(zoneId)) {
      return;
    }

    Cfx.emitNet('armoury:safe:pickup:stream-out', playerId, zoneId);
    if (streamed.size === 0) {
      this._streamed.delete(playerId);
    }
  }

  @EventListener()
  protected onPlayerDisconnect(): void {
    this._streamed.delete(Number(Cfx.source));
    this._collected.delete(Number(Cfx.source));
    this.pruneCollected();
  }
}
