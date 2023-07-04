const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const displayTotal = document.querySelector('.total');
const number1 = document.querySelector('.number-one');
const number2 = document.querySelector('.number-two');
const equals = document.querySelector('.equals');
const displayScreen = document.querySelector('.display-screen');

let numberStored = '';
let operatorStored = ''
let firstNumber = '';
number2.textContent = 0;

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

function operate(num1, num2, operator) {
  switch (operator) {
    case "+": 
        return add(num1, num2);
    case "-": 
        return subtract(num1, num2);
    case "x": 
        return multiply(num1, num2);
    case "/": 
        return divide(num1, num2);
  }
};

for(let i=0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', function() {
    numberStored += this.value;
    number2.textContent = numberStored;
    })
}

for(let i=0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener('click', function() {
    if (firstNumber && numberStored) {
      displayResult();
    }
    firstNumber = numberStored;
    operatorStored = this.textContent;
    number1.textContent = numberStored + operatorStored;
    numberStored = '';
  })
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

equals.addEventListener('click', function() {
  displayResult();
});

function displayResult() {
  total = operate(parseFloat(firstNumber), parseFloat(numberStored), operatorStored);
  number2.textContent = roundNumber(total);
  number1.textContent = firstNumber + ' ' + operatorStored + ' ' + numberStored;
  numberStored = total;;
}

clear.addEventListener('click', function() {
    clearDisplay();
  });
  
const clearDisplay = () => {
    number1.textContent = '';
    number2.textContent = 0;
    numberStored = '';
    firstNumber = '';
}

