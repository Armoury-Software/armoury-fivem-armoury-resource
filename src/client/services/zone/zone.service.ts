import { Command, Config, EVENT_DIRECTIONS, EventListener } from '@armoury/fivem-framework-client';
import type { Zone, ZoneSnapshot } from '@armoury/fivem-framework-client';
import { Injectable } from 'injection-js';

import { ZonePresenceTracker } from './zone.tracker';
import { ZoneRegistry } from './zone.registry';

@Injectable()
export class ZoneService {
  private readonly _registry: ZoneRegistry;
  private readonly _tracker: ZonePresenceTracker;

  private _interval?: ReturnType<typeof setInterval>;
  private _nextRequestAt = 0;

  public constructor(@Config('zone') private readonly _zoneConfig: ZoneConfig) {
    this._registry = new ZoneRegistry(this._zoneConfig.cellSize);
    this._tracker = new ZonePresenceTracker(this._registry);

    this.start();
  }

  public start(): void {
    if (this._interval !== undefined) return;

    this._interval = setInterval(() => {
      const ped = Cfx.Client.PlayerPedId();

      if (!ped || !Cfx.Client.DoesEntityExist(ped)) {
        return;
      }

      const [x, y, z] = Cfx.Client.GetEntityCoords(ped, false);

      // Deferred until listeners are registered; retry if the server/ped is not ready.
      if (!this._registry.isCenteredAt(x, y) && Date.now() >= this._nextRequestAt) {
        this._nextRequestAt = Date.now() + this._zoneConfig.syncRetryMs;
        Cfx.emitNet('armoury:zones:request');
      }

      // After a teleport, wait for definitions rather than reporting false exits.
      if (this._registry.covers(x, y)) this._tracker.update(x, y, z);
    }, 50);
  }

  public stop(): void {
    if (this._interval !== undefined) {
      clearInterval(this._interval);
      this._interval = undefined;
    }
    this._registry.clear();
    this._nextRequestAt = 0;
  }

  @EventListener({ eventName: 'armoury:zones:sync', direction: EVENT_DIRECTIONS.SERVER_TO_CLIENT })
  protected onZonesSync(snapshot: ZoneSnapshot<Zone>): void {
    if (this._interval === undefined) return;

    // Re-evaluate after definitions change.
    const ped = Cfx.Client.PlayerPedId();
    if (!ped || !Cfx.Client.DoesEntityExist(ped)) return;

    const [x, y, z] = Cfx.Client.GetEntityCoords(ped, false);

    // A response may describe an old location if the player teleported in transit.
    if (
      Math.abs(Math.floor(x / this._zoneConfig.cellSize) - snapshot.cellX) > 1 ||
      Math.abs(Math.floor(y / this._zoneConfig.cellSize) - snapshot.cellY) > 1
    )
      return;

    this._registry.replace(snapshot);

    this._tracker.update(x, y, z);
  }

  @Command()
  protected getNearbyZones(): void {
    const [x, y, z] = Cfx.Client.GetEntityCoords(Cfx.Client.PlayerPedId(), false);

    console.log('Nearby zones:', this._registry.getNearby(x, y, z));
    console.log('My position:', x, y, z);
  }
}

interface ZoneConfig {
  cellSize: number;
  syncRetryMs: number;
}
