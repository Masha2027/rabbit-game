let x = 200;
let y = 100;

//background
function setup() {
  createCanvas(500, 800);
  background("#00FFFF");
}
//body
function draw() {
  fill("beige");
  stroke(2);
  rect(x, y, 60, 90, 20);

  //left ear
  fill("pink");
  stroke("black");
  ellipse(x + 10, y - 33, 30, 70);
  //right ear
  fill("pink");
  ellipse(x + 50, y - 33, 30, 70);

  //left eye
  fill("white");
  stroke("black");
  circle(x + 15, y + 25, 25);
  //left inner eye
  fill("black");
  stroke("black");
  circle(x + 15, y + 30, 10);
  //right eye
  fill("white");
  circle(x + 45, y + 25, 25);
  //right inner eye
  fill("black");
  stroke("black");
  circle(x + 45, y + 30, 10);
  //nose
  fill("pink");
  stroke("pink");
  strokeJoin(ROUND);
  strokeWeight(4);
  triangle(x + 20, y + 45, x + 35, y + 45, x + 28, y +52);
  ///
  strokeWeight(2);
}

//test two
