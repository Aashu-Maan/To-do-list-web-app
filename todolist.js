/*let addTask = document.getElementById("addTask");
let input = document.getElementById("inputBar");
let taskField = document.getElementById("taskField");

let tasks = JSON.parse(localStorage.getItem("taskName")) || [];

addTask.addEventListener("click", () => {
  if (input.value.trim() === "") return; // Prevent empty tasks

  let taskObject = { name: input.value };
  tasks.push(taskObject);
  localStorage.setItem("taskName", JSON.stringify(tasks));

  createblock();
  input.value = ""; // Clear input after adding
});

function createblock() {
  taskField.innerHTML = ""; // Clear existing tasks
  let gettask = JSON.parse(localStorage.getItem("taskName")) || [];
  
  gettask.forEach((task) => {
    let div = document.createElement("div");
    div.classList.add("taskDiv");
    let para = document.createElement("p");
    para.textContent = task.name;
    div.appendChild(para);
    taskField.appendChild(div);
  });
}

createblock(); // Load tasks on page load

*/





/*
deletebutton.forEach((button) => {
  button.addEventListener("click", (event) => {
    let text = event.target.closest("div").querySelector("p").innerText;
    
    // Reassign the filtered array back to 'tasks'
    tasks = tasks.filter((task) => task.name !== text);
    
    // Update localStorage with the new filtered tasks
    localStorage.setItem("taskName", JSON.stringify(tasks));

    // Remove the clicked div from the DOM
    event.target.parentElement.remove();

    console.log(text); // Check the deleted text in console
  });
});
*/

let addTask = document.getElementById("addTask");
let input = document.getElementById("inputBar");
let taskField = document.getElementById("taskField");

let tasks = JSON.parse(localStorage.getItem("taskName")) || [];


addTask.addEventListener("click", () => {
  let taskObject = {
    name,
  }
  taskObject.name = input.value;
  tasks.push(taskObject)
 localStorage.setItem("taskName", JSON.stringify(tasks));
 createblock()
})

function createblock() {
  taskField.innerHTML = "";
  tasks.forEach((task) => {
    let div = document.createElement("div");
  div.classList.add("taskDiv");
  let para = document.createElement("p");
  para.textContent = task.name;
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("del");
  div.appendChild(para);
  div.appendChild(deleteBtn);
  taskField.appendChild(div)
    input.value = "";
  })
  let deletebutton = document.querySelectorAll(".del")

deletebutton.forEach((button) => {
  button.addEventListener("click", (event) => {
    let text = event.target.closest("div").querySelector("p").innerText;
   tasks = tasks.filter((task) => task.name !== text)
    localStorage.setItem("taskName", JSON.stringify(tasks))
    event.target.parentElement.remove();
    console.log(text)
    
  })
});
}



createblock()