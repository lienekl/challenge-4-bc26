




// // addButton.addEventListener("click", addToList);

// let newLiEl = document.getElementsByTagName("li");
// for (i = 0; i < newLiEl.length; i++) {
//     let span = document.createElement("SPAN");
//     let txt = document.createTextNode("\u00D7");
//     span.className = "delete-btn";
//     span.appendChild(txt);
//     newLiEl[i].appendChild(span);
// }

// let close = document.getElementsByClassName("delete-btn");
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         let div = this.parentElement;
//         div.style.display = "none";
//     }
// }

// let toDoList = document.querySelector("ul");
// toDoList.addEventListener("click", function(ev) {
//     if (ev.target.tagName === "li") {
//         ev.target.classList.toggle("checked");
//     }
// }, false);

// function addToList() {
//     let newLiEl = document.createElement("li");
//     let inputList = document.getElementById("inputlist").value;
//     let t = document.createTextNode(inputList);
//     newLiEl.appendChild(t);
//     if (inputList === "") {
//         alert("Please write down your task");
//     } else {
//        document.getElementById("list").appendChild(newLiEl);
//     }
//      document.getElementById("inputlist").value = "";

//     let span = document.createElement("span");
//     let txt = document.createTextNode("\u00d7");
//     span.className = "delete-btn";
//     span.appendChild(txt);
//     newLiEl.appendChild(span);

//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function() {
//             let div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// }

let addButton = document.getElementById("button");
let newLiEl = document.getElementsById("list");
let close = document.getElementsByClassName("delete-btn");
let inputList = document.getElementById("inputlist");
let toDoList = document.querySelector("ul");

function addToList() {

    if (inputList.value === "") {
        alert("Please write down your task");
    }
    else {
        let newLiEl = document.createElement ("li");
        newLiEl.innerHTML = inputList.value.trim();
        toDoList.appendChild(newLiEl);

        }
        inputList.value = "";


        // let checkboxEl = document.createElement("input");
        //     checkboxEl.type = "checkbox";
        //     checkboxEl.id = todo.id;
        //     element.appendChild(checkboxEl);


        document.getElementById("ul").style.display = "block";

    }

//     toDoList.addEventListener("click", function (e) {
//         if (e.target.tagName === newLiEl) {
//             e.target.classList.toggle("checked");
//         }
//         else if (e.target.tagName === "span") {
//             e.target.parentElement.remove();
//         }
//     }, false);





// function validateList() {
// let x = document.forms["name"].value;
// if (x === ""){
//     alert("Please write down your task");
//     return false;
// }
// }

// if (!inputList);
// alert("Please write down your task");
// return;