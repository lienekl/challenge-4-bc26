let inputList = getElementById("inputlist".value.trim());
let toDoList = document.getElementById("list");
let addButton = document.getElementById("button");

addButton.addEventListener("click, addToList");

function addToList() {

    let newLi = document.createElement("li");
    newLi = document.appendChild(toDoList);

    // if (inputList)
    // alert("Please write down the task");
    // return;
}

