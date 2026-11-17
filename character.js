class Rabbit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 60;
    this.h = 90;
  }
  display() {
    //body
    fill("beige");
    stroke(2);
    rect(this.x, this.y, 60, 90, 20);

    //left ear
    fill("pink");
    stroke("black");
    ellipse(this.x + 10, this.y - 33, 30, 70);
    //right ear
    fill("pink");
    ellipse(this.x + 50, this.y - 33, 30, 70);

    //left eye
    fill("white");
    stroke("black");
    circle(this.x + 15, this.y + 25, 25);
    //left inner eye
    fill("black");
    stroke("black");
    circle(this.x + 15, this.y + 30, 10);
    //right eye
    fill("white");
    circle(this.x + 45, this.y + 25, 25);
    //right inner eye
    fill("black");
    stroke("black");
    circle(this.x + 45, this.y + 30, 10);
    //nose
    fill("pink");
    stroke("pink");
    strokeJoin(ROUND);
    strokeWeight(4);
    triangle(
      this.x + 20,
      this.y + 45,
      this.x + 35,
      this.y + 45,
      this.x + 28,
      this.y + 52,
    );
    strokeWeight(2);
  }
}

//background
function setup() {
  createCanvas(500, 800);
  background("#00FFFF");
}

const rabbit = new Rabbit(200, 300);

function draw() {
  rabbit.display();
}
