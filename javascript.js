const displayScreen = document.querySelector('.display-screen');
const buttons = document.querySelectorAll('.button');
const clearScreen = document.querySelector('.ac-button');


const operate = (num1, num2, operator) => {
    switch(operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
    }
}

const add = (num1, num2) => {
    return num1 + num2;
}
const subtract = (num1, num2) => {
    return num1 - num2;
}
const multiply = (num1, num2) => {
   return  num1 * num2;
}
const divide = (num1, num2) => {
   return num1 / num2;
}

let displayValue = 0;

for(let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
        displayScreen.value += this.value;
        if(displayScreen.value === "AC") {
            displayScreen.value = '';
        }   
    })
}

function clearDisplay() {
    displayScreen.value ='';  
} 

