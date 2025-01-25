import Draw from "@engine/utils/draw";
import Engine from "./engine";
import { CHARACTOR } from "./enum/charactor";
import { spriteData } from "./game/data/spriteData";
import Circle from "./rigidbody/circle";
import RigidBody from "./rigidbody/rigidbody";
import Vector from "./vector";

/**
 * to use Engine as class Type the type hasbeen added seperatly from default Registry type
 */
export const registry: defaultRegistryType & {
  engine: Engine;
} = {
  createdId: 0,
  selectedObjectId: -1,
  engine: null as unknown as Engine,
  mouseEventType: "NONE",
  jointEventType: "NONE",
  createEventType: "NONE",
  animationOffset: 0,
  gameTime: 0,
  setMouseEventType: () => {},
  gamePhase: "play",
  memory: {
    buffer: new ArrayBuffer(0),
    grow: () => 0,
  },
};

const main = (
  document: Document,
  setMouseEventType: (mouseType: MouseType) => void,
) => {
  const canvas: HTMLCanvasElement = document.getElementById(
    "myCanvas",
  ) as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  canvas.width = 400;
  canvas.height = 400;

  let currentTime = 0;

  if (ctx) {
    Draw.createInstance(ctx);
    registry.engine = new Engine(
      canvas,
      ctx,
      // new Vector({ x: window.innerWidth, y: window.innerHeight }),
      new Vector({ x: 400, y: 400 }),
    );
    const sun = new RigidBody(
      new Circle(new Vector({ x: 200, y: 200 }), 25, "blue"),
      12,
    );
    const spriteConfiguration: spriteConfiguration = {
      width: 40,
      height: 40,
      row: 0,
      column: 0,
      drawWidth: 62,
      drawHeight: 62,
      xOffset: 0,
      yOffset: 0,
    };
    sun.shape.draw = () => {
      spriteData[CHARACTOR.SUN]?.drawSprite(sun, spriteConfiguration);
    };
    sun.addVelocity(
      new Vector({
        x: registry.engine.calculatorUtils.getRandomValue(-1000, 1000),
        y: registry.engine.calculatorUtils.getRandomValue(-1000, 1000),
      }),
    );
    sun.angularVelocity = registry.engine.calculatorUtils.getRandomValue(
      -60,
      60,
    );
    registry.engine.objects.push(sun);
    const moon = new RigidBody(
      new Circle(new Vector({ x: 200, y: 200 }), 25, "blue"),
      12,
    );

    moon.addVelocity(
      new Vector({
        x: registry.engine.calculatorUtils.getRandomValue(-1000, 1000),
        y: registry.engine.calculatorUtils.getRandomValue(-1000, 1000),
      }),
    );
    moon.angularVelocity = registry.engine.calculatorUtils.getRandomValue(
      -60,
      60,
    );
    registry.engine.objects.push(moon);
    const spriteConfiguration1: spriteConfiguration = {
      width: 31,
      height: 31,
      row: 0,
      column: 0,
      drawWidth: 58,
      drawHeight: 58,
      xOffset: 1,
      yOffset: 1,
    };
    moon.shape.draw = () => {
      spriteData[CHARACTOR.MOON]?.drawSprite(moon, spriteConfiguration1);
    };
    const earth = new RigidBody(
      new Circle(new Vector({ x: 200, y: 200 }), 25, "blue"),
      12,
    );

    earth.addVelocity(
      new Vector({
        x: registry.engine.calculatorUtils.getRandomValue(-1000, 1000),
        y: registry.engine.calculatorUtils.getRandomValue(-1000, 1000),
      }),
    );
    earth.angularVelocity = registry.engine.calculatorUtils.getRandomValue(
      -60,
      60,
    );
    registry.engine.objects.push(earth);

    const spriteConfiguration2: spriteConfiguration = {
      width: 32,
      height: 32,
      row: 0,
      column: 0,
      drawWidth: 50,
      drawHeight: 50,
      xOffset: 0,
      yOffset: 0,
    };
    earth.shape.draw = () => {
      spriteData[CHARACTOR.EARTH]?.drawSprite(earth, spriteConfiguration2);
    };

    currentTime = performance.now();
    registry.setMouseEventType = (mouseType) => {
      setMouseEventType(mouseType);
    };
    const loop = () => {
      /** update animationOffset */
      registry.animationOffset = (registry.animationOffset + 1) % 60;

      const targetTime = performance.now();
      const deltaTime = (targetTime - currentTime) / 1000;

      registry.engine.setZoom();
      registry.engine.clear();
      if (registry.gamePhase === "pause") {
        // registry.engine.updateEdit();
      } else {
        registry.gameTime = registry.gameTime + 1;
        registry.engine.update(deltaTime);
      }
      registry.engine.draw();
      registry.engine.restoreZoom();
      window.requestAnimationFrame(loop);
      currentTime = targetTime;
    };

    loop();

    canvas.addEventListener("mousemove", (e: MouseEvent) => {
      registry.engine.onMouseMove(e);
    });

    canvas.addEventListener("mousedown", (e: MouseEvent) => {
      registry.engine.onMouseDown(e);
    });

    canvas.addEventListener("mouseup", (e: MouseEvent) => {
      registry.engine.onMouseUp(e);
    });

    canvas.addEventListener("mouseover", (e: MouseEvent) => {
      registry.engine.onMouseOver(e);
    });

    canvas.addEventListener("mouseout", (e: MouseEvent) => {
      registry.engine.onMouseOut(e);
    });

    window.addEventListener(
      "resize",
      () => {
        canvas.width = 400;
        canvas.height = 400;
      },
      false,
    );
  }
};

export default main;
