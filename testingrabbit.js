import { Rabbit } from "./character.js";

let rabbit;
rabbit = new Rabbit(200, 300);

function setup() {
  createCanvas(500, 800);
}

function keyPressed() {
  rabbit.jump();
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

