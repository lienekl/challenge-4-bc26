let inputList = document.getElementById("inputlist");
let ulEl = document.getElementById("list");
// let toDoList = document.querySelector("ul");
// let addButton = document.getElementById("button");


function addToList() {
    

    if (inputList.value === "") {
        alert("Please write down your task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputList.value.trim();
        ulEl.appendChild(li);
       
        }
        inputList.value = "";
        document.getElementById("ul").style.display = "block";


    }

        toDoList.addEventListener("click", function (e) {
        if (e.target.tagName === ulEl) {
            e.target.classList.toggle("checked");
        }
        else if (e.target.tagName === "span") {
            e.target.parentElement.remove();
        }
    }, false);
    

