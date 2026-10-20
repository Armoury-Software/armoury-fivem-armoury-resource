import { Config, EVENT_DIRECTIONS, EventListener, type Pickup } from '@armoury/fivem-framework-client';
import { Injectable } from 'injection-js';

@Injectable()
export class PickupService {
  private readonly _active = new Map<number, StreamedPickup>();
  private readonly _models = new Map<number, number>();
  private _tick?: number;

  public constructor(@Config('pickup') private readonly _pickupConfig: { streamRadius: number }) {}

  @EventListener({ eventName: 'armoury:pickup:stream-in', direction: EVENT_DIRECTIONS.SERVER_TO_CLIENT })
  protected onStreamIn(pickup: Pickup): void {
    if (this._active.has(pickup.id)) {
      return;
    }

    const ped = Cfx.Client.PlayerPedId();
    if (!ped || !Cfx.Client.DoesEntityExist(ped)) {
      return;
    }

    const position = Cfx.Client.GetEntityCoords(ped, false);
    if (this.distanceSquared(position, pickup.position) > this._pickupConfig.streamRadius ** 2) {
      return;
    }

    if (pickup.modelHash !== undefined) {
      if (!Cfx.Client.IsModelValid(pickup.modelHash)) {
        console.warn(`Pickup ${pickup.id} has an invalid model: ${pickup.modelHash}.`);
        return;
      }

      const users = this._models.get(pickup.modelHash) ?? 0;
      if (users === 0) {
        Cfx.Client.RequestModel(pickup.modelHash);
      }

      this._models.set(pickup.modelHash, users + 1);
    }

    this._active.set(pickup.id, { definition: pickup, handle: 0, object: 0, collected: false, retryAt: 0 });
    // No frame callback remains running when nothing is streamed.
    if (this._tick === undefined) {
      this._tick = Cfx.Client.setTick(this.update.bind(this));
    }
  }

  @EventListener({ eventName: 'armoury:pickup:stream-out', direction: EVENT_DIRECTIONS.SERVER_TO_CLIENT })
  protected onStreamOut(id: number): void {
    const state = this._active.get(id);
    if (!state) {
      return;
    }

    this._active.delete(id);
    if (state.handle) {
      Cfx.Client.RemovePickup(state.handle);
    }

    if (state.object) {
      Cfx.Client.DeleteObject(state.object);
    }

    const model = state.definition.modelHash;
    if (model !== undefined) {
      const users = (this._models.get(model) ?? 1) - 1;
      if (users === 0) {
        this._models.delete(model);
        Cfx.Client.SetModelAsNoLongerNeeded(model);
      } else {
        this._models.set(model, users);
      }
    }

    if (this._active.size === 0 && this._tick !== undefined) {
      Cfx.Client.clearTick(this._tick);
      this._tick = undefined;
    }
  }

  @EventListener({ eventName: 'armoury:unsafe:zone:exit', direction: EVENT_DIRECTIONS.CLIENT_TO_CLIENT })
  protected onZoneExit(zoneId: number): void {
    this.onStreamOut(zoneId);
  }

  @EventListener({ eventName: 'onClientResourceStop', direction: EVENT_DIRECTIONS.CLIENT_TO_CLIENT })
  protected onPickupResourceStop(resourceName: string): void {
    if (resourceName !== Cfx.Client.GetCurrentResourceName()) {
      return;
    }

    const ids = this._active.keys();
    for (let entry = ids.next(); !entry.done; entry = ids.next()) {
      this.onStreamOut(entry.value);
    }
  }

  private update(): void {
    const ped = Cfx.Client.PlayerPedId();
    if (!ped || !Cfx.Client.DoesEntityExist(ped)) {
      return;
    }

    const position = Cfx.Client.GetEntityCoords(ped, false);
    const now = Cfx.Client.GetGameTimer();
    const entries = this._active.values();

    for (let entry = entries.next(); !entry.done; entry = entries.next()) {
      const state = entry.value;
      const pickup = state.definition;
      const distance = this.distanceSquared(position, pickup.position);

      if (distance > this._pickupConfig.streamRadius ** 2) {
        this.onStreamOut(pickup.id);
        continue;
      }

      if (state.handle && Cfx.Client.HasPickupBeenCollected(state.handle)) {
        // Remove immediately: native regeneration cannot produce duplicate collection events.
        Cfx.Client.RemovePickup(state.handle);
        state.handle = 0;
        state.collected = true;
        console.log('A pickup has been collected, pickup id:', pickup.id);
        Cfx.emitNet('armoury:unsafe:pickup:collect', pickup.id);
      }

      if (state.collected) {
        if (distance > pickup.rearmRadius ** 2) {
          state.collected = false;
        }
      }

      if (!state.collected && !state.handle && now >= state.retryAt) {
        this.createNative(state, now);
      }

      if (state.object && pickup.rotating) {
        Cfx.Client.SetEntityHeading(state.object, (now * 0.06) % 360);
      }

      if (state.handle && !pickup.destroyOnCollect) {
        // Hide only the pickup entity, keeping the actual native collection logic active.
        const object = Cfx.Client.GetPickupObject(state.handle);
        if (object) Cfx.Client.SetEntityVisible(object, false, false);
      }
    }
  }

  private createNative(state: StreamedPickup, now: number): void {
    const pickup = state.definition;
    if (pickup.modelHash !== undefined && !Cfx.Client.HasModelLoaded(pickup.modelHash)) {
      return;
    }

    state.retryAt = now + 1000;
    const [x, y, z] = pickup.position;
    if (!pickup.destroyOnCollect && !state.object) {
      state.object = Cfx.Client.CreateObject(pickup.modelHash!, x, y, z, false, false, false);
      if (!state.object) {
        return;
      }

      // CreateObject applies a model offset; align the separate visual with the pickup.
      Cfx.Client.SetEntityCoordsNoOffset(state.object, x, y, z, false, false, false);
      Cfx.Client.FreezeEntityPosition(state.object, true);
      Cfx.Client.SetEntityCollision(state.object, false, false);
    }

    state.handle = Cfx.Client.CreatePickup(
      pickup.pickupHash,
      x,
      y,
      z,
      pickup.rotating ? 512 : 0,
      pickup.value,
      true,
      pickup.modelHash ?? 0
    );

    if (state.handle && !pickup.destroyOnCollect) {
      const object = Cfx.Client.GetPickupObject(state.handle);
      if (object) {
        Cfx.Client.SetEntityVisible(object, false, false);
      }
    }
  }

  private distanceSquared(a: number[], b: number[]): number {
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;
  }
}

interface StreamedPickup {
  definition: Pickup;
  handle: number;
  object: number;
  collected: boolean;
  retryAt: number;
}
