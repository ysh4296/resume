import BoundingBox from "@engine/grid/boundingBox";
import Calculator from "@engine/utils/calculator";
import { registry } from "../main";
import Vector, { addVector, subVector } from "../vector";

export default class Shape {
  vertices: Vector[];
  calculatorUtils: Calculator;
  centroid: Vector;
  color: string;
  boundingBox: BoundingBox;
  anchorPoints: Map<number, Vector>;
  normals: Vector[];
  orientation: number;

  constructor(vertices: Vector[], color: string) {
    this.calculatorUtils = Calculator.getInstance();
    this.vertices = vertices;
    this.centroid = new Vector({ x: 0, y: 0 });
    this.orientation = 0;
    this.color = color;
    this.normals = [];
    this.boundingBox = new BoundingBox();
    if (new.target === Shape) {
      throw new TypeError(
        "Cannot construct abstract instances directly of Class 'Shape'",
      );
    }
    this.anchorPoints = new Map();
  }

  setCentroid(position: Vector) {
    this.centroid = position;
  }

  setColor(color: string) {
    this.color = color;
  }

  createAnchor(anchorPoint: Vector) {
    const id = this.anchorPoints.size;
    this.anchorPoints.set(id, addVector(this.centroid, anchorPoint));
    return id;
  }

  removeAnchor(id: number) {
    const removed = this.anchorPoints.delete(id);
    if (!removed) {
      console.log("not found!");
    }
    return removed;
  }

  draw() {
    for (let i = 1; i < this.vertices.length; i++) {
      registry.engine.drawUtils.drawLine(
        this.vertices[i - 1],
        this.vertices[i],
        this.color,
      );
    }
    registry.engine.drawUtils.drawLine(
      this.vertices[this.vertices.length - 1],
      this.vertices[0],
      this.color,
    );
    registry.engine.drawUtils.drawPoint(this.centroid, 5, this.color);

    this.anchorPoints.forEach((anchor) => {
      registry.engine.drawUtils.drawPoint(anchor, 5, "green");
    });
  }

  move(delta: Vector) {
    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i].add(delta);
    }
    this.centroid = addVector(this.centroid, delta);

    this.anchorPoints.forEach((anchor, id) => {
      this.anchorPoints.set(id, addVector(anchor, delta));
    });
  }

  rotate(radian: number, spindle: Vector = this.centroid) {
    /** Vertices rotation */
    for (let i = 0; i < this.vertices.length; i++) {
      const rotatedVertice = this.calculatorUtils.rotateAroundPoint(
        this.vertices[i],
        spindle,
        radian,
      );
      this.vertices[i] = rotatedVertice;
    }

    this.anchorPoints.forEach((anchor, id) => {
      const rotatedAnchor = this.calculatorUtils.rotateAroundPoint(
        anchor,
        spindle,
        radian,
      );
      this.anchorPoints.set(id, rotatedAnchor);
    });

    /** Centroid point rotation */
    const rotatedCentroid = this.calculatorUtils.rotateAroundPoint(
      this.centroid,
      spindle,
      radian,
    );

    this.centroid = rotatedCentroid;

    /** 전향력은 편집단계에서는 저장하지 말아야한다. */
    this.orientation += radian;
    this.orientation %= Math.PI * 2;

    return this;
  }

  calculateInertia(_mass: number) {
    // 자식 클래스에서 연산
    return 0;
  }

  calculateBoundingBox() {
    const topLeft = new Vector({ x: Number.MAX_VALUE, y: Number.MAX_VALUE });
    const bottomRight = new Vector({
      x: -Number.MAX_VALUE,
      y: -Number.MAX_VALUE,
    });

    for (let i = 0; i < this.vertices.length; i++) {
      const x = this.vertices[i].x;
      const y = this.vertices[i].y;

      if (x < topLeft.x) {
        topLeft.x = x;
      }
      if (x > bottomRight.x) {
        bottomRight.x = x;
      }
      if (y < topLeft.y) {
        topLeft.y = y;
      }
      if (y > bottomRight.y) {
        bottomRight.y = y;
      }
    }
    this.boundingBox.topLeft = topLeft;
    this.boundingBox.bottomRight = bottomRight;
  }

  isInside(position: Vector) {
    for (let i = 0; i < this.vertices.length; i++) {
      const vertex = this.vertices[i];
      const normal = this.normals[i];
      const vertexToPoint = subVector(position, vertex);
      if (vertexToPoint.getDotProduct(normal) > 0) {
        return false;
      }
    }
    return true;
  }
}
