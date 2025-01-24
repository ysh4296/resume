import { registry } from "@engine/lib/main";
import Circle from "@engine/lib/rigidbody/circle";
import RigidBody from "@engine/lib/rigidbody/rigidbody";
import Vector, { rotateVector, subVector } from "@engine/lib/vector";
import type { ANIMATION } from "../enum/animation";
import { animationData } from "../game/data/animationData";

export default class ImageCircle extends RigidBody {
  graphic: ANIMATION;
  state: CharactorState;
  frameNumber: number;
  frameOffset: number;
  stunDuration: number;
  hp: number;
  radius: number;

  constructor(graphic: ANIMATION, position: Vector, radius: number) {
    super(
      new Circle(
        new Vector({ x: position.x + Math.random() * 10 - 5, y: position.y }),
        radius,
        "blue",
      ),
      0.04,
    );
    this.radius = radius;
    this.graphic = graphic;
    this.state = "idle";
    this.hp = 200;
    this.frameNumber = 0;
    this.frameOffset = 0;
    this.stunDuration = 0;

    const originalUpdate = this.update.bind(this);

    /**
     * @todo
     * collision시에 피격이팩트를 넣는게 아니라 피격일 시 행동양식을 함수로 구현하기
     */

    this.update = (deltaTime: number) => {
      if (this.state !== "idle" && this.stunDuration > 0) {
        originalUpdate(0);
        return;
      }
      originalUpdate(deltaTime);
    };
    /**
     * 캐릭터의 sprite 정보, sprite state, frame number, frame offset 만으로 animation을 그릴 수있어야 합니다.
     * image circle의 draw 로직은 테스트중이며 전체 game object의 기본 draw 로직으로 적용될 예정입니다.
     */
    this.shape.draw = () => {
      if (this.state !== "idle" && this.stunDuration > 0) {
        registry.engine.drawUtils.drawCircle(
          this.shape.centroid,
          this.radius,
          "white",
        );
        if (--this.stunDuration === 0) this.state = "idle";
        return;
      }

      let newAngle = 0;

      // if (this.velocity.length() > 10) {
      //   newAngle = registry.engine.calculatorUtils.getAngleBetweenVectors(
      //     new Vector({ x: 0, y: 1 }),
      //     this.velocity,
      //   );
      // }
      newAngle = this.shape.orientation;

      const newStart = subVector(
        this.shape.centroid,
        rotateVector(new Vector({ x: this.radius, y: this.radius }), newAngle),
      );
      animationData[this.graphic]?.drawAnimation(
        this.state,
        this.frameNumber,
        this.radius * 2,
        this.radius * 2,
        newAngle,
        newStart,
      );
      // loop & charactor state logic
      this.frameOffset++;

      // go next frame
      if (
        this.frameOffset ===
        animationData[this.graphic]?.animationConfig.frames[this.state][
          this.frameNumber
        ].frameRate
      ) {
        this.frameOffset = 0; // reset frameoffset
        // loop and nextframe
        this.frameNumber++;

        if (
          this.frameNumber ===
          animationData[this.graphic]?.animationConfig.frames[this.state].length
        ) {
          // reset State
          if (this.state !== "idle") this.state = "idle";
          this.frameNumber = 0;
        }
      }
    };
  }

  onDamage = (damage: number, _point: Vector) => {
    this.state = "damage";
    this.stunDuration = 12;
    this.hp -= damage;
  };
}
