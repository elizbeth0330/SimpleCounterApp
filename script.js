const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const numDisplay = document.getElementById('number');
let number = 0;

function add() {
    number++;
    numDisplay.textContent = number;
}

function subtract() {
    number--;
    numDisplay.textContent = number;
}

minus.addEventListener('click', subtract)
plus.addEventListener('click, add')
