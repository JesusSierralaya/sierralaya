// game.js
// create new players
// initial positions and speed
let p1 = new Player("spaceship.png", 10, 200, 10);
let p2 = new Player("spaceship.png", 200, 400, 2);

// create an array players
let players = [p1, p2];

// Movement direction of each player
document.querySelector("#bMove").addEventListener("click", () => {
  p1.move(1);
  p2.move(-1);
});

// function to run every 0.16 milliseconds
setInterval(() => {
  // select the canvas element
  let c = document.querySelector("#myCanvas");
  // gets the 2d context
  let ctx = c.getContext("2d");
  // clear the canvas
  ctx.clearRect(0, 0, 400, 600);
  // render players
  players.map((player) => player.draw());
}, 0.16);
