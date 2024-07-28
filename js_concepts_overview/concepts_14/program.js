// program.js
const fs = require("node:fs");

function writeLog(logLine) {
  //   fs.appendFile(".log.txt", `${logLine}\n`, (err) => {
  fs.writeFile("./log.txt", toString(new Date()) + `${logLine}\n`, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Log written successfully");
    }
  });
}

function add(summand1, summand2) {
  // 1. must have two arguments
  if (summand1 === undefined || summand2 === undefined) {
    throw new Error("Two summands are mandatory");
  }
  // 2. the arguments must be numbers
  if (!(typeof summand1 === "number") || !(typeof summand2 === "number")) {
    throw new Error("Arguments must be numbers");
  }
  return summand1 + summand2;
}

try {
  //   console.log(add(8, 8)); // ok
  console.log(add(8)); // error 
} catch (error) {
  console.error(error.message);
  writeLog(error.message);
} finally {
  console.log("We have finished the process");
}
// remember run it with 'node program.js' in terminal