const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.querySelector(".row button");

function addTask() {

    if (inputBox.value === "" || inputBox.value === " ") {
        alert("You Must Write Something");
        return;
    }

    const li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();

}




listContainer.addEventListener("click", (event) => {
    console.log(event);

    if (event.target.localName === "li") {
        event.target.classList.toggle("checked");
        saveData();
    } else if (event.target.localName === "span") {
        event.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

getData();

addBtn.addEventListener("click", addTask);
inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
})
