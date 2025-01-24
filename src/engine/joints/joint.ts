import type RigidBody from "@engine/lib/rigidbody/rigidbody";
import type Vector from "@engine/lib/vector";
import type JointConnection from "./jointConnection";

export default class Joint {
  jointConnection: JointConnection;
  objectA: RigidBody;
  objectB: RigidBody;
  anchorAId: number;
  anchorBId: number;

  constructor(jointConnection: JointConnection) {
    this.jointConnection = jointConnection;
    this.objectA = jointConnection.objectA;
    this.objectB = jointConnection.objectB;
    this.anchorAId = jointConnection.anchorAId;
    this.anchorBId = jointConnection.anchorBId;

    if (new.target === Joint) {
      throw new TypeError(
        "cannot construct abstract instance directly of class Joint",
      );
    }
  }

  getAnchorAPos(): Vector {
    const result = this.objectA.getShape().anchorPoints.get(this.anchorAId);

    if (!result) {
      throw new Error("anchor point not found");
    }
    return result;
  }

  getAnchorBPos(): Vector {
    const result = this.objectB.getShape().anchorPoints.get(this.anchorBId);

    if (!result) {
      throw new Error("anchor point not found");
    }
    return result;
  }

  updateConnectionA() {}

  updateConnectionB() {}

  draw() {
    this.jointConnection.draw();
  }
}
