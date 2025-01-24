import Draw from "@engine/utils/draw";
import Engine from "./engine";
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
    const magician = new RigidBody(
      new Circle(new Vector({ x: 100, y: 100 }), 25, "blue"),
      12,
    );
    // const spriteConfiguration: spriteConfiguration = {
    //   width: 72,
    //   height: 72,
    //   row: 0,
    //   column: 0,
    // };
    // magician.shape.draw = () => {
    //   spriteData[CHARACTOR.GNOME_MAGE]?.drawSprite(
    //     magician,
    //     spriteConfiguration,
    //   );
    // };
    registry.engine.objects.push(magician);
    const magician1 = new RigidBody(
      new Circle(new Vector({ x: 100, y: 200 }), 25, "blue"),
      12,
    );

    registry.engine.objects.push(magician1);
    const magician2 = new RigidBody(
      new Circle(new Vector({ x: 120, y: 125 }), 25, "blue"),
      12,
    );

    registry.engine.objects.push(magician2);

    const magician3 = new RigidBody(
      new Circle(new Vector({ x: 80, y: 100 }), 25, "blue"),
      12,
    );

    magician3.addVelocity(new Vector({ x: 1000, y: 200 }));
    magician3.angularVelocity = 500;
    registry.engine.objects.push(magician3);

    // magician.shape.draw = () => {
    //   spriteData[CHARACTOR.GNOME_MAGE]?.drawSprite(magician, spriteConfiguration);
    // };
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
