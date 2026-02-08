

let inputList = document.getElementById("inputlist");
let ulEl = document.getElementById("list");
let toDoList = document.querySelector("ul");
let addButton = document.getElementById("button");

addButton.addEventListener("click", addToList);

//checked class when a li is clicked
ulEl.addEventListener("click", function (ev) {
    if (ev.target.tagName === "li") {
        ev.target.classList.toggle("checked");
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
    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    // When checkbox is clicked, toggle completed style
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            taskSpan.classList.add("checked");
        } else {
            taskSpan.classList.remove("checked");
        }
    });

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
    listItems.appendChild(checkbox);
    listItems.appendChild(taskSpan);
    listItems.appendChild(closeBtn);
    ulEl.appendChild(listItems);

    //show list container
    document.getElementById("list-container").style.display = "block";

    //clear the input
    inputList.value = "";


}


// let closeEl = document.getElementsByClassName("close");
// for (i = 0; i < closeEl.length; i++) {
//     closeEl[i].onclick = function () {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }


// let span = document.createElement("span");
// let txt = document.createTextNode("x");
// span.className = "close";
// span.appendChild(txt);
// listItems[i].appendChild(span);

// ulEl.addEventListener("click", function (ev) {
//     if (ev.target.tagName === newLi) {
//         ev.target.classList.toggle("checked");
//     }
// }, false);

// // Create a "close" button and append it to each list item
// let li = document.getElementsByTagName("li");

// for (i = 0; i < li.length; i++) {
//   var span = document.createElement("span");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li[i].appendChild(span);
// }

// let close = document.getElementsByClassName("close");

// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     let div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// let checkbox = li.querySelector("input");
// let editBtn = li.querySelector(".edit-btn");
// let taskSpan = li.querySelector("span");
// let deleteBtn = li.querySelector(".delete-btn");


// checkbox.addEventListener("click", function () {
//     li.classList.toggle("completed", checkbox.checked);

// });

// editBtn.addEventListener("click", function () {
//     let update = prompt("Edit task:", taskSpan.textContent);
//     if (update !== null) {
//         taskSpan.textContent = update;
//         li.classList.remove("completed");
//         checkbox.checked = false;
//     }
// });

// deleteBtn.addEventListener("click", function () {
//     if (confirm("Are you sure you want to delete this task?")) {
//         li.remove();
//     }
// });