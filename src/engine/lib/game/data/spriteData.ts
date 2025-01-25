import { CHARACTOR } from "@engine/lib/enum/charactor";
import Sprite from "@engine/utils/sprite";

export const spriteData: Partial<Record<CHARACTOR, Sprite>> = {};

const spriteSourcePath: Record<CHARACTOR, string> = {
  [CHARACTOR.SUN]: "sun",
  [CHARACTOR.MOON]: "moon",
  [CHARACTOR.EARTH]: "earth",
};

export const initSpriteData = (
  planetData: Queries.GetAllPlanetsQuery["allSanityPlanet"]["nodes"],
) => {
  Object.entries(spriteSourcePath).forEach(([key, value]) => {
    const sprite = new Sprite();
    sprite.init(planetData.find((item) => item.name === value).image.asset.url);
    spriteData[key as unknown as CHARACTOR] = sprite;
  });
};
