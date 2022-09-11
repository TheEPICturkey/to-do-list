//buisness logic
function ToDoList() {
  this.tasks = {};
  this.currentId = 0;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
ToDoList.prototype.findTask = function(id) {
  if (this.tasks[id] !== undefined) {
    return this.tasks[id]
  }
  return false;
} 

ToDoList.prototype.deleteTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true
}

function Task(task) {
  this.task = task;
}

//UI Logic
let toDoList = new ToDoList();

// function listTasks(taskToDisplay) {
//   let taskInput = document.getElementsByClassName("input-tasks");
//   const ul = document.createElement("ul");
//   Object.keys(taskToDisplay.task).forEach(function(key) {
//     const taskList = taskToDisplay.findTask(key);
//     const li = document.createElement("li");
//     li.append(taskList);
//     ul.append(li);
//   })
//   taskInput.append(ul);
// }

function handleFormSubmission(event) {
  console.log("Hello world!")
  event.preventDefault();
  const inputTask = document.getElementById("addTask").value;
  console.log("Hello world!")
  let task = new Task(inputTask);
  console.log("Hello world!")
  toDoList.addTask(task);
  console.log("Hello world!")
  listTasks(task);
}

window.addEventListener("load", function() {
  let form = document.querySelector("form")
  form.addEventListener("submit", handleFormSubmission)
});