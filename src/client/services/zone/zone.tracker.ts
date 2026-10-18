import { ZoneDetector } from '@armoury/fivem-framework-client';
import type { ZoneRegistry } from './zone.registry';

export class ZonePresenceTracker {
  private _current = new Set<number>();

  public constructor(private readonly _registry: Pick<ZoneRegistry, 'getNearby'>) {}

  public update(x: number, y: number, z: number): void {
    const nearbyZones = this._registry.getNearby(x, y, z);
    const next = new Set<number>();

    for (const zone of nearbyZones) {
      if (ZoneDetector.contains(zone, x, y, z)) {
        next.add(zone.id);
      }
    }

    // Newly entered zones
    const nextIds = next.values();

    for (let entry = nextIds.next(); !entry.done; entry = nextIds.next()) {
      const id = entry.value;
      if (!this._current.has(id)) {
        this.onEnter(id);
      }
    }

    // Exited zones
    const currentIds = this._current.values();

    for (let entry = currentIds.next(); !entry.done; entry = currentIds.next()) {
      const id = entry.value;
      if (!next.has(id)) {
        this.onExit(id);
      }
    }

    this._current = next;
  }

  private onEnter(zoneId: number): void {
    console.log(`Entered zone with ID ${zoneId}.`);

    Cfx.emit('armoury:unsafe:zone:enter', zoneId);
    Cfx.emitNet('armoury:unsafe:zone:enter', zoneId);
  }

  private onExit(zoneId: number): void {
    console.log(`Left zone with ID ${zoneId}.`);

    Cfx.emit('armoury:unsafe:zone:exit', zoneId);
    Cfx.emitNet('armoury:unsafe:zone:exit', zoneId);
  }
}
