// Define what states the game has
// const gameState = {
//   win: "gameWon",
//   lose: "gameLose",
//   intro: "gameIntro",
//   active: "gameActive",
// };

// //  Track the current gamestate, intro by default
// let currentGameState = gameState.intro;

// // Make a new character
// const gameCharacter = new Character(100, 300, 100, 100);

// // Make a test platform
// const testPlatform = new Platform(100, 100, 100, 50);

// // Make an introductory button

import { Rabbit } from "./character.js";
import { Platform, platforms } from "./platform.js";

// const startButton = new Button(100, 100, 200, 100);
const rabbit = new Rabbit(200, 300);
const platform = new Platform(100, 300, 100);
const platforms = []; // the list: all platforms will be displayed here

//background
function setup() {
  createCanvas(500, 800);

  // Loop: creates 8 random platforms (only happens once). For loop because we know how many platforms we want
  // let y = height - 50; // the lowest platform
  // for (let i = 0; i < 8; i++) {
  //   const range = Math.floor(Math.random() * 51) + 45; // between 45 en 95
  //   const x = Math.floor(Math.random() * (width - 100 - 2 * range)) + range; // stays inside canvas
  //   const moving = i % 2 === 0;

  //   createPlatform(x, y, range, moving);
  //   y -= Math.floor(Math.random() * 31) + 100; // distance between platforms: 100 to 130

  // Loop: creates 3 random platforms (only happens once). For loop because we know how many platforms we want

  // Functie that makes one platform and puts it in the list
  function createPlatform(x, y, range, moving) {
    const platform = new Platform(x, y, range, moving);
    platforms.push(platform);
    return platform;
  }

  let y = 350;
  for (let i = 0; i < 3; i++) {
    const range = Math.floor(Math.random() * 51) + 45; // between 45 en 95. Math.floor(Math.random() * (max - min + 1)) + min
    const x = Math.floor(Math.random() * (400 - 100 - 2 * range)) + range; // stays inside canvas
    const moving = i % 2 === 0;

    createPlatform(x, y, range, moving);
    y -= Math.floor(Math.random() * 31) + 100; // distance between platforms, is 70
  }
}

function keyPressed() {
  gameCharacter.jump();
}

// function mouseClicked() {
//   if (currentGameState === gameState.intro && startButton.isHovered()) {
//     currentGameState = gameState.active;
//   }
//}

function keyPressed() {
  rabbit.jump();
}

function draw() {
  background("#00FFFF");
  rabbit.display();
  platform.display();

  for (const platform of platforms) {
    platform.display();
    platform.movePlatform();
  }

  //   if (currentGameState === gameState.intro) {
  //     startButton.draw();
  //   } else if (currentGameState === gameState.active) {
  //     gameCharacter.draw();
  //     testPlatform.draw();

  //     if (gameCharacter.yPos + gameCharacter.height < 500) {
  //       gameCharacter.fall();
  //     }
  //   } else {
  //     rect(50, 50, 50, 50);
  //   }
}
