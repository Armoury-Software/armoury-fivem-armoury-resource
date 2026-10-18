import type { Zone, ZoneSnapshot } from '@armoury/fivem-framework-client';

/** Retains only the streamed neighborhood, including for zones with very large bounds. */
export class ZoneRegistry {
  private _cellX?: number;
  private _cellY?: number;
  private _cells: Zone[][] = [];
  private readonly _empty: Zone[] = [];

  public constructor(private readonly cellSize: number) {}

  public isCenteredAt(x: number, y: number): boolean {
    return this._cellX === Math.floor(x / this.cellSize) && this._cellY === Math.floor(y / this.cellSize);
  }

  public covers(x: number, y: number): boolean {
    return (
      this._cellX !== undefined &&
      this._cellY !== undefined &&
      Math.abs(Math.floor(x / this.cellSize) - this._cellX) <= 1 &&
      Math.abs(Math.floor(y / this.cellSize) - this._cellY) <= 1
    );
  }

  public replace(snapshot: ZoneSnapshot<Zone>): void {
    const cells: Zone[][] = [];
    for (const indices of snapshot.cells) {
      const zones: Zone[] = [];
      for (const index of indices) zones.push(snapshot.zones[index]);
      cells.push(zones);
    }
    this._cellX = snapshot.cellX;
    this._cellY = snapshot.cellY;
    this._cells = cells;
  }

  public getNearby(x: number, y: number, _: number): Zone[] {
    if (this._cellX === undefined || this._cellY === undefined) return this._empty;
    const dx = Math.floor(x / this.cellSize) - this._cellX;
    const dy = Math.floor(y / this.cellSize) - this._cellY;
    if (Math.abs(dx) > 1 || Math.abs(dy) > 1) return this._empty;
    return this._cells[(dx + 1) * 3 + dy + 1] ?? this._empty;
  }

  public clear(): void {
    this._cellX = undefined;
    this._cellY = undefined;
    this._cells = [];
  }
}
