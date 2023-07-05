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

//create variables for numbers and operator
let a;
let operator;
let b;

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