

let inputList = document.getElementById("inputlist");
let ulEl = document.getElementById("list");
let toDoList = document.querySelector("ul");
let addButton = document.getElementById("button");

addButton.addEventListener("click", addToList);


function addToList() {


    if (inputList.value === "") {
        alert("Please write down your task!");
    }
    else {
        let newTask = inputList.value.trim();
        let li = document.createElement("li");
        li.innerHTML = newTask;
        //          `
        //   <label>
        //     <input type="checkbox" id="checkBoxEl">
        //     <span>${newTask}</span>
        //   </label>
        //   <span class="edit-btn">Edit</span>
        //   <span class="delete-btn">Delete</span>
        // `;
        ulEl.appendChild(li);
        //         document.getElementsByTagName(li);

        // for (i = 0; i < li.length; i++) {
        //   
        //   span.className = "close";
        //   
        // }

    }
    inputList.value = "";
    document.getElementById("list-container").style.display = "block";
    let li = document.getElementsByTagName("li");
    
    let span = document.createElement("span");
    let txt = document.createTextNode("&#215;");
    span.appendChild(txt);
    li[i].appendChild(span);

    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

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

    let checkbox = li.querySelector("input");
    let editBtn = li.querySelector(".edit-btn");
    let taskSpan = li.querySelector("span");
    let deleteBtn = li.querySelector(".delete-btn");


    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);

    });

    editBtn.addEventListener("click", function () {
        let update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false;
        }
    });

    deleteBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
            li.remove();
        }
    });