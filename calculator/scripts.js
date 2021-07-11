console.log("Scripts loading...")
// Get all the buttons

// Lets try a class
class Calculator {
    constructor(currentOperand, previousOperand) {
        this.currentOperand = currentOperand
        this.previousOperand = previousOperand
        this.operator = undefined
        this.clear()
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operator = undefined
        calcDisplay.innerText = '0'
        operDisplay.innerText = '';

    }

    operate() {
        console.log("IN OPERATOR", this.operator, this.previousOperand, this.currentOperand)
        if (this.operator === '+') {
            return this.currentOperand + this.previousOperand
        }
        if (this.operator === '-') {
            return this.previousOperand - this.currentOperand
        }
        if (this.operator === '÷') {
            return this.previousOperand / this.currentOperand
        }
        if (this.operator === 'x') {
            return this.currentOperand * this.previousOperand
        }
    }

    updateDisplay(number) {
        if (calcDisplay.innerText === '0') {
            calcDisplay.innerText = number
        } else if(this.currentOperand !== '' && this.previousOperand !== '') {
            calcDisplay.innerText = number;
        }  else {
            calcDisplay.innerText += number
        }

        // This adds the second number to the sub display
        if (operDisplay.innerText !== '') {
            operDisplay.innerText += number
        }
    }



}

let digits = document.querySelectorAll('.digit')
let operators = document.querySelectorAll('.operator')
let allclear = document.getElementsByName('allclear')[0]
let clear = document.getElementsByName('clear')[0]
let equals = document.getElementById('equals')
let currentOperand = '';
let previousOperand = '';
let calcDisplay = document.querySelector('#display')
let operDisplay = document.querySelector('#smaller-display')


const calculator = new Calculator()

// Add digit updates to display
digits.forEach(digit => {digit.addEventListener('click', () => {
    if (calculator.currentOperand !== '' && calculator.previousOperand !== '') {
        operDisplay.innerText = display.innerText
        display.innerText = digit.innerText
        // calculator.updateDisplay(digit.innerText)
    } else {
        console.log("UPDATING DISPLAY", calcDisplay, operDisplay)
        calculator.updateDisplay(digit.innerText)
    }
    // calculator.updateDisplay(digit.innerText)
})})

// Add clear to clear button
allclear.addEventListener('click', () => {
    calculator.clear()
})

// Add operator listeners
operators.forEach(operator => {operator.addEventListener('click', () => {
    calculator.operator = operator.innerText

    if (calcDisplay.innerText === '0') {
        //pass
        // console.log("Passing")
    } else if (calcDisplay !== '' && calculator.previousOperand === '') {
        calculator.previousOperand = parseInt(calcDisplay.innerText)
        operDisplay.innerText = calculator.previousOperand + calculator.operator
        calcDisplay.innerText = '0'
    } else if(calculator.currentOperand !== '' && calculator.previousOperand !== '') {
        console.log("Both operands")
        // calcDisplay.innerText = '0'
        solution = calculator.operate()

        // Update soltuion and reset operands
        operDisplay.innerText += calculator.operator + calcDisplay.innerText
        calcDisplay.innerText = solution
        calculator.currentOperand = '';
        calculator.previousOperand = '';

    } 
    
    else if(calcDisplay !== '' && calculator.previousOperand !== '') {
        calculator.currentOperand = parseInt(calcDisplay.innerText)
        solution = calculator.operate()
        calcDisplay.innerText = solution
        // If another number is entered, it needs to start a new digit sequence
        calculator.previousOperand = solution
    }

})})

// Add equals operation
equals.addEventListener('click', () => {
    if (calculator.currentOperand === '' && calculator.previousOperand === '') {
        console.log("Not adding")
    } else {
        calculator.currentOperand = parseInt(calcDisplay.innerText)
        solution = calculator.operate()
        calcDisplay.innerText = solution;
    }
    calculator.currentOperand = '';
    calculator.previousOperand = '';
})






