import { registry } from "@engine/lib/main";
import Vector from "@engine/lib/vector";

export default class BoundingBox {
  topLeft: Vector;
  bottomRight: Vector;
  collision: boolean;

  constructor() {
    this.topLeft = new Vector({ x: 0, y: 0 });
    this.bottomRight = new Vector({ x: 0, y: 0 });
    this.collision = false;
  }

  intersect(target: BoundingBox): boolean {
    // aabb 충돌 감지 구현
    const lefta = this.topLeft.x;
    const righta = this.bottomRight.x;
    const topa = this.topLeft.y;
    const bottoma = this.bottomRight.y;

    const leftb = target.topLeft.x;
    const rightb = target.bottomRight.x;
    const topb = target.topLeft.y;
    const bottomb = target.bottomRight.y;

    const intersectx = rightb > lefta && leftb < righta;
    const intersecty = topb < bottoma && bottomb > topa;
    return intersectx && intersecty;
  }

  draw() {
    let color = "green";
    if (this.collision) {
      color = "red";
    }
    registry.engine.drawUtils.drawLine(
      this.topLeft,
      new Vector({ x: this.bottomRight.x, y: this.topLeft.y }),
      color,
    );
    registry.engine.drawUtils.drawLine(
      new Vector({ x: this.bottomRight.x, y: this.topLeft.y }),
      this.bottomRight,
      color,
    );
    registry.engine.drawUtils.drawLine(
      this.bottomRight,
      new Vector({ x: this.topLeft.x, y: this.bottomRight.y }),
      color,
    );
    registry.engine.drawUtils.drawLine(
      new Vector({ x: this.topLeft.x, y: this.bottomRight.y }),
      this.topLeft,
      color,
    );
  }
}
