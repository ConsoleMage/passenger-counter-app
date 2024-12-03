let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let pEl = document.getElementById("p-el");
let count = 0;
let colorIndex = 0;
const colors = ["#ff006e", "#3a86ff", "#ffbe0b", "#e9ecef4"];

function increment() {
    count += 1;
    countEl.textContent = count;
}

function getNextColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    return colors[colorIndex];
}

function save() {
    let countStr = count;
    const container = document.getElementById("p-container");
    const newElement = document.createElement("p");

    newElement.className = "save-element";
    newElement.textContent = countStr;
    newElement.style.color = getNextColor();
    container.appendChild(newElement);

    countEl.textContent = 0;
    count = 0;
}
