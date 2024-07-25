const DECIMAL = 2;
const MIN_LENGHT_NAME = 3;
const MIN_AGE = 18;
const MIN_HEIGHT = 100;
const MAX_HEIGHT = 250;
const MIN_WEIGHT = 40;
const MAX_WEIGHT = 250;

// button
function initCalculateBMI() {
  let isThereError = validation();
  if (!isThereError) {
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let bmi = imcCalculator(weight, height);
    writeBMI(bmi.toFixed(DECIMAL));
  }
}

// validation - conditions
function validation() {
  let isThereError = true;
  let name = document.querySelector("#name").value;
  let age = document.querySelector("#age").value;
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  if (!(name.trim().length > MIN_LENGHT_NAME)) {
    // error
    writeError("The name is too short");
  } else if (age < MIN_AGE) {
    writeError("Must be a legal age");
  } else if (height < MIN_HEIGHT || height > MAX_HEIGHT) {
    writeError("Must be in the range of 100 to 250 cm");
  } else if (weight < MIN_WEIGHT || weight > MAX_WEIGHT) {
    writeError("Must be in the range of 40 to 250 kg");
  } else {
    // no error
    isThereError = false;
    writeError("");
  }
  return isThereError;
}

// write the result in the HTML
function writeBMI(message) {
  const resultElement = document.getElementById("result");
  let bmiResult = "";
  let className = "";

  if (message < 18.5) {
    bmiResult = `${message} (Underweight)`;
    className = "yellow";
  } else if (message >= 18.5 && message < 24.9) {
    bmiResult = `${message} (Normal)`;
    className = "green";
  } else if (message >= 25.0 && message < 29.9) {
    bmiResult = `${message} (Overweight)`;
    className = "orange";
  } else {
    bmiResult = `${message} (Obesity)`;
    className = "red";
  }
  resultElement.textContent = bmiResult;
  resultElement.classList.remove("yellow", "green", "orange", "red");
  resultElement.classList.add(className);
}

// function that writes
// document.querySelector('#error').textContent
function writeError(message) {
  document.querySelector("#error").textContent = message;
}
