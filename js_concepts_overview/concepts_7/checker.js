function checkSensor() {
  console.log("heello");
//   console.log(checkSensor1(), checkSensor2());
  if (checkSensor1() & checkSensor2()) {
    alert('OK')
  } else {
    alert('ERROR')
  }
}

function checkSensor1() {
  let sensor1Value = document.querySelector("#sensor1").value;
  let sensorOK;
  if (sensor1Value < 10) {
    sensorOK = false;
    document.querySelector("#mark1").classList.remove("green");
    document.querySelector("#mark1").classList.add("red");
  } else {
    sensorOK = true;
    document.querySelector("#mark1").classList.remove("red");
    // document.querySelector('#mark1').style.backgroundColor = "orange"
    document.querySelector("#mark1").classList.add("green");
  }
  return sensorOK;
}

function checkSensor2() {
  let sensor2Value = document.querySelector("#sensor2").value;
  let sensorOK;
  if (sensor2Value < 10) {
    sensorOK = false;
    document.querySelector("#mark2").classList.remove("green");
    document.querySelector("#mark2").classList.add("red");
  } else {
    sensorOK = true;
    document.querySelector("#mark2").classList.remove("red");
    document.querySelector("#mark2").classList.add("green");
  }
  return sensorOK;
}
