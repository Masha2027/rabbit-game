import { Rabbit } from "./character.js";

//background
function setup() {
  createCanvas(500, 800);
  background("#00FFFF");
}

const rabbit = new Rabbit(200, 300);

function keyPressed() {
  rabbit.jump();
}
function draw() {
  rabbit.display();
}
