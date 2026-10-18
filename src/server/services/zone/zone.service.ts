import { Config, EVENT_DIRECTIONS, EventListener } from '@armoury/fivem-framework-server';
import type { Zone, ZoneSnapshot } from '@armoury/fivem-framework-server';
import { Injectable } from 'injection-js';

import { ZoneRegistry } from './zone.registry';
import { ZonePresenceTracker } from './zone.tracker';

@Injectable()
export class ZoneService {
  private readonly _registry: ZoneRegistry;
  private readonly _tracker: ZonePresenceTracker;

  private _interval?: ReturnType<typeof setInterval>;

  private readonly _batchCount = 10;
  private readonly _pollInterval = 500;
  private _players: string[] = [];
  private _batchIndex = 0;

  private _lastPositions = new Map<number, [number, number, number]>();
  private _zoneRevision = 0;
  private _nextGeneratedZoneId = -1;
  private readonly _synced = new Map<number, { cellX: number; cellY: number; revision: number }>();
  private readonly _lastRequests = new Map<number, number>();

  public constructor(@Config('zone') private readonly _zoneConfig: { cellSize: number }) {
    this._registry = new ZoneRegistry(_zoneConfig.cellSize);
    this._tracker = new ZonePresenceTracker(this._registry);

    this.start();
  }

  public start(): void {
    if (this._interval !== undefined) return;

    this._interval = setInterval(() => {
      if (this._batchIndex === 0) {
        this._players = Cfx.Server.getPlayers();
      }

      // Partition one snapshot across ten callbacks, even with fewer than ten players.
      const start = Math.floor((this._batchIndex * this._players.length) / this._batchCount);
      const end = Math.floor(((this._batchIndex + 1) * this._players.length) / this._batchCount);
      this._batchIndex = (this._batchIndex + 1) % this._batchCount;

      for (let i = start; i < end; i++) {
        const playerIdAsString = this._players[i];
        if (!playerIdAsString) continue;

        const ped = Cfx.Server.GetPlayerPed(playerIdAsString);
        if (!ped || !Cfx.Server.DoesEntityExist(ped)) {
          continue;
        }

        const playerId = Number(playerIdAsString);
        const position = Cfx.Server.GetEntityCoords(ped) as [number, number, number];
        const previous = this._lastPositions.get(playerId);

        this.syncZones(playerId, position[0], position[1], position[2]);

        if (previous && position[0] === previous[0] && position[1] === previous[1] && position[2] === previous[2]) {
          continue;
        }

        this._lastPositions.set(playerId, position);
        this._tracker.update(playerId, position[0], position[1], position[2]);
      }
    }, this._pollInterval / this._batchCount);
  }

  public stop(): void {
    if (this._interval !== undefined) {
      clearInterval(this._interval);
      this._interval = undefined;
    }
    this._players = [];
    this._batchIndex = 0;
    this._lastPositions.clear();
    this._synced.clear();
    this._lastRequests.clear();
  }

  public setZones(zones: Zone[]): void {
    this._registry.replace(zones);
    this.invalidateZones();
  }

  public addZone(zone: Zone): void {
    // Registry.add also replaces an existing definition with the same ID.
    this._registry.add(zone);
    this.invalidateZones();
  }

  public removeZone(zoneId: number): void {
    this._registry.remove(zoneId);
    this.invalidateZones();
  }

  public createSphereZone(center: [number, number, number], radius: number): number {
    while (this._registry.has(this._nextGeneratedZoneId)) this._nextGeneratedZoneId--;
    const id = this._nextGeneratedZoneId--;
    this.addZone({ id, type: 'sphere', center: [...center], radius });
    return id;
  }

  private invalidateZones(): void {
    this._zoneRevision++;
    // Stationary players must also be re-evaluated after a definition changes.
    // The existing batches spread snapshot refreshes across the next pass.
    this._lastPositions.clear();
  }

  @EventListener({ eventName: 'armoury:zones:request', direction: EVENT_DIRECTIONS.CLIENT_TO_SERVER })
  protected onZonesRequest(): void {
    if (this._interval === undefined) return;
    const playerId = Number(Cfx.source);
    if (!Number.isInteger(playerId) || playerId <= 0) return;

    const now = Date.now();
    const lastRequest = this._lastRequests.get(playerId);
    if (lastRequest !== undefined && now - lastRequest < 500) return;
    this._lastRequests.set(playerId, now);

    // Never use client-provided positions or target IDs to select the snapshot.
    const ped = Cfx.Server.GetPlayerPed(playerId.toString());
    if (!ped || !Cfx.Server.DoesEntityExist(ped)) return;
    const [x, y, z] = Cfx.Server.GetEntityCoords(ped);
    this.syncZones(playerId, x, y, z, true);
  }

  private syncZones(playerId: number, x: number, y: number, z: number, force = false): void {
    const cellX = Math.floor(x / this._zoneConfig.cellSize);
    const cellY = Math.floor(y / this._zoneConfig.cellSize);
    const previous = this._synced.get(playerId);
    if (
      !force &&
      previous &&
      previous.cellX === cellX &&
      previous.cellY === cellY &&
      previous.revision === this._zoneRevision
    ) {
      return;
    }

    const snapshot: ZoneSnapshot<Zone> = { cellX, cellY, zones: [], cells: [] };
    const indices = new Map<number, number>();
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const nearby = this._registry.getNearby(
          (cellX + dx) * this._zoneConfig.cellSize,
          (cellY + dy) * this._zoneConfig.cellSize,
          z
        );
        const cell: number[] = [];
        for (const zone of nearby) {
          let index = indices.get(zone.id);
          if (index === undefined) {
            index = snapshot.zones.length;
            indices.set(zone.id, index);
            snapshot.zones.push(zone);
          }
          cell.push(index);
        }
        snapshot.cells.push(cell);
      }
    }

    Cfx.emitNet('armoury:zones:sync', playerId, snapshot);
    this._synced.set(playerId, { cellX, cellY, revision: this._zoneRevision });
  }

  @EventListener()
  protected onPlayerDisconnect(): void {
    const playerId = Cfx.source;
    this._lastPositions.delete(playerId);
    this._synced.delete(playerId);
    this._lastRequests.delete(playerId);
    this._tracker.remove(playerId);

    // Invalidate pending work without shifting the remaining batch boundaries.
    const index = this._players.indexOf(playerId.toString());
    if (index !== -1) this._players[index] = '';
  }
}
