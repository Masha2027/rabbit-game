import { Rabbit } from "./character.js";

// Define what states the game has
const gameState = {
  win: "gameWon",
  lose: "gameLose",
  intro: "gameIntro",
  active: "gameActive",
};

//  Track the current gamestate, intro by default
let currentGameState = gameState.intro;

// Make a new character
const gameCharacter = new Character(100, 300, 100, 100);

// Make a test platform
const testPlatform = new Platform(100, 100, 100, 50);

// Make an introductory button
const startButton = new Button(100, 100, 200, 100);

function draw() {
  background("grey");

  if (currentGameState === gameState.intro) {
    startButton.draw();
  } else if (currentGameState === gameState.active) {
    gameCharacter.draw();
    testPlatform.draw();

    if (gameCharacter.yPos + gameCharacter.height < 500) {
      gameCharacter.fall();
    }
  } else {
    rect(50, 50, 50, 50);
  }
}

function keyPressed() {
  gameCharacter.jump();
}

function mouseClicked() {
  if (currentGameState === gameState.intro && startButton.isHovered()) {
    currentGameState = gameState.active;
  }
}

//background
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
}

const rabbit = new Rabbit(200, 300);

function keyPressed() {
  rabbit.jump();
}
function draw() {
  rabbit.display();
}
