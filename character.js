class Rabbit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 60;
    this.h = 90;
    this.velocityY = 0; //this is how fast the rabbit moves up and down now
    this.gravity = 0.4; //this is how strong the rabbit gets pulled down
  }

  jump() {
    this.velocityY = -12; //negative number means upwards
  }

  fall() {
    this.velocityY += this.gravity;
    this.y += this.velocityY;
  }

  moveLeft() {
    this.x -= 5; //what does this influence?
  }

  moveRight() {
    this.x += 5;
  }

  isLandingOn(platform, previousBottom) {
    const bottom = this.y + this.h;
    return (
      this.velocityY > 0 && // only while falling
      previousBottom <= platform.y && // feet were above the platform
      bottom >= platform.y && // feet are now at or below its top
      this.x + this.w >= platform.x && // horizontally overlapping
      this.x <= platform.x + platform.w
    );
  }

  display() {
    push(); // saves the style we have

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
      this.y + 52,
    );

    pop(); // puts the style settings back
  }
}
