import { CHARACTOR } from "@engine/lib/enum/charactor";
import Sprite from "@engine/utils/sprite";

export const spriteData: Partial<Record<CHARACTOR, Sprite>> = {};

const spriteSourcePath: Record<CHARACTOR, string> = {
  [CHARACTOR.GNOME_MAGE]: "/images/sun.png",
};

export const initSpriteData = () => {
  Object.entries(spriteSourcePath).forEach(([key, value]) => {
    const sprite = new Sprite();
    sprite.init(value);
    console.log(sprite);
    spriteData[key as unknown as CHARACTOR] = sprite;
  });
};
