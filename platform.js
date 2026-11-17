function setup() {
  createCanvas(400, 400);
}
// let x = 100;
// let y = 100;

class Platform {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 30;
  }
  drawPlatform() {
    fill("pink");
    rect(this.x, this.y, this.w, this.h);
  }
}

const firstPlatform = new Platform(200, 200);

function draw() {
  firstPlatform.drawPlatform();
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
