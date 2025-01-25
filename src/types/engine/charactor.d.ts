type CharactorState = "idle" | "damage" | "skill";

interface Sprite {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface AnimationConfig {
  graphic: number; //as enum type
  frames: {
    [key in CharactorState]: (Sprite & { frameRate: number })[];
  };
}

/**
 * @deprecated
 * convert to
 * @type CharactorAnimationConfig
 */
type spriteConfiguration = {
  width: number;
  height: number;
  row: number;
  column: number;
  drawWidth: number;
  drawHeight: number;
  xOffset: number;
  yOffset: number;
};
