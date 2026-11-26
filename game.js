import { Rabbit } from "./character.js";
import { Platform } from "./platform.js";

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
