import { Rabbit } from "./character.js";
import { Platform, platforms } from "./platform.js";

let rabbit;
let platform;
let movePlatform;

function setup() {
  createCanvas(500, 800);
}

rabbit = new Rabbit(200, 100);
platform = new Platform(200, 200, 0, false);
movePlatform = new movePlatform(250, 200, 150, true);

let y = 350;
for (let i = 0; i < 3; i++) {
  const range = Math.floor(Math.random() * 51) + 45; // between 45 en 95. Math.floor(Math.random() * (max - min + 1)) + min
  const x = Math.floor(Math.random() * (400 - 100 - 2 * range)) + range; // stays inside canvas
  const moving = i % 2 === 0;

  createPlatform(x, y, range, moving);
  y -= Math.floor(Math.random() * 31) + 100; // distance between platforms, is 70
}

function createPlatform(x, y, range, moving) {
  const platform = new Platform(x, y, range, moving);
  platforms.push(platform);
  return platform;
}

function draw() {
  background("#00FFFF");

  for (const platform of platforms) {
    platform.display();
    platform.movePlatform();
  }

  if (keyIsDown(LEFT_ARROW)) {
    rabbit.moveLeft();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    rabbit.moveRight();
  }

  //temporary: bounce on the ground until the platforms exist
  if (rabbit.y + rabbit.h >= height) {
    rabbit.jump();
  }
  rabbit.display();
  rabbit.fall();
}

function keyPressed() {
  rabbit.jump();
}
