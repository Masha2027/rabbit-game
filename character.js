//background
function setup() {
  createCanvas(500, 800);
  background("#00FFFF");
}
//body
function draw() {
  fill("beige");
  stroke(2);
  rect(200, 100, 60, 90, 20);

  //left ear
  fill("pink");
  stroke("black");
  ellipse(210, 67, 30, 70);
  //right ear
  fill("pink");
  ellipse(250, 67, 30, 70);

  //left eye
  fill("white");
  stroke("black");
  circle(215, 125, 25);
  //left inner eye
  fill("black");
  stroke("black");
  circle(215, 130, 10);
  //right eye
  fill("white");
  circle(245, 125, 25);
  //right inner eye
  fill("black");
  stroke("black");
  circle(245, 130, 10);
  //nose
  fill("pink");
  stroke("pink");
  strokeJoin(ROUND);
  strokeWeight(4);
  triangle(220, 145, 235, 145, 228, 152);
  ///
  strokeWeight(2);
}
