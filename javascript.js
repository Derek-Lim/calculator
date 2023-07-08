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

//variable to assist in emptying display before accepting new operand
let x = 0;
//make numbers populate display when clicked
n1.addEventListener('click', () => {
    //empty display content before accepting new operand
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    //concatenate numbers like string
    display.textContent += 1;
    //then save the value
    displayValue = display.textContent;
});
n2.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 2;
    displayValue = display.textContent;
});
n3.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 3;
    displayValue = display.textContent;
});
n4.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 4;
    displayValue = display.textContent;
});
n5.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 5;
    displayValue = display.textContent;
});
n6.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 6;
    displayValue = display.textContent;
});
n7.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 7;
    displayValue = display.textContent;
});
n8.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 8;
    displayValue = display.textContent;
});
n9.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 9;
    displayValue = display.textContent;
});
n0.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 0;
    displayValue = display.textContent;
});

//variable that records number of times an operator button has been clicked
let click = 0;

add1.addEventListener('click', () => {
    click += 1;
    x += 1;
    //for first click
    if (click <= 1) {
        //make the display value into first operand
        a = +displayValue; 
        //save the operator
        operator = '+';
    //for second click and beyond
    } else {
        //make the display value into second operand
        b = +displayValue;
        //do the operation, assign the result into a
        a = operate(a, operator, b);
        //save the operator
        operator = '+';
        display.textContent = a;
    }
})
subtract1.addEventListener('click', () => {
    click += 1;
    x += 1;
    if (click <= 1) {
        a = +displayValue;
        operator = '-';
    } else {
        b = +displayValue;
        a = operate(a, operator, b);
        operator = '-';
        display.textContent = a;
    }
})
multiply1.addEventListener('click', () => {
    click += 1;
    x += 1;
    if (click <= 1) {
        a = +displayValue;
        operator = '*';
    } else {
        b = +displayValue;
        a = operate(a, operator, b);
        operator = '*';
        display.textContent = a;
    }
})
divide1.addEventListener('click', () => {
    click += 1;
    x += 1;
    if (click <= 1) {
        a = +displayValue;
        operator = '/';
    } else {
        b = +displayValue;
        a = operate(a, operator, b);
        operator = '/';
        display.textContent = a;
    }
})

//make "equals" show last operation on display when clicked
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