import { Rabbit } from "./character.js";

const rabbit = new Rabbit(200, 300);

//background
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

function mouseClicked(){
	if(currentGameState === gameState.intro &&
		startButton.isHovered()){
		currentGameState = gameState.active;
	}
}
