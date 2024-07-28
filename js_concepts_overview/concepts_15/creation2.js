// creation2.js
document.querySelector("#name").addEventListener("keydown", (event) => {
  const text = document.querySelector("#name").value;
  // If the length of the name exceeds 5 characters, change the text to red
  if (text.length >= 5) {
    document.querySelector("#message").classList.add("red");
  } else {
    document.querySelector("#message").classList.remove("red");
  }
  // If the length of the name exceeds 7 characters, change the text to bold
  if (text.length >= 7) {
    document.querySelector("#message").classList.add("bold");
  } else {
    document.querySelector("#message").classList.remove("bold");
  }
  // If the length of the name exceeds 10 characters, change the color
  if (text.length >= 10) {
    document.querySelector("#message").classList.replace("red", "green");
  } else {
    document.querySelector("#message").classList.replace("green", "red");
  }
  // If the length of the name exceeds 10 characters, change to uppercase
  if (text.length >= 12) {
    document.querySelector("#message").style.textTransform = "uppercase";
  } else {
    document.querySelector("#message").style.textTransform = "none";
  }
});
