export default class Matter {
  restitution: number;
  friction: number;
  constructor(restitution = 1, friction = 0.3) {
    this.restitution = restitution;
    this.friction = friction;
  }
}
