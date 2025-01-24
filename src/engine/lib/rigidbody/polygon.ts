import { registry } from "../main";
import type Vector from "../vector";
import { addVector, scaleVector, subVector } from "../vector";
import Shape from "./shape";

export default class Polygon extends Shape {
  constructor(vertices: Vector[], color: string) {
    super(vertices, color);
    this.normals = this.calculatorUtils.calcNormals(this.vertices);
    const centroid = this.calculatorUtils.calcCentroid(this.vertices);
    super.setCentroid(centroid);
  }

  calculateInertia(mass: number) {
    // triangulation
    let inertia = 0;
    const massPertriangle = mass / this.vertices.length;
    for (let i = 0; i < this.vertices.length; i++) {
      const next = this.calculatorUtils.getIndex(i + 1, this.vertices.length);
      const centerToVertice0 = subVector(this.vertices[i], this.centroid);
      const centerToVertice1 = subVector(this.vertices[next], this.centroid);
      const triangleInertia =
        (massPertriangle *
          (centerToVertice0.lengthSquare() +
            centerToVertice1.lengthSquare() +
            centerToVertice0.getDotProduct(centerToVertice1))) /
        6;
      inertia += triangleInertia;
    }
    return inertia;
  }

  draw() {
    super.draw();
    for (let i = 0; i < this.normals.length; i++) {
      const next = this.calculatorUtils.getIndex(i + 1, this.vertices.length);
      const direction = subVector(this.vertices[next], this.vertices[i]);
      const tail = addVector(this.vertices[i], scaleVector(direction, 1 / 2.0));
      const head = addVector(tail, scaleVector(this.normals[i], 10));
      registry.engine.drawUtils.drawArrow(head, tail, "blue");
    }
  }

  rotate(radian: number, spindle: Vector = this.centroid) {
    super.rotate(radian, spindle);
    this.normals = this.calculatorUtils.calcNormals(this.vertices);
    return this;
  }
}
