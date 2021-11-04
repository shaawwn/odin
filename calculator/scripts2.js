console.log("Loading scripts2")

import { Calculator } from './calculator.js';

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('operator');
const allClear = document.getElementsByName('allclear')[0];
const clear = document.getElementsByName('clear')[0];
const equals = document.getElementById('equals');
const currentOperand = '';
const previousOperand = '';
const calcDisplay = document.querySelector('#display');
const operDisplay = document.querySelector('#smaller-display');

const calculator = new Calculator();


