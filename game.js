import { Rabbit } from "./character.js";
import { Platform } from "./platform.js";

const rabbit = new Rabbit(200, 300);
let platforms = []; // the list: all platforms will be displayed here
let gameOver = false;
const scrollLine = 300;

// Function that makes one platform and puts it in the list
function createPlatform(x, y, range, moving) {
  const platform = new Platform(x, y, range, moving);
  platforms.push(platform);
  return platform;
}

function randomGap() {
  return Math.floor(Math.random() * 31) + 100;
}

function createRandomPlatform(y) {
  const range = Math.floor(Math.random() * 51) + 54;
  const x = Math.floor(Math.random() * (width - 100 - 2 * range)) + range;
  const moving = Math.random() < 0.5; // 5 from the 10 platforms are moving platforms
  createPlatform(x, y, range, moving);
}

function fillPlatforms() {
  let top = platforms[platforms.length - 1].y; //?
  while (top > -100) {
    top -= randomGap();
    createRandomPlatform(top);
  }
}

function resetGame() {
  platforms = [];
  gameOver = false;

  rabbit.x = 220;
  rabbit.y = height - 140;
  rabbit.velocityY = 0;
  rabbit.jump();

  const startPlatform = createPlatform(rabbit.x - 20, height - 50, 0, false);
  startPlatform.reached = true;
  fillPlatforms();
}

// 1 setup for the whole game
function setup() {
  createCanvas(500, 800);
  resetGame();
}

function findNextPlatform() {
  return platforms.find((platform) => !platform.reached);
}

function updateGame() {
  for (const platform of platforms) {
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

  for (const platform of platforms) {
    if (rabbit.isLandingOn(platform, previousBottom)) {
      rabbit.y = platform.y - rabbit.h; // put the feet exactly on top
      rabbit.jump();
      for (const other of platforms) {
        if (other.y >= platform.y) {
          other.reached = true;
        }
      }
      break;
    }
  }

  //Scrolling
  if (rabbit.y < scrollLine) {
    const scrollAmount = scrollLine - rabbit.y;
    rabbit.y = scrollLine;

    for (const platform of platforms) {
      platform.y += scrollAmount;
    }
  }

  platforms = platforms.filter((platform) => platform.y < height + 50);

  fillPlatforms();

  const nextPlatform = findNextPlatform();
  if (
    nextPlatform &&
    rabbit.velocityY > 0 &&
    rabbit.y + rabbit.h > nextPlatform.y + nextPlatform.h
  ) {
    loseGame();
  }

  if (rabbit.y > height) {
    loseGame();
  }
}

function loseGame() {
  gameOver = true;
}

function drawLoseScreen() {
  push();
  noStroke();
  fill(0, 0, 0, 170);
  rect(0, 0, width, height);
  textAlign(CENTER, CENTER);
  fill("#e75dc9");
  textSize(46);
  text("Your Rabbit died", width / 2, height / 2 - 50);

  textSize(24);
  text("Press SPACE to save your Rabbit", width / 2, height / 2 + 60);
  pop();
}

//   // Loop: creates 6 random platforms (only happens once). For loop because we know how many platforms we want
//   let y = height - 50; // the lowest platform
//   for (let i = 0; i < 6; i++) {
//     const range = Math.floor(Math.random() * 51) + 45; // between 45 en 95
//     const x = Math.floor(Math.random() * (width - 100 - 2 * range)) + range; // stays inside canvas
//     const moving = i % 2 === 0;

//     createPlatform(x, y, range, moving);
//     y -= Math.floor(Math.random() * 31) + 100; // distance between platforms: 100 to 130
//   }
// }

// 1 draw for the whole game
function draw() {
  background("#00FFFF");

  if (!gameOver) {
    updateGame();
  }

  for (const platform of platforms) {
    platform.drawPlatform();
  }
  rabbit.display();

  if (gameOver) {
    drawLoseScreen();
  }
}

function keyPressed() {
  if (gameOver && key === " ") {
    resetGame();
  }
}
// // draws and moves all platforms
// for (const platform of platforms) {
//   platform.drawPlatform();
//   platform.movePlatform();
// }

// // rabbit
// const previousBottom = rabbit.y + rabbit.h; // where the feet were before moving
// rabbit.fall();

// if (keyIsDown(LEFT_ARROW)) {
//   rabbit.moveLeft();
// }
// if (keyIsDown(RIGHT_ARROW)) {
//   rabbit.moveRight();
// }

// // land on a platform -> bounce
// for (const platform of platforms) {
//   if (rabbit.isLandingOn(platform, previousBottom)) {
//     rabbit.y = platform.y - rabbit.h; // put the feet exactly on top
//     rabbit.jump();
//   }
// }

//   // temporary: bounce on the ground
//   if (rabbit.y + rabbit.h >= height) {
//     rabbit.y = height - rabbit.h;
//     rabbit.jump();
//   }

//   rabbit.display();
// }
