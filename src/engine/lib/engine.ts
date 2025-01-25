import HashGrid from "@engine/grid/hashGrid";
import type Joint from "@engine/joints/joint";
import Calculator from "@engine/utils/calculator";
import Collision from "@engine/utils/collision";
import Draw from "@engine/utils/draw";
import type Charactor from "./game/charactor";
import getMousePosition from "./getMousePosition";
import { registry } from "./main";
import Rectangle from "./rigidbody/rectangle";
import RigidBody from "./rigidbody/rigidbody";
import Vector, { scaleVector, subVector } from "./vector";
// import { Engine as rustEngine } from '../../../rust-module/pkg/rust_module';

export default class Engine {
  canvas: HTMLCanvasElement;
  world: Vector;
  ctx: CanvasRenderingContext2D;
  drawUtils: Draw;
  calculatorUtils: Calculator;
  top: Rectangle;
  bottom: Rectangle;
  left: Rectangle;
  right: Rectangle;
  collision: Collision;
  objects: RigidBody[];
  joints: Joint[];
  iteration: number;
  grid: HashGrid;
  camera: CameraType;
  gravity: Vector;
  charactorMap: Map<number, Charactor>;
  clicked: boolean;
  mouseFollower: Vector | null;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    world: Vector,
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.drawUtils = Draw.getInstance();
    this.joints = [];
    this.calculatorUtils = Calculator.getInstance();
    this.collision = Collision.getInstance();
    this.gravity = new Vector({ x: 0, y: 0 });
    this.charactorMap = new Map();
    this.world = world;
    this.iteration = 10;
    this.camera = {
      x: 0,
      y: 0,
      scale: 1,
    };
    this.top = new Rectangle(
      new Vector({ x: this.world.x / 2, y: -50 }),
      this.world.x + 200,
      100,
      "black",
    );
    this.bottom = new Rectangle(
      new Vector({ x: this.world.x / 2, y: this.world.y + 50 }),
      this.world.x + 200,
      100,
      "black",
    );

    this.left = new Rectangle(
      new Vector({ x: -50, y: this.world.y / 2 }),
      100, // 너비
      this.world.y + 200, // 높이
      "black",
    );
    this.right = new Rectangle(
      new Vector({ x: this.world.x + 50, y: this.world.y / 2 }),
      100, // 너비
      this.world.y + 200, // 높이
      "black",
    );

    this.objects = [];
    const bottom = new RigidBody(this.bottom, 0);
    const top = new RigidBody(this.top, 0);
    const left = new RigidBody(this.left, 0);
    const right = new RigidBody(this.right, 0);

    this.objects.push(bottom);
    this.objects.push(top);
    this.objects.push(left);
    this.objects.push(right);
    this.mouseFollower = null;
    this.clicked = false;

    this.grid = new HashGrid(15);
    this.grid.initializeComponent(this.world, this.objects);
    this.grid.refreshGrid(this.objects);
  }

  handleJoints() {
    for (let i = 0; i < this.joints.length; i++) {
      this.joints[i].updateConnectionA();
      this.joints[i].updateConnectionB();
    }
  }

  update = (deltaTime: number) => {
    if (
      registry.gameTime % 240 === 0 &&
      (this.mouseFollower === null || this.clicked)
    ) {
      this.objects[4].addVelocity(
        new Vector({
          x: this.calculatorUtils.getRandomValue(-1000, 1000),
          y: this.calculatorUtils.getRandomValue(-1000, 1000),
        }),
      );
      this.objects[5].addVelocity(
        new Vector({
          x: this.calculatorUtils.getRandomValue(-1000, 1000),
          y: this.calculatorUtils.getRandomValue(-1000, 1000),
        }),
      );
      this.objects[6].addVelocity(
        new Vector({
          x: this.calculatorUtils.getRandomValue(-1000, 1000),
          y: this.calculatorUtils.getRandomValue(-1000, 1000),
        }),
      );

      // 각속도 랜덤 설정 (30 ~ 100)
      this.objects[4].angularVelocity = this.calculatorUtils.getRandomValue(
        -60,
        60,
      );
      this.objects[5].angularVelocity = this.calculatorUtils.getRandomValue(
        -60,
        60,
      );
      this.objects[6].angularVelocity = this.calculatorUtils.getRandomValue(
        -60,
        60,
      );
    }
    const fpsText = `${Math.round(1 / deltaTime)}FPS`;
    const d = 1 / 60;
    this.drawUtils.drawText(
      new Vector({
        x: 5,
        y: 40,
      }),
      20,
      "black",
      fpsText,
    );

    this.charactorMap.forEach((charactor) => charactor.update());

    this.grid.refreshGrid(this.objects);
    this.handleJoints();

    if (this.mouseFollower !== null && !this.clicked) {
      this.objects.forEach((object) => {
        object.addForce(
          scaleVector(
            subVector(this.mouseFollower, object.shape.centroid),
            5000,
          ),
        );
      });
    }

    for (let it = 0; it < this.iteration; it++) {
      this.objects.forEach((object: RigidBody) => {
        object.addForce(scaleVector(this.gravity, object.mass));
        object.update(d / this.iteration);
      });

      this.objects.forEach((object: RigidBody) => {
        object.shape.boundingBox.collision = false;
        const neighbors = this.grid.getNeighborObject(object);

        for (let j = 0; j < neighbors.length; j++) {
          const neighbor = neighbors[j];
          if (object.canCollision(neighbor)) {
            if (
              !object.shape.boundingBox.intersect(neighbor.shape.boundingBox)
            ) {
              // no collision
              continue;
            }

            const result = this.collision.checkCollision(
              object.shape,
              neighbor.shape,
            );
            if (result) {
              /** resolve collision */
              // hard crashed

              if (result.depth > 1) {
                // depth mostly between 3 ~ 12
                // this.collisionCache.onCollision(result, object, neighbor);
              }

              result.resolveCollision(object, neighbor);
              result.positionalCorrection(object, neighbor, 0.3);
            }
            object.shape.boundingBox.collision = true;
            object.shape.boundingBox.collision = true;
          }
        }
      });
    }

    this.objects.forEach((object: RigidBody) => {
      if (!object.isKinematic) {
        if (object.shape.centroid.isOut()) {
          const toStartPoint = subVector(
            new Vector({ x: 100, y: 100 }),
            object.shape.centroid,
          );
          object.shape.move(toStartPoint);

          object.velocity = new Vector({ x: 100, y: 100 });
        }
      }
    });
  };

  draw() {
    // if (registry.gamePhase === "pause") this.GameBoard.draw();
    this.objects.forEach((object, index) => {
      object.shape.calculateBoundingBox();
      /**
       * @todo
       * its dev mode delete boundingbox drawing
       */
      // object.shape.boundingBox.draw();
      /**
       * @description
       * ignore top,bottom,left,right
       */
      if (index < 4) return;

      object.shape.draw();
    });
    this.objects.forEach((component) => {
      component.drawEffect();
    });

    // const particlesPtr = this.rustEngine.particles();
    // const cells = new Float64Array(registry.memory.buffer, particlesPtr, 1600 * 7);

    // for (let i = 0; i < 1600 * 7; i += 7) {
    //   // i is index of particle
    //   // cells[i]; // positionx
    //   // cells[i + 1]; // positiony
    //   // cells[i + 2]; // prevx
    //   // cells[i + 3]; // prevy
    //   // cells[i + 4]; // velox
    //   // cells[i + 5]; // veloy

    //   this.drawUtils.fillCircle(new Vector({ x: cells[i + 1], y: cells[i + 2] }), 5, 'blue');
    // }
  }

  clear() {
    this.ctx.fillStyle = "white";

    this.ctx.clearRect(
      -this.camera.x / this.camera.scale,
      -this.camera.y / this.camera.scale,
      this.canvas.width / this.camera.scale,
      this.canvas.height / this.camera.scale,
    );
  }

  setZoom = () => {
    // const dpr = window.devicePixelRatio || 1;
    // this.ctx.scale(dpr, dpr);
    // this.ctx.save();
    // this.ctx.setTransform(
    //   this.camera.scale,
    //   0,
    //   0,
    //   this.camera.scale,
    //   this.camera.x,
    //   this.camera.y,
    // );
  };
  onMouseDown(_e: MouseEvent) {
    this.clicked = true;
  }

  onMouseUp(_e: MouseEvent) {
    this.clicked = false;
  }
  onMouseOver(e: MouseEvent) {
    const mousePosition = getMousePosition(this.canvas, e);
    this.mouseFollower = mousePosition;
  }
  onMouseOut(_e: MouseEvent) {
    this.mouseFollower = null;
    this.clicked = false;
  }

  onMouseMove(e: MouseEvent) {
    const mousePosition = getMousePosition(this.canvas, e);
    this.mouseFollower = mousePosition;
  }

  restoreZoom = () => {
    this.ctx.restore();
  };
}
