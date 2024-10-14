let first_operand = null;
let second_operand = null;
let operation = null;
let displayValue = "0";

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
        display.textContent = "Bruh";
        return 'Bruh';
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

const container = document.querySelector(".container");
container.addEventListener('click', (event) => {
    const display = document.querySelector("#display");
    let target = event.target;
    if(target.classList.length > 0) {
        if(target.className === "number") {
            if(displayValue.length === 10) return;
            if(displayValue === "0" || (operation !== null && displayValue === "")) {
                displayValue = target.textContent;
                display.textContent = displayValue;
            } else {
                displayValue += target.textContent;
                display.textContent = displayValue;
            }
        } else {
            first_operand = displayValue;
            operation = target.textContent;
            displayValue = "";
        }
    } else {
        switch(target.id) {
            case 'decimal':
                if(displayValue.includes(".") || displayValue.length === 10) return;
                else {
                    displayValue += '.';
                    display.textContent = displayValue;
                }
                break;
            case 'AC':
                first_operand = null;
                second_operand = null;
                operation = null;
                displayValue = "0";
                display.textContent = displayValue;
                break;
            case 'equals':
                if(operation === null) return;
                second_operand = displayValue;
                displayValue = operator(first_operand, second_operand, operation).toString().substring(0, 10);
                if(displayValue === 'Bruh') {
                    first_operand = null;
                    second_operand = null;
                    operation = null;
                    displayValue = "0";
                } else {
                    first_operand = displayValue;
                    second_operand = null;
                    operation = null;
                    display.textContent = displayValue;
                }
        }
    }
});