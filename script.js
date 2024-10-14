let first_operand = 0;
let second_operand = null;
let operator = null;

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if(Number(b) === 0) {
        // something witty
        console.log("Just a sny log for now.");
        return;
    }
    return Number(a) / Number(b);
}

function operator(a, b, op) {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            console.log("This should not even be possible!");
    }
}