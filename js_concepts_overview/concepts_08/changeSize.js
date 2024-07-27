let wide = 300;
function increase() {
  wide++;
  // selects all elements with the class name cover and stores in var covers
  let covers = document.getElementsByClassName("cover");
  // Array.from(covers) converts the elements into a regular array
  // so forEach can be used
  // forEach for each element the function inside is executed
  Array.from(covers).forEach((cover) => {
    // for each cover element sets the style property to the value 
    cover.style.width = `${wide}px`;
  });
}

document.querySelector("#buttonLess").addEventListener("click", function () {
  wide--;
  let covers = document.querySelectorAll(".cover");
  Array.from(covers).forEach((cover) => {
    cover.style.width = `${wide}px`;
  });
});