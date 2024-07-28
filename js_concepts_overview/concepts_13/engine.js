// engine.js
const RATIO = 10; // interval in milliseconds
var x = 100; // initial horizontal position
var y = 100; // initial vertical position
var speedX = 2;
var speedY = 2;

setInterval(() => {
  x += speedX;
  y += speedY;

  // check for collision with the edges and reverse direction
  if (
    x <= 0 ||
    x >= window.innerWidth - document.querySelector("#dvd").offsetWidth
  ) {
    speedX = -speedX;
  }

  if (
    y <= 0 ||
    y >= window.innerHeight - document.querySelector("#dvd").offsetHeight
  ) {
    speedY = -speedY;
  }

  document.querySelector("#dvd").style.top = `${y}px`;
  document.querySelector("#dvd").style.left = `${x}px`;
}, RATIO);

document.querySelector("#bClose").addEventListener("click", () => {
  document.querySelector("footer").style.bottom = "-100px";
  document.querySelector("footer").style.opacity = 0;
});
