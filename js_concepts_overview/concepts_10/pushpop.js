///
// Constants for the delay intervals
const DELAY_CREATION = 3000;
const DELAY_CONSUME = 3500;

// Set intervals for creating and consuming tasks
function startTasks() {
  setInterval(createTask, DELAY_CREATION);
  setInterval(consumeTask, DELAY_CONSUME);
}

let tail = []; // Array to hold the tasks (task queue)
let counter = 0; // Counter to keep track of task numbers

// Function to create a task and add it to the task queue
function createTask() {
  console.log("Creating task...");
  counter++;
  tail.push(`Task${counter}`);
  showTail();
}

// Function to consume a task from the task queue
function consumeTask() {
  let task = tail.shift();
  console.log(`Consuming task ${task}`);
  showTail();
}

// Function to display the current task queue in the HTML
function showTail() {
  let textHTML = "";
  tail.map((task) => {
    textHTML += `<div class='task'>${task}</div>`;
  });
  document.querySelector("#run").innerHTML = textHTML;
  console.log(textHTML);
}