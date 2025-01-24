import ImageCircle from "@engine/lib/balls/imageCircle";
import type { ANIMATION } from "@engine/lib/enum/animation";
import Matter from "@engine/lib/matter";
import type Vector from "../../vector";

/**
 * @deprecated
 * @todo
 * maybe deprecated
 */
export default class Monster extends ImageCircle {
  hp: number;
  constructor(
    graphic: ANIMATION,
    position: Vector,
    hp: number,
    radius: number,
  ) {
    super(graphic, position, radius);
    this.hp = hp;
    this.matter = new Matter(0.7, 0.4);
  }
}
