import Circle from "@engine/lib/rigidbody/circle";
import Polygon from "@engine/lib/rigidbody/polygon";
import type Shape from "@engine/lib/rigidbody/shape";
import Vector, { addVector, scaleVector, subVector } from "@engine/lib/vector";
import Calculator from "./calculator";
import CollisionManifold from "./collisionManifold";

class SupportPoint {
  vertex: Vector;
  penetrationDepth: number;
  constructor(vertex: Vector, penetrationDepth: number) {
    this.vertex = vertex;
    this.penetrationDepth = penetrationDepth;
  }
}

export default class Collision {
  calculatorUtil: Calculator;
  private static instance: Collision;
  constructor() {
    this.calculatorUtil = Calculator.getInstance();
  }
  public static getInstance(): Collision {
    if (!Collision.instance) {
      Collision.instance = new Collision();
    }
    return Collision.instance;
  }

  checkCollision(shapeA: Shape, shapeB: Shape) {
    let collisionManifold = null;
    if (shapeA instanceof Circle && shapeB instanceof Circle) {
      collisionManifold = this.circleVScircle(shapeA, shapeB);
    }
    if (shapeA instanceof Polygon && shapeB instanceof Polygon) {
      collisionManifold = this.polygonVSpolygon(shapeA, shapeB);
    }
    if (shapeA instanceof Circle && shapeB instanceof Polygon) {
      collisionManifold = this.circleVSpolygon(shapeA, shapeB);
    }
    if (shapeA instanceof Polygon && shapeB instanceof Circle) {
      collisionManifold = this.circleVSpolygon(shapeB, shapeA);
      if (collisionManifold) {
        collisionManifold?.normal.scale(-1);
        collisionManifold.penetrationPoint.add(
          scaleVector(collisionManifold.normal, collisionManifold.depth),
        );
      }
    }

    return collisionManifold;
  }

  circleVScircle(circleA: Circle, circleB: Circle) {
    const centroidA = circleA.centroid;
    const centroidB = circleB.centroid;

    const direction = subVector(centroidB, centroidA);

    const radiusSum = circleA.radius + circleB.radius;

    if (direction.lengthSquare() < radiusSum * radiusSum) {
      let directionLength = direction.length();
      if (directionLength === 0) {
        /**
         * prevent divide 0 error
         */
        directionLength = 0.00000001;
      }
      const penetratedNormal = scaleVector(direction, 1 / directionLength);
      const penetrationDepth = radiusSum - directionLength;
      const penetrationPoint = subVector(
        centroidA,
        scaleVector(penetratedNormal, -circleA.radius),
      );
      return new CollisionManifold(
        penetrationDepth,
        penetratedNormal,
        penetrationPoint,
      );
    }
    return null;
  }

  polygonVSpolygon(polygonA: Polygon, polygonB: Polygon) {
    const contactPointA = this.getContactPoint(polygonA, polygonB);
    if (contactPointA === null) {
      return null;
    }
    const contactPointB = this.getContactPoint(polygonB, polygonA);
    if (contactPointB === null) {
      return null;
    }
    if (contactPointA.depth < contactPointB.depth) {
      return new CollisionManifold(
        contactPointA.depth,
        contactPointA.normal,
        contactPointA.penetrationPoint,
      );
    }
    return new CollisionManifold(
      contactPointB.depth,
      scaleVector(contactPointB.normal, -1),
      contactPointB.penetrationPoint,
    );
  }

  getContactPoint(polygonA: Polygon, polygonB: Polygon) {
    let contact = null;
    let minimumPenetrationDepth = Number.MAX_VALUE;

    for (let i = 0; i < polygonA.normals.length; i++) {
      const pointOnEdge = polygonA.vertices[i];
      const normalOnEdge = polygonA.normals[i];

      const supportPoint = this.getSupportPoint(
        normalOnEdge,
        pointOnEdge,
        polygonB.vertices,
      );

      if (!supportPoint) {
        return null;
      }

      if (supportPoint.penetrationDepth < minimumPenetrationDepth) {
        minimumPenetrationDepth = supportPoint.penetrationDepth;
        contact = new CollisionManifold(
          supportPoint.penetrationDepth,
          normalOnEdge,
          supportPoint.vertex,
        );
      }
    }
    return contact;
  }

  getSupportPoint(
    normalOnEdge: Vector,
    pointOnEdge: Vector,
    polygonVertices: Vector[],
  ) {
    let supportPenetrationDepth = 0;
    let supportPoint = null;

    for (let i = 0; i < polygonVertices.length; i++) {
      const vertex = polygonVertices[i];
      const penetrateVector = subVector(vertex, pointOnEdge);
      const penetrationDepth = penetrateVector.getDotProduct(
        scaleVector(normalOnEdge, -1),
      );

      if (penetrationDepth > supportPenetrationDepth) {
        supportPenetrationDepth = penetrationDepth;
        supportPoint = new SupportPoint(vertex, penetrationDepth);
      }
      if (
        supportPoint &&
        Math.abs(penetrationDepth - supportPenetrationDepth) === 0
      ) {
        supportPoint = new SupportPoint(
          scaleVector(addVector(vertex, supportPoint.vertex), 0.5),
          penetrationDepth,
        );
      }
    }

    return supportPoint;
  }

  circleVSpolygon(circle: Circle, polygon: Polygon) {
    return (
      this.circleVSpolgonEdges(circle, polygon) ||
      this.circleVSpolygonCorner(circle, polygon) ||
      this.circleVSpolygonInclude(circle, polygon)
    );
  }

  circleVSpolgonEdges(circle: Circle, polygon: Polygon) {
    const circleCentroid = circle.centroid;
    let nearestEdgeVertex = null;
    let nearestEdgeNormal = null;
    for (let i = 0; i < polygon.vertices.length; i++) {
      const vertex = polygon.vertices[i];
      const normal = polygon.normals[i];
      const nextVertex =
        polygon.vertices[
          this.calculatorUtil.getIndex(i + 1, polygon.vertices.length)
        ];

      const vertexToCircle = subVector(circleCentroid, vertex);
      const directionToNext = subVector(nextVertex, vertex);
      const directionToNextLength = directionToNext.length();
      directionToNext.normalize();
      const projection = vertexToCircle.getDotProduct(directionToNext);
      const circleNormalProjection = vertexToCircle.getDotProduct(normal);
      if (
        projection > 0 &&
        projection < directionToNextLength &&
        circleNormalProjection >= 0
      ) {
        nearestEdgeNormal = normal;
        nearestEdgeVertex = vertex;
      }
    }
    // out of circle-polygonEdge scope
    if (nearestEdgeNormal === null || nearestEdgeVertex === null) {
      return null;
    }

    const penetrationVector = subVector(circleCentroid, nearestEdgeVertex);
    const penetrationProjection =
      penetrationVector.getDotProduct(nearestEdgeNormal);
    const projectionDepth = penetrationProjection - circle.radius;
    if (projectionDepth < 0) {
      // scale 배율을 radius로 설정해도 될듯?
      const penetreationPoint = addVector(
        circleCentroid,
        scaleVector(nearestEdgeNormal, -circle.radius),
      );
      return new CollisionManifold(
        projectionDepth * -1,
        scaleVector(nearestEdgeNormal, -1),
        penetreationPoint,
      );
    }
    return null;
  }

  circleVSpolygonCorner(circle: Circle, polygon: Polygon) {
    for (let i = 0; i < polygon.vertices.length; i++) {
      const vertex = polygon.vertices[i];
      const direction = subVector(vertex, circle.centroid);
      const distance = direction.length();
      direction.normalize();
      if (distance < circle.radius) {
        const penetrationPoint = addVector(
          circle.centroid,
          scaleVector(direction, circle.radius),
        );
        const penetrationDepth = circle.radius - distance;
        return new CollisionManifold(
          penetrationDepth,
          direction,
          penetrationPoint,
        );
      }
    }
    return null;
  }

  circleVSpolygonInclude(circle: Circle, polygon: Polygon) {
    const length = subVector(circle.centroid, polygon.centroid).length();
    if (length < circle.radius) {
      const penetrationPoint = polygon.centroid;
      const penetrationDepth = length;
      return new CollisionManifold(
        penetrationDepth,
        new Vector({ x: 0, y: 0 }),
        penetrationPoint,
      );
    }
    return null;
  }
}
