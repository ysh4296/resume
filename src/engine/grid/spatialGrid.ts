import type RigidBody from "@engine/lib/rigidbody/rigidbody";
import Vector from "@engine/lib/vector";
import Grid from "./grid";

/**
 * @warning deprecated
 */
export default class SpatialGrid extends Grid {
  objects: RigidBody[];
  objectsToCells: number[][];

  constructor(cellSize: number) {
    super(cellSize);
    this.objects = [];
    this.objectsToCells = [];
  }

  // initialize(world: Vector, objects: RigidBody[]) {
  //   this.world = world;
  //   this.objects = objects;
  //   this.cellCntX = parseInt(String(this.world.x / this.cellSize));
  //   this.cellCntY = parseInt(String(this.world.y / this.cellSize));
  //   if (this.cellSize * this.cellCntX < this.world.x) {
  //     this.cellCntX++;
  //   }
  //   if (this.cellSize * this.cellCntY < this.world.y) {
  //     this.cellCntY++;
  //   }

  //   for (let i = 0; i < this.cellCntX * this.cellCntY; i++) {
  //     this.cells[i] = [];
  //   }

  //   // console.log(this.cells.length + " cells initiated");
  // }

  refreshGrid() {
    this.clearGrid();
    this.mapBodiesToCell();
  }

  mapBodiesToCell() {
    for (let i = 0; i < this.objects.length; i++) {
      const boundingBox = this.objects[i].getShape().boundingBox;
      const left = boundingBox.topLeft.x;
      const right = boundingBox.bottomRight.x;
      const top = boundingBox.topLeft.y;
      const bottom = boundingBox.bottomRight.y;

      const leftCellIndex = this.calculatorUtils.clamp(
        Number.parseInt(String(left / this.cellSize)),
        this.cellCntX - 1,
        0,
      );
      const RightCellIndex = this.calculatorUtils.clamp(
        Number.parseInt(String(right / this.cellSize)),
        this.cellCntX - 1,
        0,
      );
      const topCellIndex = this.calculatorUtils.clamp(
        Number.parseInt(String(top / this.cellSize)),
        this.cellCntY - 1,
        0,
      );
      const bottomCellIndex = this.calculatorUtils.clamp(
        Number.parseInt(String(bottom / this.cellSize)),
        this.cellCntY - 1,
        0,
      );

      for (let x = leftCellIndex; x <= RightCellIndex; x++) {
        for (let y = topCellIndex; y <= bottomCellIndex; y++) {
          const cellIndex = x + y * this.cellCntX;
          this.cells[cellIndex].push(this.objects[i]);
          this.objectsToCells[i].push(cellIndex);
          const position = new Vector({
            x: x * this.cellSize + 5,
            y: y * this.cellSize + 5,
          });

          this.drawUtils.drawRect(
            position,
            new Vector({ x: this.cellSize - 5, y: this.cellSize - 5 }),
            "grey",
          );
        }
      }
    }
  }

  clearGrid() {
    this.objectsToCells = [];

    for (let i = 0; i < this.objects.length; i++) {
      this.objectsToCells[i] = [];
    }

    for (let i = 0; i < this.cellCntX * this.cellCntY; i++) {
      this.cells[i] = [];
    }
  }

  getNeighborObject(objectIndex: number, object: RigidBody) {
    const occupiedCells = this.objectsToCells[objectIndex];
    const neighborObjects: RigidBody[] = [];
    for (let i = 0; i < occupiedCells.length; i++) {
      const occupiedCellIndex = occupiedCells[i];
      const occupiedCell = this.cells[occupiedCellIndex];
      for (let j = 0; j < occupiedCell.length; j++) {
        const objectInCell = occupiedCell[j];
        if (objectInCell !== object) {
          neighborObjects.push(objectInCell);
        }
      }
    }
    return neighborObjects.filter(
      (item, index) => neighborObjects.indexOf(item) === index,
    );
  }

  getContentOfCell(id: number) {
    return this.cells[id];
  }

  getCellIdFromPosition(pos: Vector) {
    const x = Number.parseInt(String(pos.x / this.cellSize));
    const y = Number.parseInt(String(pos.y / this.cellSize));
    return x + y * this.cellCntX;
  }

  draw() {
    for (let i = 0; i < this.cellCntX; i++) {
      for (let j = 0; j < this.cellCntY; j++) {
        const position = new Vector({
          x: (i - 0.5) * this.cellSize + 5,
          y: (j - 0.5) * this.cellSize + 5,
        });

        this.drawUtils.drawRect(
          position,
          new Vector({ x: this.cellSize - 5, y: this.cellSize - 5 }),
          "grey",
        );
      }
    }
  }
}
