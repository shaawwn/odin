console.log("Scripts loading...")
let num1 = 0;
let num2 = 0;
let solution;
let operator;

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
    if (operation == 'add') {
        return add(a, b)
    }
    // return operation(a, b);

}


function outPutToDisplay(toDisplay) {

    if (toDisplay.match(/^[0-9]+$/i)) {
        if (document.querySelector('#display').innerText === '0') {
            document.querySelector('#display').innerText = '';
        }
        document.querySelector('#display').innerText += toDisplay
    }
}

function buttonPress() {
    // Displays a concatonated number as you press digit buttons
    let display = document.querySelector('#display')
    display.innerText = '';
    let button = document.addEventListener('click', (e) => {
        if (e.target.innerText.match(/^[0-9]+$/i)) {
            outPutToDisplay(e.target.innerText)
        } 
        // return parseInt(e.target.innerText)
    })
}

function addOperators() {
    // Add operators to operator buttons

    document.getElementsByName('divide')[0].addEventListener('click', () => {
        console.log("Dividing!")
    })
    document.getElementsByName('add')[0].addEventListener('click', () => {
        // Capture the first number and the current operation
        console.log("Adding!")

    })
    document.getElementsByName('subtract')[0].addEventListener('click', () => {
        console.log("Subtracting!")
    })
    document.getElementsByName('multiply')[0].addEventListener('click', () => {
        console.log("Multiplying!")
    })

    // Clear functions
    document.getElementsByName('allclear')[0].addEventListener('click', () => {
        // Completely clear all numbers
        num1 = 0;
        num2 = 0;
        solution = 0;
        console.log(num1, num2)
        document.querySelector('#display').innerText = 0;
    })

    document.getElementsByName('clear')[0].addEventListener('click', () => {
        // Clear num1 and num2 but keep solution 
 
        num1 = 0;
        num2 = 0;
        document.querySelector('#display').textContent = 0;
    })
    
}

function clearNumbers(num1, num2) {
    num1 = 0;
    num2 = 0;
    let nums = [num1, num2]
    return nums 
}


function getSecondNum(number) {
    let display = document.querySelector('#display')
    display.innerText = '';
    buttonPress()

}

function calculate(operator, num) {
    //Main function
    console.log("Launching calculator")

}


function equals() {
    
    let equal = document.querySelector('#equals')
    let display = document.querySelector('#display')
    // solution = operate(operator, num1, num2)
    // return solution
    // Older
    equal.addEventListener('click', () => {
        solution = operate(operator, num1, num2)
        display.innerText = '';
        display.innerText = solution
    })
}

equals()
buttonPress()
addOperators()
outPutToDisplay('0')
calculate()

