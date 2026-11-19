const platforms = []; // the list: all platforms will be displayed here

function setup() {
  createCanvas(400, 400);

  // Loop: creates 4 random platforms (only happens once). For loop because we know how many platforms we want
  let y = 350;
  for (let i = 0; i < 3; i++) {
    const range = Math.floor(Math.random() * 51) + 45; // between 45 en 95. Math.floor(Math.random() * (max - min + 1)) + min
    const x = Math.floor(Math.random() * (400 - 100 - 2 * range)) + range; // stays inside canvas
    const moving = i % 2 === 0;

    createPlatform(x, y, range, moving);
    y -= Math.floor(Math.random() * 31) + 100; // distance between platforms, is 70
  }
}

// Functie that makes one platform and puts it in the list
function createPlatform(x, y, range, moving) {
  const platform = new Platform(x, y, range, moving);
  platforms.push(platform);
  return platform;
}

class Platform {
  constructor(x, y, range, moving) {
    this.x = x;
    this.y = y;
    this.range = range;
    this.w = 100;
    this.h = 30;
    this.moving = moving;
    this.speed = moving ? 2 : 0;
    this.maxX = x + this.range;
    this.minX = x - this.range;
  }

  drawPlatform() {
    fill(this.moving ? "pink" : "lightblue");
    rect(this.x, this.y, this.w, this.h);
  }

  // make platform move
  movePlatform() {
    this.x += this.speed;

    if (this.x > this.maxX || this.x < this.minX) {
      this.speed = -this.speed;
    }
  }
}

function draw() {
  background(220);

  // draws and moves all platforms
  for (const platform of platforms) {
    platform.drawPlatform();
    platform.movePlatform();
  }
}

class Rabbit {
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

const rabbit = new Rabbit(200, 300);

function setup() {
  createCanvas(500, 800);
}

function draw() {
  background("#00FFFF");

  rabbit.fall();

  if (keyIsDown(LEFT_ARROW)) {
    rabbit.moveLeft();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    rabbit.moveRight();
  }

  // temporary: bounce on the ground until the platforms exist
  if (rabbit.y + rabbit.h >= height) {
    rabbit.jump();
  }

  rabbit.display();
}