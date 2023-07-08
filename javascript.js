const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const buttons = calculator.querySelector('.buttons');
const n1 = buttons.querySelector('.n1');
const n2 = buttons.querySelector('.n2');
const n3 = buttons.querySelector('.n3');
const n4 = buttons.querySelector('.n4');
const n5 = buttons.querySelector('.n5');
const n6 = buttons.querySelector('.n6');
const n7 = buttons.querySelector('.n7');
const n8 = buttons.querySelector('.n8');
const n9 = buttons.querySelector('.n9');
const n0 = buttons.querySelector('.n0');
const add1 = buttons.querySelector('.add');
const subtract1 = buttons.querySelector('.subtract');
const multiply1 = buttons.querySelector('.multiply');
const divide1 = buttons.querySelector('.divide');
const equals = buttons.querySelector('.equals');
const clear = buttons.querySelector('.clear');

//create function add()
function add(a,b) {
    return a + b;
}
//create function subtract()
function subtract(a,b) {
    return a - b;
}
//create function multiply()
function multiply(a,b) {
    return a * b;
}
//create function divide()
function divide(a,b) {
    return a / b;
}

//create variables for operands, operator, and display
let a;
let operator;
let b;
let displayValue;

//create function operate()
function operate(a, operator, b) {
    if (operator == '+') {
        return add(a,b);
    } else if (operator == '-') {
        return subtract(a,b);
    } else if (operator == '*') {
        return multiply(a,b);
    } else if (operator == '/') {
        return divide(a,b);
    } else {
        console.log('error');
    }
}

//make numbers populate display when clicked
n1.addEventListener('click', () => {
    display.textContent += 1;
    displayValue = display.textContent;
});
n2.addEventListener('click', () => {
    display.textContent += 2;
    displayValue = display.textContent;
});
n3.addEventListener('click', () => {
    display.textContent += 3;
    displayValue = display.textContent;
});
n4.addEventListener('click', () => {
    display.textContent += 4;
    displayValue = display.textContent;
});
n5.addEventListener('click', () => {
    display.textContent += 5;
    displayValue = display.textContent;
});
n6.addEventListener('click', () => {
    display.textContent += 6;
    displayValue = display.textContent;
});
n7.addEventListener('click', () => {
    display.textContent += 7;
    displayValue = display.textContent;
});
n8.addEventListener('click', () => {
    display.textContent += 8;
    displayValue = display.textContent;
});
n9.addEventListener('click', () => {
    display.textContent += 9;
    displayValue = display.textContent;
});
n0.addEventListener('click', () => {
    display.textContent += 0;
    displayValue = display.textContent;
});

//make operators:
//save value for first operand,
//prepare to accept value for second operand,
//save the operator that was clicked on
add1.addEventListener('click', () => {
    a = +displayValue;
    displayValue = 0;
    display.textContent = '';
    operator = '+';
})
subtract1.addEventListener('click', () => {
    a = +displayValue;
    displayValue = 0;
    display.textContent = '';
    operator = '-';
})
multiply1.addEventListener('click', () => {
    a = +displayValue;
    displayValue = 0;
    display.textContent = '';
    operator = '*';
})
divide1.addEventListener('click', () => {
    a = +displayValue;
    displayValue = 0;
    display.textContent = '';
    operator = '/';
})

//make "equals" show solution on display when clicked
equals.addEventListener('click', () => {
    b = +displayValue;
    result = operate(a, operator, b);
    display.textContent = `${a} ${operator} ${b} = ${result}`
})

//make "clear" clear the display when clicked
clear.addEventListener('click', () => {
    displayValue = 0;
    display.textContent = '';
})