

let inputList = document.getElementById("inputlist");
let ulEl = document.getElementById("list");
let toDoList = document.querySelector("ul");
let addButton = document.getElementById("button");

addButton.addEventListener("click", addToList);


inputList.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addToList();
    }
});



function addToList() {

    let newTask = inputList.value.trim();

    if (newTask === "") {
        alert("Please write down your task!");
        return;
    }

    let duplicate = false;
    ulEl.querySelectorAll("li").forEach(li => {
        if (li.firstChild.textContent === newTask) {
            duplicate = true;
        }
    });

    if (duplicate) {
        alert("This task is already in your list!");
        return;
    }

    let listItems = document.createElement("li");


    // Create task text span
    let taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = newTask;


    let closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.textContent = "x";
    closeBtn.onclick = function () {
        this.parentElement.remove();
        // Hide container if empty
        if (ulEl.children.length === 0) {
            document.getElementById("list-container").style.display = "none";
        }
    }
   
    
    listItems.appendChild(taskSpan);
    listItems.appendChild(closeBtn);
    ulEl.appendChild(listItems);

    //show list container
    document.getElementById("list-container").style.display = "block";

    //clear the input
    inputList.value = "";


}