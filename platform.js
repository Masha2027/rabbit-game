// function setup() {
//   createCanvas(400, 400);
// }
// // let x = 100;
// // let y = 100;

// class Platform {
//   constructor(x, y, range) {
//     this.x = x;
//     this.y = y;
//     this.range = range;
//     this.w = 100;
//     this.h = 30;
//     this.speed = 3;
//     this.maxX = x + this.range;
//     this.minX = x - this.range;
//   }
//   drawPlatform() {
//     fill("pink");
//     rect(this.x, this.y, this.w, this.h);
//   }
//   //make platform move
//   movePlatform() {
//     this.x += this.speed;

//     if (this.x + this.w > this.maxX || this.x < this.minX) {
//       this.speed = -this.speed;
//     }
//   }
// }

// const firstPlatform = new Platform(200, 200, 100);
// const secondPlatform = new Platform(120, 300, 120);
// const thirdPlatform = new Platform (300,50,100);

// function draw() {
//   background(220);
//   firstPlatform.drawPlatform();
//   firstPlatform.movePlatform();
//   secondPlatform.drawPlatform();
//   secondPlatform.movePlatform();
//   thirdPlatform.drawPlatform();
//   thirdPlatform.movePlatform();
// }

export class Platform {
  constructor(x, y, range, moving) {
    this.x = x;
    this.y = y;
    this.range = range;
    this.w = 100;
    this.h = 30;
    this.moving = moving;
    this.speed = moving ? 2 : 0;
    this.maxX = x + this.range;
    this.minX = x - this.range;
  }

  drawPlatform() {
    fill(this.moving ? "pink" : "lightblue");
    rect(this.x, this.y, this.w, this.h);
  }

  // make platform move
  movePlatform() {
    this.x += this.speed;

    if (this.x > this.maxX || this.x < this.minX) {
      this.speed = -this.speed;
    }
  }
}

// function draw() {
//   background(220);

//   // draws and moves all platforms
//   for (const platform of platforms) {
//     platform.display();
//     platform.movePlatform();
//   }
// }

//export const platforms = []; // the list: all platforms will be displayed here

// function setup() {
//   createCanvas(400, 400);

//   // Loop: creates 3 random platforms (only happens once). For loop because we know how many platforms we want
//   let y = 350;
//   for (let i = 0; i < 3; i++) {
//     const range = Math.floor(Math.random() * 51) + 45; // between 45 en 95. Math.floor(Math.random() * (max - min + 1)) + min
//     const x = Math.floor(Math.random() * (400 - 100 - 2 * range)) + range; // stays inside canvas
//     const moving = i % 2 === 0;

//     createPlatform(x, y, range, moving);
//     y -= Math.floor(Math.random() * 31) + 100; // distance between platforms, is 70
//   }
// }

// Functie that makes one platform and puts it in the list
// function createPlatform(x, y, range, moving) {
//   const platform = new Platform(x, y, range, moving);
//   platforms.push(platform);
//   return platform;
// }
