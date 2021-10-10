import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import Icon from './icon.jpeg';

// import { functionOne } from './functionOne.js';
// import myName from './myName';

function component() {
	const element = document.createElement('div');


	element.innerHTML = _.join(['Hello', 'webpack'])
	element.classList.add('hello');

	// Add image 
	const myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);


	return element 
}

// printMe()
document.body.appendChild(component())