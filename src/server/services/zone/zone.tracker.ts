import { ZoneDetector } from '@armoury/fivem-framework-server';

import { ZoneRegistry } from './zone.registry';

export class ZonePresenceTracker {
  private _current = new Map<number, Set<number>>();

  public constructor(private readonly _registry: ZoneRegistry) {}

  public update(playerId: number, x: number, y: number, z: number): void {
    const current = this._current.get(playerId) ?? new Set<number>();
    const nearbyZones = this._registry.getNearby(x, y, z);
    const next = new Set<number>();

    for (const zone of nearbyZones) {
      if (ZoneDetector.contains(zone, x, y, z)) {
        if (!next.has(zone.id) && !current.has(zone.id)) {
          this.onEnter(playerId, zone.id);
        }
        next.add(zone.id);
      }
    }

    // Exited zones
    const currentIds = current.values();

    for (let entry = currentIds.next(); !entry.done; entry = currentIds.next()) {
      const id = entry.value;
      if (!next.has(id)) {
        this.onExit(playerId, id);
      }
    }

    this._current.set(playerId, next);
  }

  public remove(playerId: number): void {
    this._current.delete(playerId);
  }

  private onEnter(playerId: number, zoneId: number): void {
    console.log(`Player (${playerId}) entered zone with ID ${zoneId}.`);

    Cfx.emit('armoury:safe:zone:enter', playerId, zoneId);
  }

  private onExit(playerId: number, zoneId: number): void {
    console.log(`Player (${playerId}) left zone with ID ${zoneId}.`);

    Cfx.emit('armoury:safe:zone:exit', playerId, zoneId);
  }
}
