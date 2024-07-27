// player.js
// Defines player class to create player objects
class Player {
  constructor(sprite, x, y, speed) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.image = new Image();
    this.image.onload = function () {
      console.log("Image load");
    };
    this.image.src = `images/${sprite}`;
    this.draw();
  }

  // udpates the player x position
  move(displacement){
    this.x = this.x + displacement * this.speed;
    this.draw()
  }

  // method to handle shooting actions
  shoot(){
    console.log('Shooting...');
  }

  // method to handle explosion actions
  exploit(){
    console.log('Exploding...');
  }

  // method to render the player on the canvas
  draw() {
    // select the canvas element
    let c = document.querySelector("#myCanvas");
    // Gets the 2D context of the canvas
    let ctx = c.getContext("2d");
    // draw trhe player image on the canvas at the 
    // current coordinates x y with 100 pixel size
    ctx.drawImage(this.image, this.x, this.y, 100, 100);
  }
}
