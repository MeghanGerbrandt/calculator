const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const buttons = document.querySelectorAll('button');


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

let displayValue= 0;

/*

let displayInput = (e) => {
    displayValue = e.target.value;
    display.innerText = displayValue;
}

buttons.forEach(button => {
    addEventListener('click', (e) => {
        displayInput(e.target.innerHTML);
        //alert(e.target.innerHTML);
    })
})


/*display.innerHTML += displayValue;

let displayInput = (e) => {
    displayValue = e.target.id;
    display.innerHTML = displayValue;
}

buttons.forEach(button => {
    addEventListener('click', (e) => {
        displayInput(e);
    })
})*/

/*const displayInput = (valueInput) => {
    displayValue = displayValue + valueInput;
    display.innerText = displayValue;
}

buttons.forEach(button => {
    addEventListener('click', () => {
        displayInput(button.id);
    })
});
displayInput();*/

