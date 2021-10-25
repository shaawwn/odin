import './style.css';
import { testJSON } from './tests.js';
import { test, addModal, openModal } from './todos.js';
import { loadCalendar } from './calendar.js';

// test()
console.log("Scripts loading....")

let tests = testJSON(); // Tests are dummy content such as dummy JSON data, etc

function loadPage() {
    // Main function for adding elements to the DOM

    // contentDiv is where main page content will be loaded
    let contentDiv = document.createElement('div') // Content div is all elements of the the body after the banner
    contentDiv.id = 'content'
    document.body.appendChild(addBanner())
    document.body.appendChild(contentDiv)
    contentDiv.appendChild(addSidebar())

    addTodoContainer()
    addListeners();
}


function addBanner() {
    // Add a header banner for the webpage
    let banner = document.createElement('div')
    let bannerHeader = document.createElement('p');

    banner.id = 'banner';
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
    let todoBoxes = ['today', 'daily', 'weekly', 'monthly'];
    let content = document.querySelector('#content')
    let boxContainer = document.createElement('div');
    boxContainer.id = 'box-container';


    for (let i = 0; i < todoBoxes.length;i++) {

        let boxDiv = document.createElement('div');
        let boxDivHeader = document.createElement('p')

        boxDiv.classList.add('todo-box');
        boxDiv.setAttribute('name', todoBoxes[i])
        boxDivHeader.classList.add('header');
        if(todoBoxes[i] === 'monthly') {

            boxDiv.appendChild(loadCalendar());
            // boxDiv.style.display = 'block';
            boxContainer.appendChild(boxDiv)
            continue

        }

        if(todoBoxes[i] === 'daily') {
            boxDivHeader.innerText = todoBoxes[i][0].toUpperCase() + todoBoxes[i].slice(1) + ' Todos';
            boxDiv.style.display = 'block';
        } else {
            boxDivHeader.innerText = todoBoxes[i][0].toUpperCase() + todoBoxes[i].slice(1) + "'s Todos" 
        }

        boxDiv.appendChild(boxDivHeader);
        if(todoBoxes[i] === 'today') { // This just sets today to display by default, everything else is set to 'none'
            boxDiv.style.display = 'none';
        }
        
        boxDiv.appendChild(addTodos(todoBoxes[i]))
        boxDiv.appendChild(addTodoBtn(todoBoxes[i]));
        boxContainer.appendChild(boxDiv);
    }
    boxContainer.appendChild(addModal())
    content.appendChild(boxContainer);

}


function addTodos(todo) {
    // With the todos stored in local storage, add them to the appropriate 
    // todo container

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

function addTodoBtn(todoType) {
    // Create the button and listener for adding todos
    const todoBtn = document.createElement('span'); // Use a span?
    todoBtn.classList.add('add-todo-btn');
    todoBtn.setAttribute('name', todoType)

    todoBtn.innerText = '+';
    todoBtn.addEventListener('click', () => {
        let modal = document.querySelectorAll('.modal')
        // console.log(modal)
        openModal(modal);
    })
    return todoBtn;
}


function addListeners() {
    // Add listeners to DOM elements
    document.addEventListener("DOMContentLoaded", () => {
        let todoOptions = document.getElementsByClassName('box-item');

        for(let i = 0; i < todoOptions.length; i++) {
            todoOptions[i].addEventListener('click', () => {
                let keyword = todoOptions[i].innerText[0].toLowerCase() + todoOptions[i].innerText.slice(1)
                let todoBox = document.getElementsByName(keyword)[0]
                loadTodoBox(keyword)
            })
        }
    })
}


function loadTodoBox(todo) {
    // Display given todobox

    const todayBox = document.getElementsByName('today')[0];
    const dailyBox = document.getElementsByName('daily')[0];
    const weeklyBox = document.getElementsByName('weekly')[0];
    const monthlyBox = document.getElementsByName('monthly')[0];
    if(todo === 'today') {
        todayBox.style.display = 'block';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'none';
    } else if(todo === 'daily') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'block';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'none';
    } else if(todo === 'weekly') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'block';
        monthlyBox.style.display = 'none';
    } else if (todo === 'monthly') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'block';
    }
}


loadPage();
