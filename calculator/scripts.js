console.log("Srripts loading...")

// Operation functions

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operation, a, b) {
    //pass
}

function outPutToDisplay(toDisplay) {
    document.querySelector('#display').innerText = toDisplay;
}

outPutToDisplay()