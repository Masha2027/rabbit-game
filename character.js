export default class Rabbit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 60;
    this.h = 90;
  }

  jump() {
    this.y -= 100;
  }

  fall() {
    this.y += 5;
  }

  moveLeft() {
    this.x -= 5;
  }

  moveRight() {
    this.x += 5;
  }

  isColliding(object) {
    if (
      Math.abs(this.y + this.h - object.yPos) < 5 &&
      this.x + this.w >= object.xPos &&
      this.x <= object.xPos + object.width
    ) {
      return true;
    }
    return false;
  }

  display() {
    //body
    fill("beige");
    stroke(2);
    rect(this.x, this.y, 60, 90, 20);

    //left ear
    fill("pink");
    stroke("black");
    ellipse(this.x + 10, this.y - 33, 30, 70);
    //right ear
    fill("pink");
    ellipse(this.x + 50, this.y - 33, 30, 70);

    //left eye
    fill("white");
    stroke("black");
    circle(this.x + 15, this.y + 25, 25);
    //left inner eye
    fill("black");
    stroke("black");
    circle(this.x + 15, this.y + 30, 10);
    //right eye
    fill("white");
    circle(this.x + 45, this.y + 25, 25);
    //right inner eye
    fill("black");
    stroke("black");
    circle(this.x + 45, this.y + 30, 10);
    //nose
    fill("pink");
    stroke("pink");
    strokeJoin(ROUND);
    strokeWeight(4);
    triangle(
      this.x + 20,
      this.y + 45,
      this.x + 35,
      this.y + 45,
      this.x + 28,
      this.y + 52
    );
    strokeWeight(2);
  }
}
