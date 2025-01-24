import type RigidBody from "@engine/lib/rigidbody/rigidbody";
import type Vector from "@engine/lib/vector";
import Grid from "./grid";

export default class HashGrid extends Grid {
  hashMap: Map<number, RigidBody[]>;
  hashMapSize: number;
  p1Prime: number;
  p2Prime: number;
  objects: RigidBody[];
  objectsToCells: Map<RigidBody, number[]>; // < object, hashMapKey >
  constructor(cellSize: number) {
    super(cellSize);
    this.hashMap = new Map();
    this.objectsToCells = new Map();

    this.objects = [];

    this.hashMapSize = 10000000;
    this.p1Prime = 125311;
    this.p2Prime = 588667;
  }

  initializeComponent(world: Vector, objects: RigidBody[]) {
    this.world = world;
    this.objects = objects;
  }

  refreshGrid(objects: RigidBody[]) {
    this.objects = objects;
    this.clearGrid();
    this.mapBodiesToCell();
  }

  clearGrid() {
    this.hashMap.clear();
    this.objectsToCells.clear();
  }

  cellIndexToHash(x: number, y: number) {
    const hash = ((x * this.p1Prime) ^ (y * this.p2Prime)) % this.hashMapSize;
    return hash;
  }

  mapBodiesToCell() {
    this.objects.forEach((object) => {
      const boundingBox = object.getShape().boundingBox;
      const left = boundingBox.topLeft.x;
      const right = boundingBox.bottomRight.x;
      const top = boundingBox.topLeft.y;
      const bottom = boundingBox.bottomRight.y;

      const leftCellIndex = Number.parseInt(String(left / this.cellSize));
      const RightCellIndex = Number.parseInt(String(right / this.cellSize));
      const topCellIndex = Number.parseInt(String(top / this.cellSize));
      const bottomCellIndex = Number.parseInt(String(bottom / this.cellSize));

      for (let x = leftCellIndex; x <= RightCellIndex; x++) {
        for (let y = topCellIndex; y <= bottomCellIndex; y++) {
          const hashIndex = this.cellIndexToHash(x, y);
          const entries = this.hashMap.get(hashIndex);
          if (entries === undefined) {
            const newArray = [object];
            this.hashMap.set(hashIndex, newArray);
          } else {
            entries.push(object);
          }

          const cells = this.objectsToCells.get(object);
          if (cells === undefined) {
            const newArray = [hashIndex];
            this.objectsToCells.set(object, newArray);
          } else {
            cells.push(hashIndex);
          }
        }
      }
    });
  }

  getNeighborObject(object: RigidBody) {
    const occupiedCells = this.objectsToCells.get(object) ?? [];
    const neighborObjects: RigidBody[] = [];
    for (let i = 0; i < occupiedCells.length; i++) {
      const occupiedCellHashIndex = occupiedCells[i];
      const occupiedCell = this.hashMap.get(occupiedCellHashIndex);
      if (occupiedCell) {
        for (let j = 0; j < occupiedCell.length; j++) {
          const objectInCell = occupiedCell[j];
          if (objectInCell !== object) {
            neighborObjects.push(objectInCell);
          }
        }
      }
    }
    return neighborObjects.filter(
      (item, index) => neighborObjects.indexOf(item) === index,
    );
  }

  getContentOfCell(id: number) {
    const content = this.hashMap.get(id);
    if (content === null || content === undefined) return [];
    return content;
  }

  getCellIdFromPosition(pos: Vector) {
    const x = Number.parseInt(String(pos.x / this.cellSize));
    const y = Number.parseInt(String(pos.y / this.cellSize));
    return this.cellIndexToHash(x, y);
  }
}
