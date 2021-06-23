console.log("Scripts loading...")
let num1;
let num2;
let solution;
let operator;
// console.log("Operator", operator)
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

    return operation(a, b);

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
    let display = document.querySelector('#display')
    display.innerText = '';
    let button = document.addEventListener('click', (e) => {
        console.log("Pressing button")
        if (e.target.innerText.match(/^[0-9]+$/i)) {
            outPutToDisplay(e.target.innerText)
        } 
        return parseInt(e.target.innerText)
    })
}

function addOperators() {
    // Add operators to operator buttons

    document.getElementsByName('divide')[0].addEventListener('click', () => {
        console.log("Dividing!")
    })
    document.getElementsByName('add')[0].addEventListener('click', () => {
        console.log("Adding!")
        // When an operator button is clicked, begin the 'operation', capture
        // the first number and the operator, then get the second number.
        // Then, when you hit 'equals', it should run the operate()/function
        // Addition is just an easy example to work with.
        num1 = parseInt(document.querySelector('#display').innerText)

        // Choose any digit should then clear the display and start a new number
        let buttons = document.querySelectorAll('.digit')

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                let display = document.querySelector('#display')

                // display.innerText = ''
                num2 = parseInt(e.target.innerText)
                console.log("NUMBER2", num2)
                display.textContent = '';
                // display.textContent = num2
                console.log("display", display)
                solution = operate(add, num1, num2)
                // num1 = solution


            })
        })

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
        document.querySelector('#display').innerText = 0;
    })

    document.getElementsByName('clear')[0].addEventListener('click', () => {
        // Clear num1 and num2 but keep solution 
 
        num1 = 0;
        num2 = 0;
        document.querySelector('#display').textContent = 0;
    })
    
}

function getSecondNum() {
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
    equal.addEventListener('click', () => {
        display.innerText = '';
        display.innerText = solution
    })
}

equals()
buttonPress()
addOperators()
outPutToDisplay('0')
calculate()

