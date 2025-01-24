import type RigidBody from "@engine/lib/rigidbody/rigidbody";
import Vector, { addVector, scaleVector, subVector } from "@engine/lib/vector";
import Draw from "./draw";

export default class CollisionManifold {
  depth: number;
  normal: Vector;
  penetrationPoint: Vector;
  drawUtils: Draw;
  flipNormalEnabled: boolean;
  frictionalImpulse: number;

  constructor(depth: number, normal: Vector, penetrationPoint: Vector) {
    this.depth = depth;
    this.normal = normal;
    this.penetrationPoint = penetrationPoint;
    this.drawUtils = Draw.getInstance();
    this.flipNormalEnabled = true;
    this.frictionalImpulse = 0;
  }

  flip() {
    if (this.flipNormalEnabled) {
      this.normal = scaleVector(this.normal, -1);
    }
  }

  resolveCollision(objectA: RigidBody, objectB: RigidBody) {
    // 부딧혔다면 상대속도를 통해 충돌을 해결한다.

    const dir = subVector(objectB.shape.centroid, objectA.shape.centroid);
    if (dir.getDotProduct(this.normal) < 0) {
      this.flip();
    }

    const minRestitution = Math.min(
      objectA.matter.restitution,
      objectB.matter.restitution,
    );

    const minFriction = Math.min(
      objectA.matter.friction,
      objectB.matter.friction,
    );

    const penetrationPointToCentroidA = subVector(
      this.penetrationPoint,
      objectA.shape.centroid,
    );

    const penetrationPointToCentroidB = subVector(
      this.penetrationPoint,
      objectB.shape.centroid,
    );

    const angularVelocityA = new Vector({
      x: -1 * objectA.angularVelocity * penetrationPointToCentroidA.y,
      y: objectA.angularVelocity * penetrationPointToCentroidA.x,
    });
    const angularVelocityB = new Vector({
      x: -1 * objectB.angularVelocity * penetrationPointToCentroidB.y,
      y: objectB.angularVelocity * penetrationPointToCentroidB.x,
    });

    const relativeVelocityA = addVector(objectA.velocity, angularVelocityA);

    const relativeVelocityB = addVector(objectB.velocity, angularVelocityB);

    const relativeVelocity = subVector(relativeVelocityB, relativeVelocityA);
    const velocityDotCollision = relativeVelocity.getDotProduct(this.normal);
    if (velocityDotCollision > 0) {
      return;
    }

    const massInverseSum = objectA.massInverse + objectB.massInverse;
    // 반발력 연산
    let collisionRestitution =
      (2 * objectA.matter.restitution * objectB.matter.restitution) /
      (objectA.matter.restitution + objectB.matter.restitution);

    if (!minRestitution) {
      collisionRestitution = Math.min(
        objectA.matter.restitution,
        objectB.matter.restitution,
      );
    }

    const crossRestitutionVectorA = penetrationPointToCentroidA.cross(
      this.normal,
    );
    const crossRestitutionVectorB = penetrationPointToCentroidB.cross(
      this.normal,
    );

    const crossSum =
      crossRestitutionVectorA *
        crossRestitutionVectorA *
        objectA.inertiaInverse +
      crossRestitutionVectorB *
        crossRestitutionVectorB *
        objectB.inertiaInverse;

    let j = -(1 + collisionRestitution) * velocityDotCollision;
    j /= massInverseSum + crossSum;

    const impulseCollision = scaleVector(this.normal, j);
    const impulseVectorA = scaleVector(
      impulseCollision,
      -1 * objectA.massInverse,
    );
    const impulseVectorB = scaleVector(impulseCollision, objectB.massInverse);

    if (!objectA.isKinematic) {
      objectA.velocity = addVector(objectA.velocity, impulseVectorA);
      objectA.angularVelocity +=
        -crossRestitutionVectorA * j * objectA.inertiaInverse;
    }
    if (!objectB.isKinematic) {
      objectB.velocity = addVector(objectB.velocity, impulseVectorB);
      objectB.angularVelocity +=
        crossRestitutionVectorB * j * objectB.inertiaInverse;
    }

    // 마찰력 연산

    const velocityNormalDirection = scaleVector(
      this.normal,
      relativeVelocity.getDotProduct(this.normal),
    );
    let tangent = subVector(relativeVelocity, velocityNormalDirection);
    tangent = scaleVector(tangent, -1);

    let collisionFriction =
      (2 * objectA.matter.friction * objectB.matter.friction) /
      (objectA.matter.friction + objectB.matter.friction);

    if (!minFriction) {
      collisionFriction = Math.min(
        objectA.matter.friction,
        objectB.matter.friction,
      );
    }

    if (Math.abs(tangent.x) > 0.00001 || Math.abs(tangent.y) > 0.00001) {
      tangent.normalize();
      // this.drawUtils.drawArrow(
      //   addVector(objectA.shape.centroid, scaleVector(tangent, 40)),
      //   objectA.shape.centroid,
      //   "blue"
      // );
    }

    const crossFrictionVectorA = penetrationPointToCentroidA.cross(tangent);
    const crossFrictionVectorB = penetrationPointToCentroidB.cross(tangent);

    const crossTangentSum =
      crossFrictionVectorA * crossFrictionVectorA * objectA.inertiaInverse +
      crossFrictionVectorB * crossFrictionVectorB * objectB.inertiaInverse;

    const velocityDotFriction = relativeVelocity.getDotProduct(tangent);

    this.frictionalImpulse =
      -(1 + collisionFriction) * velocityDotFriction * minFriction;
    this.frictionalImpulse /= massInverseSum + crossTangentSum;

    if (this.frictionalImpulse > j) {
      this.frictionalImpulse = j;
    }

    const frictionalImpulseVector = scaleVector(
      tangent,
      this.frictionalImpulse,
    );

    if (!objectA.isKinematic) {
      objectA.velocity = subVector(
        objectA.velocity,
        scaleVector(frictionalImpulseVector, objectA.massInverse),
      );
      objectA.angularVelocity +=
        -crossFrictionVectorA * this.frictionalImpulse * objectA.inertiaInverse;
    }

    if (!objectB.isKinematic) {
      objectB.velocity = addVector(
        objectB.velocity,
        scaleVector(frictionalImpulseVector, objectB.massInverse),
      );

      objectB.angularVelocity +=
        crossFrictionVectorB * this.frictionalImpulse * objectB.inertiaInverse;
    }
  }

  positionalCorrection(
    objectA: RigidBody,
    objectB: RigidBody,
    correctDelta: number,
  ) {
    const correction =
      (this.depth / (objectA.massInverse + objectB.massInverse)) * correctDelta;

    const correctVector = scaleVector(this.normal, correction);
    const correctMoveA = scaleVector(correctVector, objectA.massInverse * -1);
    const correctMoveB = scaleVector(correctVector, objectB.massInverse);
    if (!objectA.isKinematic) {
      objectA.getShape().move(correctMoveA);
    }
    if (!objectB.isKinematic) {
      objectB.getShape().move(correctMoveB);
    }
  }

  draw() {
    const headPosition = addVector(
      this.penetrationPoint,
      scaleVector(this.normal, this.depth * -1000),
    );
    this.drawUtils.drawArrow(headPosition, this.penetrationPoint, "blue");

    this.drawUtils.drawPoint(this.penetrationPoint, 3, "gray");
  }
}
