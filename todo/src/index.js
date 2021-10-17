import './style.css';
import { testJSON } from './tests.js';
import './functions.js';

console.log("Scripts loading....")

let tests = testJSON();

// Should be a sidebar which is its own thing, and a display window for 
// Daily/Weekly/Monthly ToDos

// Sidebar shoud always be visible for easy navigation

// ToDo Categories 

function addDomElements() {
    // Main function for adding elements to the DOM
    let domBody = document.body

    // contentDiv is where main page content will be loaded
    let contentDiv = document.createElement('div')
    contentDiv.id = 'content'
    domBody.appendChild(addBanner())
    domBody.appendChild(contentDiv)
    contentDiv.appendChild(addSidebar())
    addTodoContainer()
}


function addBanner() {
    // Add a header banner for the webpage
    let banner = document.createElement('div')
    let bannerHeader = document.createElement('p');

    banner.id = 'banner';
    // banner.classList.add('test');
    bannerHeader.classList.add('header')
    bannerHeader.innerText = "User's Todo List";

    banner.appendChild(bannerHeader);
    return banner
}


function addSidebar() {
    // Add the sidebar to the DOM
    let sidebar = document.createElement('div');
    let addProjectBtn = document.createElement('button');
    let boxes = ['Today', 'Daily', 'Weekly', 'Monthly']
    let linebreak = document.createElement('hr');

    sidebar.id = 'sidebar';
    sidebar.classList.add('container');
    addProjectBtn.classList.add('btn');
    linebreak.classList.add('linebreak');

    addProjectBtn.innerText = '+ Project';
    // sidebar.classList.add('test');

    for(let i = 0; i < boxes.length; i++) {
        let navHeader = document.createElement('p')
        navHeader.classList.add('box-item');
        navHeader.innerText = boxes[i];

        sidebar.appendChild(navHeader)
    }
    sidebar.appendChild(linebreak);
    sidebar.appendChild(addProjectBtn);
    return sidebar;
}


function addTodoContainer() {
    // Add containers for each todo category to be displayed in 'mailbox' style
    let boxes = ['today', 'daily', 'weekly', 'monthly'];
    let content = document.querySelector('#content')
    let boxContainer = document.createElement('div');
    boxContainer.id = 'box-container';
    console.log(content)
    for (let i = 0; i < boxes.length;i++) {
        let boxDiv = document.createElement('div')
        let boxDivHeader = document.createElement('p');

        boxDiv.classList.add('todo-box');
        boxDiv.setAttribute('name', boxes[i])
        boxDivHeader.classList.add('header');

        boxDivHeader.innerText = boxes[i][0].toUpperCase() + boxes[i].slice(1) + "'s Todos" 

        boxDiv.appendChild(boxDivHeader);
        if(boxes[i] === 'today') { // This just sets today to display by default, everything else is set to 'none'
            boxDiv.style.display = 'block';
            // boxDiv.appendChild(addTodoToContainer(boxes[i]))
        }
        boxDiv.appendChild(addTodoToContainer(boxes[i]))
        boxContainer.appendChild(boxDiv);
    }

    content.appendChild(boxContainer);

}


function addTodoToContainer(todo) {
    // With the todos stored in local storage, add them to the appropriate 
    // todo container
    console.log("Adding todos", tests[todo])

    // Create a box, then append the box with todos as a list
    let todoList = document.createElement('ul');
    todoList.classList.add('list-container');

    let todoKeys = Object.keys(tests[todo])
    for(let i = 0;i < todoKeys.length;i++) {
        
        let todoHeader = document.createElement('p');
        todoHeader.classList.add('header');
        todoHeader.innerText = todoKeys[i][0].toUpperCase() + todoKeys[i].slice(1)
        todoList.appendChild(todoHeader)
        for (let j = 0; j < tests[todo][todoKeys[i]].length; j++) {
            let todoItem = document.createElement('li');
            todoItem.classList.add('todo-card');
    
            todoItem.innerText = tests[todo][todoKeys[i]][j]
            todoList.appendChild(todoItem)

        }
    }
    return todoList

}
function test() {
    let test = document.createElement('div');
    const btn = document.createElement('button');

    test.classList.add('test')
    test.innerHTML = 'Goodbye, world!'


    return test;
}

function addBtnEvents() {
    // Add event listeners to the daily/weekly/monthly options in the sidebar to change the todo box window
    // let options = document.getElementsByClassName('box-item');
    let options = document.querySelectorAll('.box-item')
    console.log("OPTIONS", options.length)
}

document.addEventListener('DOMContentLoaded', () => {
    addBtnEvents();
    // addDomElements();
})

addDomElements();
// document.body.appendChild(test());