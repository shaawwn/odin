console.log("Loading calculator class..")

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
		this.operator = undefined;
		calcDisplay.innerText = '0';
		operDisplay.innerText = '';
	}

	operate() {
		if(this.operator === '+') {
			console.log("Adding", this.currentOperand, this.previousOperand)
			return parseInt(this.currentOperand) + parseInt(this.previousOperand);
		}
		if(this.operator === '-') {
			console.log("Subtracting", this.currentOperand, this.previousOperand)
			return this.previousOperand - this.currentOperand;
		}
		if(this.operator === '÷') {
			if(this.currentOperand === 0) {
				this.clear()
				return 'Zero Division'
			}
			console.log("Dividing", this.currentOperand, this.previousOperand)
			return this.previousOperand / this.currentOperand;
		}
		if(this.operator === 'x') {
			console.log("Multiplication", this.currentOperand, this.previousOperand)
			return this.currentOperand * this.previousOperand;
		}
	}

	getNumber() {
		// pass
	}

	updateDisplay(number) {
		if(calcDisplay.innerText === '0' || calcDisplay.innerText === 'Zero Division') { // If display is 0, or ZDE basically don't update
			calcDisplay.innerText = number
		} else if(calculator.previousOperand !== '' && calculator.currentOperand !== '') { 
			calcDisplay.innerText = number
		} else if(this.currentOperand !== '' && this.previousOperand !== '') {
			calcDisplay.innerText = number;
		} else {
			calcDisplay.innerText += number;
		}

		// Adds second numnber to sub display
		if(operDisplay.innerText !== '') {
			operDisplay.innerText = calculator.previousOperand + calcDisplay.innerText;
		}
	}
}



const digits = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.operator')
const allclear = document.getElementsByName('allclear')[0]
const clear = document.getElementsByName('clear')[0]
const equals = document.getElementById('equals')
const calcDisplay = document.querySelector('#display')
const operDisplay = document.querySelector('#smaller-display')


const calculator = new Calculator()


digits.forEach(digit => digit.addEventListener('click', () => {
	// If first digits entered, concatenate digits together (since there is no operator)
	if(calculator.previousOperand === '') {
		if(calculator.currentOperand === '') {
			calculator.currentOperand = digit.innerText;
		} else {
			calculator.currentOperand += digit.innerText;
		}
		calcDisplay.innerText = calculator.currentOperand;
	} else if(calculator.previousOperand !== '') { // If there is a previous operand and oeprator, operate on each new digit entered
		calculator.currentOperand += digit.innerText;
		let solution = calculator.operate();
		calcDisplay.innerText = solution;
		operDisplay.innerText += digit.innerText;
	}	
}))

operators.forEach(operator => operator.addEventListener('click', () => {
	// If there is no operator selected, assign operator to calc.operator, and currentOperand to previous operand
	if(calculator.operator === undefined) {
		calculator.operator = operator.innerText;
		calculator.previousOperand = calculator.currentOperand;
		calculator.currentOperand = '';
		operDisplay.innerText = calculator.previousOperand + ' ' + calculator.operator;
	} else {
		console.log("Not undefined!")
		if(operDisplay.innerText === '') {
			operDisplay.innerText = calcDisplay.innerText;
		}
		calculator.operator = operator.innerText;
		operDisplay.innerText += ' ' + operator.innerText;
		calculator.currentOperand = '';
		calculator.previousOperand = calcDisplay.innerText;
		calcDisplay.innertext = calculator.previousOperand;
	}
}))

allclear.addEventListener('click', () => {
    calculator.clear()
})

clear.addEventListener('click', () => {
	calculator.currentOperand = '';
	calcDisplay.innerText = '0';
})

equals.addEventListener('click', () => {
	operDisplay.innerText = '';
	calculator.currentOperand = '';
	calculator.previousOperand = '';
})
