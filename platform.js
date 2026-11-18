function setup() {
  createCanvas(400, 400);
}
// let x = 100;
// let y = 100;

class Platform {
  constructor(x, y, range) {
    this.x = x;
    this.y = y;
    this.range = range;
    this.w = 100;
    this.h = 30;
    this.speed = 3;
    this.maxX = x + this.range;
    this.minX = x - this.range;
  }
  drawPlatform() {
    fill("pink");
    rect(this.x, this.y, this.w, this.h);
  }
  //make platform move
  movePlatform() {
    this.x += this.speed;

    if (this.x + this.w > this.maxX || this.x < this.minX) {
      this.speed = -this.speed;
    }
  }
}

const firstPlatform = new Platform(200, 200, 100);
const secondPlatform = new Platform(120, 300, 120);

function draw() {
  background(220);
  firstPlatform.drawPlatform();
  firstPlatform.movePlatform();
  secondPlatform.drawPlatform();
  secondPlatform.movePlatform();
}

//   drawPlatform(x, y);
//   x += speed;
//   if (x > 100 || x < 50) {
//     speed = +speed;

//     y -= speed;
//     if (y > 100 || y < 500);
//     speed = -speed;
//   }
// }
