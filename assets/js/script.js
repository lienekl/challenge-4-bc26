

// let addButton = document.getElementById("button");
let newLiEl = document.getElementById("list");
// let close = document.getElementsByClassName("delete-btn");
let inputList = document.getElementById("inputlist");


function addToList() {

    if (inputList.value === "") {
        alert("Please write down your task");
    }
    else {
        let li = document.createElement ("li");
        li.innerHTML = inputList.value.trim();
        toDoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        }
        inputList.value = "";

        document.getElementById("ul").style.display = "block";

    }


