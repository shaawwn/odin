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
        if (this.operator === '+') {
            return parseInt(this.currentOperand) + parseInt(this.previousOperand)
        }
        if (this.operator === '-') {
            return this.previousOperand - this.currentOperand
        }
        if (this.operator === '÷') {
            if (this.currentOperand === 0) {
                this.clear()
                return 'Zero Division'
            }
            return this.previousOperand / this.currentOperand
        }
        if (this.operator === 'x') {
            return this.currentOperand * this.previousOperand
        }
    }

    updateDisplay(number) {
        if (calcDisplay.innerText === '0' || calcDisplay.innerText === 'Zero Division') {
            calcDisplay.innerText = number
        } else if (calculator.previousOperand !== '' && calculator.currentOperand != '') {
            calcDisplay.innerText = number
        } else {
            calcDisplay.innerText += number
        }

        if (operDisplay.innerText !== '') {
            // Needs to clear out old numbers instead of just concatonating 
            console.log("NOT UPDATING PROPERLY WHEN SEQUENCING")
            operDisplay.innerText = calculator.previousOperand + calculator.operator + calcDisplay.innerText
        }
    }



}
// Testing token
let digits = document.querySelectorAll('.digit')
let operators = document.querySelectorAll('.operator')
let allclear = document.getElementsByName('allclear')[0]
let clear = document.getElementsByName('clear')[0]
let equals = document.getElementById('equals')
let currentOperand = '';
let previousOperand = '';
let calcDisplay = document.querySelector('#display')
let operDisplay = document.querySelector('#smaller-display')
// console.log(digits, operators, allclear, clear, equals)

const calculator = new Calculator()

// Add digit updates to display
digits.forEach(digit => {digit.addEventListener('click', () => {
    // Make sure that if you keep typing an operator, the number updates properly

    if (calculator.operator !== undefined && calculator.currentOperand !== '' && calculator.previousOperand !== '') {
        // calcDisplay.innerText = '';
        calculator.updateDisplay(digit.innerText)
    } else {
        calculator.updateDisplay(digit.innerText)
    }

    // Previously, this was the only line in here
    // calculator.updateDisplay(digit.innerText)
})})

// Add clear to clear button
allclear.addEventListener('click', () => {
    calculator.clear()
})

// Add operator listeners
operators.forEach(operator => {operator.addEventListener('click', () => {
    // So the operator needs to operate BEFORE assigning a new operator
    if (calculator.operator !== undefined) {
        // After performing one operation, when user selects a new digit, begin new operation
        // console.log("PROBLEM WITH UPDATING IN OPERATOR LOOP", calculator.previousOperand)
        // Both operands are empty at this point
        calculator.currentOperand = calcDisplay.innerText
        solution = calculator.operate()

        console.log("...", solution)
        calcDisplay.innerText = solution
        calculator.operator = operator.innerText
        calculator.previousOperand = solution;
        return
    } else {
        // DELETE IF/ELSE AND JUST THIS LINE 
        calculator.operator = operator.innerText
    }
    calculator.operator = operator.innerText

    if (calcDisplay.innerText === '0') {
        //pass
        // console.log("Passing")
    } else if (calcDisplay !== '' && calculator.previousOperand === '') {
        calculator.previousOperand = parseInt(calcDisplay.innerText)
        operDisplay.innerText = calculator.previousOperand + calculator.operator
        calcDisplay.innerText = '0'
    } else if(calcDisplay !== '' && calculator.previousOperand !== '') {
        calculator.currentOperand = parseInt(calcDisplay.innerText)
        solution = calculator.operate()
        calcDisplay.innerText = solution
        // At this point user should be able to start entering another
        // number to add to the sequence of operations
        calculator.previousOperand = solution
    } 

})})

// Add equals operation
equals.addEventListener('click', () => {
    if (calculator.currentOperand === '' && calculator.previousOperand === '') {
        console.log("No operation when pressing equals")
    } else {
        calculator.currentOperand = parseInt(calcDisplay.innerText)
        solution = calculator.operate()
        calcDisplay.innerText = solution;
    }
    calculator.currentOperand = '';
    // calculator.previousOperand = '';
    calculator.previousOperand = solution;
})






