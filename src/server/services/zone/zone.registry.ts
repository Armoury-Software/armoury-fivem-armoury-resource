import { Zone } from '@armoury/fivem-framework-server';

export class ZoneRegistry {
  private readonly _zones = new Map<number, Zone>();
  private readonly _cells = new Map<string, Set<number>>();

  public constructor(private readonly _cellSize: number) {}

  public has(id: number): boolean {
    return this._zones.has(id);
  }

  public replace(zones: Zone[]): void {
    this._zones.clear();
    this._cells.clear();

    for (const zone of zones) {
      this.add(zone);
    }
  }

  public add(zone: Zone): void {
    this.remove(zone.id);
    this._zones.set(zone.id, zone);

    const bounds = this.getBounds(zone);

    const minX = Math.floor(bounds.minX / this._cellSize);
    const maxX = Math.floor(bounds.maxX / this._cellSize);
    const minY = Math.floor(bounds.minY / this._cellSize);
    const maxY = Math.floor(bounds.maxY / this._cellSize);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        const key = `${x}:${y}`;

        let cell = this._cells.get(key);

        if (!cell) {
          cell = new Set<number>();
          this._cells.set(key, cell);
        }

        cell.add(zone.id);
      }
    }

    console.log(`Added zone with id ${zone.id}. Cells: ${this._cells.size}, Zones: ${this._zones.size}`);
  }

  public remove(id: number): void {
    if (!this._zones.delete(id)) return;

    const entries = this._cells.entries();

    for (let entry = entries.next(); !entry.done; entry = entries.next()) {
      const [key, cell] = entry.value;
      cell.delete(id);

      if (cell.size === 0) {
        this._cells.delete(key);
      }
    }
  }

  public getNearby(x: number, y: number, _: number): Zone[] {
    const localX = Math.floor(x / this._cellSize);
    const localY = Math.floor(y / this._cellSize);

    const ids = this._cells.get(`${localX}:${localY}`);

    if (!ids) return [];

    return Array.from(ids, (id) => this._zones.get(id)).filter((zone): zone is Zone => zone !== undefined);
  }

  private getBounds(zone: Zone) {
    switch (zone.type) {
      case 'sphere':
        return {
          minX: zone.center[0] - zone.radius,
          maxX: zone.center[0] + zone.radius,
          minY: zone.center[1] - zone.radius,
          maxY: zone.center[1] + zone.radius,
        };

      case 'box': {
        const angle = (zone.heading * Math.PI) / 180;

        const hx = zone.size[0] / 2;
        const hy = zone.size[1] / 2;

        const extentX = Math.abs(Math.cos(angle)) * hx + Math.abs(Math.sin(angle)) * hy;

        const extentY = Math.abs(Math.sin(angle)) * hx + Math.abs(Math.cos(angle)) * hy;

        return {
          minX: zone.center[0] - extentX,
          maxX: zone.center[0] + extentX,
          minY: zone.center[1] - extentY,
          maxY: zone.center[1] + extentY,
        };
      }

      case 'polygon':
        return {
          minX: Math.min(...zone.points.map((p) => p.x)),
          maxX: Math.max(...zone.points.map((p) => p.x)),
          minY: Math.min(...zone.points.map((p) => p.y)),
          maxY: Math.max(...zone.points.map((p) => p.y)),
        };
    }
  }
}
