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
    this.x -= 5;
  }

  moveRight() {
    this.x += 5;
  }

  isLandingOn(platform, previousBottom) {
  const bottom = this.y + this.h;
  return (
    this.velocityY > 0 &&                 // only while falling
    previousBottom <= platform.y &&       // feet were above the platform
    bottom >= platform.y &&               // feet are now at or below its top
    this.x + this.w >= platform.x &&      // horizontally overlapping
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
      this.y + 52
    );

    pop(); // puts the style settings back
  }
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

const rabbit = new Rabbit(200, 300);
const platforms = []; // the list: all platforms will be displayed here

// Function that makes one platform and puts it in the list
function createPlatform(x, y, range, moving) {
  const platform = new Platform(x, y, range, moving);
  platforms.push(platform);
  return platform;
}

// 1 setup for the whole game
function setup() {
  createCanvas(500, 800);

  // Loop: creates 6 random platforms (only happens once). For loop because we know how many platforms we want
  let y = height - 50; // the lowest platform
  for (let i = 0; i < 6; i++) {
    const range = Math.floor(Math.random() * 51) + 45; // between 45 en 95
    const x = Math.floor(Math.random() * (width - 100 - 2 * range)) + range; // stays inside canvas
    const moving = i % 2 === 0;

    createPlatform(x, y, range, moving);
    y -= Math.floor(Math.random() * 31) + 100; // distance between platforms: 100 to 130
  }
}

// 1 draw for the whole game
function draw() {
  background("#00FFFF");

  // draws and moves all platforms
  for (const platform of platforms) {
    platform.drawPlatform();
    platform.movePlatform();
  }

  // rabbit
  const previousBottom = rabbit.y + rabbit.h; // where the feet were before moving
  rabbit.fall();

  if (keyIsDown(LEFT_ARROW)) {
    rabbit.moveLeft();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    rabbit.moveRight();
  }

  // land on a platform -> bounce
  for (const platform of platforms) {
    if (rabbit.isLandingOn(platform, previousBottom)) {
      rabbit.y = platform.y - rabbit.h; // put the feet exactly on top
      rabbit.jump();
    }
  }

  // temporary: bounce on the ground
  if (rabbit.y + rabbit.h >= height) {
    rabbit.y = height - rabbit.h;
    rabbit.jump();
  }

  rabbit.display();
}
