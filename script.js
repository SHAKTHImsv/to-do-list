var a = document.getElementById("one");
var ul = document.querySelector(".three");

// Load tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
    // Get tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Create list items for each task and append them to the list
    tasks.forEach(task => {
        addTaskToList(task);
    });
}

function add() {
    if (a.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    if (a.value.length > 25) {
        alert("Task cannot exceed 25 characters.");
        return;
    }

    // Add the task to localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(a.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Add the task to the list
    addTaskToList(a.value);
    
    // Clear the input field after adding
    a.value = '';
}

function addTaskToList(task) {
    var listitem = document.createElement("li");
    
    var taskText = document.createElement("span");
    taskText.innerHTML = task;

    var button = document.createElement("button");
    button.innerHTML = "Delete";
    button.className = "delete"; 
    button.onclick = del; 

    taskText.style.flexGrow = "1"; 

    listitem.appendChild(taskText);
    listitem.appendChild(button);

    listitem.style.display = "flex"; 
    listitem.style.justifyContent = "space-between"; 
    listitem.style.alignItems = "center"; 
    listitem.style.marginBottom = "10px"; 

    ul.append(listitem);
}

function del(event) {
    var taskItem = event.target.parentElement;
    var taskText = taskItem.firstChild.innerHTML;

    // Remove the task from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Remove the task from the list
    taskItem.remove();
}
