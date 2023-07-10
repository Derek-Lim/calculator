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
let operator = '';
let b;
let displayValue;

//create function operate()
let divideZeroByZero = 0;
function operate(a, operator, b) {
    if (operator == '+') {
        return add(a,b);
    } else if (operator == '-') {
        return subtract(a,b);
    } else if (operator == '*') {
        return multiply(a,b);
    } else if (operator == '/') {
        if ((a == 0) && (b == 0)) {
            divideZeroByZero += 1;
        } else {
            return divide(a,b);
        }
    } else {
        console.log('error');
    }
}

//variable to assist in emptying display before accepting new operand
let x = 0;
let lastClickNumber = undefined;
//make numbers populate display when clicked
n1.addEventListener('click', () => {
    //empty display content before accepting new operand
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    //concatenate numbers like string,
    display.textContent += 1;
    //then save the value
    displayValue = display.textContent;
    //last click before clicking equals is an not an operator
    lastClickOperator = false;
    //last click before clicking an operator is true
    lastClickNumber = true;
});
n2.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 2;
    displayValue = display.textContent;
    lastClickOperator = false;
    lastClickNumber = true;
});
n3.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 3;
    displayValue = display.textContent;
    lastClickOperator = false;
    lastClickNumber = true;
});
n4.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 4;
    displayValue = display.textContent;
    lastClickOperator = false;
    lastClickNumber = true;
});
n5.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 5;
    displayValue = display.textContent;
    lastClickOperator = false;
    lastClickNumber = true;
});
n6.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 6;
    displayValue = display.textContent;
    lastClickOperator = false;
    lastClickNumber = true;
});
n7.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 7;
    displayValue = display.textContent;
    lastClickOperator = false;
    lastClickNumber = true;
});
n8.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 8;
    displayValue = display.textContent;
    lastClickOperator = false;
    lastClickNumber = true;
});
n9.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 9;
    displayValue = display.textContent;
    lastClickOperator = false;
    lastClickNumber = true;
    console.log(lastClickNumber);
});
n0.addEventListener('click', () => {
    while (x >= 1) {
        x -= 1;
        display.textContent = '';
    }
    display.textContent += 0;
    displayValue = display.textContent;
    lastClickOperator = false;
    lastClickNumber = true;
});

//variable that records number of times an operator button has been clicked
let click = 0;

add1.addEventListener('click', () => {
    click += 1;
    x += 1;
    //last click before clicking equals is an operator
    lastClickOperator = true;
    //if last click is not a number, tell user to select an operand first
    if ((lastClickNumber == false) || (lastClickNumber == undefined)) {
        display.textContent = 'Please select an operand first';
        click = 0;
    } else {
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
            //round result to 2 decimal places
            a = Math.round(a * 100) / 100;
            //save the operator
            operator = '+';
            //if 0/0 is attempted, clear data and mock user
            if (divideZeroByZero >= 1) {
                clear1();
                display.textContent = 'bruh...';
            //otherwise, display result
            } else {
            display.textContent = a;
            }
        }
    }
    lastClickNumber = false;
})
subtract1.addEventListener('click', () => {
    click += 1;
    x += 1;
    //last click before clicking equals is an operator
    lastClickOperator = true;
    if ((lastClickNumber == false) || (lastClickNumber == undefined)) {
        display.textContent = 'Please select an operand first';
        click = 0;
    } else {
        //for first click
        if (click <= 1) {
            //make the display value into first operand
            a = +displayValue; 
            //save the operator
            operator = '-';
        //for second click and beyond
        } else {
            //make the display value into second operand
            b = +displayValue;
            //do the operation, assign the result into "a"
            a = operate(a, operator, b);
            //round result to 2 decimal places
            a = Math.round(a * 100) / 100;
            //save the operator
            operator = '-';
            //if 0/0 is attempted, clear data and mock user
            if (divideZeroByZero >= 1) {
                clear1();
                display.textContent = 'bruh...';
            //otherwise, display result
            } else {
            display.textContent = a;
            }
        }
    }
    lastClickNumber = false;
})
multiply1.addEventListener('click', () => {
    click += 1;
    x += 1;
    lastClickOperator = true;
    if ((lastClickNumber == false) || (lastClickNumber == undefined)) {
        display.textContent = 'Please select an operand first';
        click = 0;
    } else {
        if (click <= 1) {
            a = +displayValue; 
            operator = '*';
        } else {
            b = +displayValue;
            a = operate(a, operator, b);
            a = Math.round(a * 100) / 100;
            operator = '*';
            if (divideZeroByZero >= 1) {
                clear1();
                display.textContent = 'bruh...';
            } else {
            display.textContent = a;
            }
        }
    }
    lastClickNumber = false;
})
divide1.addEventListener('click', () => {
    click += 1;
    x += 1;
    lastClickOperator = true;
    if ((lastClickNumber == false) || (lastClickNumber == undefined)) {
        display.textContent = 'Please select an operand first';
        click = 0;
    } else {
        if (click <= 1) {
            a = +displayValue; 
            operator = '/';
        } else {
            b = +displayValue;
            a = operate(a, operator, b);
            a = Math.round(a * 100) / 100;
            operator = '/';
            if (divideZeroByZero >= 1) {
                clear1();
                display.textContent = 'bruh...';
            } else {
            display.textContent = a;
            }
        }
    }
    lastClickNumber = false;
})

//make "equals" show last operation on display when clicked
equals.addEventListener('click', () => {
    x += 1;
    b = +displayValue;
    result = operate(a, operator, b);
    result = Math.round(result * 100) / 100;
    if (divideZeroByZero >= 1) {
        clear1();
        display.textContent = 'bruh...';
    } else if (lastClickOperator == true) {
        display.textContent = 'Please select 2nd operand';
    } else if (operator == '') {
        display.textContent = 'Please select operator and 2nd operand';
    } else {
        display.textContent = `${a} ${operator} ${b} = ${result}`;
        clear2();
    }
})

//make "clear" clear the display when clicked
clear.addEventListener('click', () => {
    clear1();
})

//clear1() resets all data
function clear1() {
    displayValue = 0;
    display.textContent = '';
    click = 0;
    x = 0;
    a = 0;
    b = 0;
    operator = '';
    divideZeroByZero = 0;
    lastClickNumber = undefined;
}

//clear2() resets some data
function clear2() {
    displayValue = 0;
    click = 0;
    a = 0;
    b = 0;
    operator = '';
    divideZeroByZero = 0;
    lastClickNumber = undefined;
}