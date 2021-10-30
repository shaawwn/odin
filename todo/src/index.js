import './style.css';
// import { testJSON } from './tests.js';
import { Todo, weeklyTodo, monthlyTodo, Project } from './todoclass.js';
import { test, addProject, addTodo, addModal, openModal, closeModal } from './todos.js';
import { loadCalendar } from './calendar.js';



console.log("Scripts loading....")
const storage = localStorage;
const generalTodos = new Project('general');
// storage.setItem('general', JSON.stringify(generalTodos))
// storage.clear()


function loadPage(projectName) {
    // Main function for adding elements to the DOM

    document.body.innerHTML = '';

    let contentDiv = document.createElement('div') // Content div is all elements of the the body after the banner
    contentDiv.id = 'content'
    document.body.appendChild(addBanner())
    document.body.appendChild(contentDiv)
    contentDiv.appendChild(addSidebar())

    addTodoContainer(projectName)
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
    addProjectBtn.addEventListener('click', () => {
        addNewProject()
    })

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


function addTodoContainer(projectName) {
    // Add containers for each todo category to be displayed in 'mailbox' style
    // Load 'general' by default
    const todoBoxes = ['today', 'daily', 'weekly', 'monthly'];
    const content = document.querySelector('#content')
    const boxContainer = document.createElement('div');

    const parseTodos = JSON.parse(storage[projectName])

    boxContainer.id = 'box-container';

    for (let i = 0; i < todoBoxes.length;i++) {

        let boxDiv = document.createElement('div');
        let boxDivHeader = document.createElement('p');
        const addBtn = addTodoBtn(projectName);

        boxDivHeader.classList.add('header');
        boxDiv.classList.add('todo-box');
        boxDiv.setAttribute('name', todoBoxes[i])
        addBtn.innerText = 'Add Todo';


        boxDivHeader.innerText = todoBoxes[i][0].toUpperCase() + todoBoxes[i].slice(1) + ' Todos';
        boxDiv.appendChild(boxDivHeader);
        boxDiv.appendChild(addBtn);

        if(todoBoxes[i] === 'monthly') {
            // Calendar functions in a different way, so add later
            boxDiv.appendChild(loadCalendar());
            boxContainer.appendChild(boxDiv)
        }
        if(todoBoxes[i] === 'daily') {
            let dailyTodos = loadTodos('daily', projectName);
            boxDiv.appendChild(addTodos(dailyTodos))
            boxDiv.style.display = 'none';
        } 
        if(todoBoxes[i] === 'weekly') {
            let weeklyTodos = loadTodos('weekly', projectName);
            boxDiv.appendChild(addTodos(weeklyTodos))
            boxDiv.style.display = 'none'
        }
        if(todoBoxes[i] === 'today') { // This just sets today to display by default, everything else is set to 'none'
            let todayTodos = loadTodos('today', projectName)
            boxDiv.appendChild(addTodos(todayTodos))
            boxDiv.style.display = 'flex';
        }

        boxContainer.appendChild(boxDiv);
    }
    boxContainer.appendChild(addModal())
    content.appendChild(boxContainer);
}

function addTodos(todos) {
    // Parse todos and add to container, todos is an array of todos

    if(todos.length === 0) {
        const noTodos = document.createElement('h1');
        noTodos.classList.add('header')
        noTodos.innerText = 'You have no Todos!'
        return noTodos
    } else {
        // Load and add the todos 
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');

        for (let i = 0; i < todos.length;i++) {
            let newTodo = document.createElement('div');
            let checkBox = document.createElement('i');
            let todoName = document.createElement('p');
            let todoDesc = document.createElement('p');

            todoName.innerText = todos[i].title
            todoDesc.innerText = todos[i].desc;
            newTodo.appendChild(checkBox);
            newTodo.appendChild(todoName);
            newTodo.appendChild(todoDesc);

            newTodo.classList.add('todo-card');

            todoContainer.appendChild(newTodo);

            newTodo.addEventListener('click', () => {
                if(newTodo.className.search('finished') != -1) {
                    newTodo.classList.remove('finished')

                } else {
                    newTodo.classList.add('finished')
                }
            })
        }
        return todoContainer
    }

}

function loadTodos(todo, projectName) {
    // Load todos based on project name, or by all as default

    const projectStorage = JSON.parse(storage[projectName]);
    const todoList = []

    for (let i = 0; i < projectStorage.todos[todo].length;i++) {

        todoList.push(projectStorage.todos[todo][i])
    }
    return todoList
}

function addTodoForm(projectName) {
    // Create a form and add to modal
    const todoForm = document.createElement('div');
    todoForm.classList.add('todo-form');

    const todoHeader = document.createElement('p');
    const todoName = document.createElement('input');
    const todoDesc = document.createElement('textarea');
    const todoType = document.createElement('select')
    const closeBtn = document.createElement('button');
    const submitBtn = addTodoBtn()

    todoName.classList.add('form-input');
    todoDesc.classList.add('form-input');
    todoType.classList.add('form-input');
    closeBtn.classList.add('close-btn');

    todoHeader.innerText = 'Add new Todo';
    todoName.placeholder = 'Enter a name for your todo';
    todoDesc.placeholder = 'Enter a brief description of your todo';
    closeBtn.innerText = 'X';
    submitBtn.value = 'Add Todo'

    const todoTypes = ['today', 'daily', 'weekly', 'monthly'];

    for (let i = 0; i < todoTypes.length;i++) {
        let option = document.createElement('option');
        option.value = todoTypes[i]
        option.innerText = todoTypes[i][0].toUpperCase() + todoTypes[i].slice(1)
        todoType.appendChild(option)
    }

    closeBtn.addEventListener('click', () => {
        closeModal()
    })

    submitBtn.addEventListener('click', () => {
        let newTodo = new Todo (todoType.value, todoName.value, todoDesc.value)
        addTodo(todoType.value, newTodo, projectName)

        closeModal()
        loadPage(projectName);

    })
    
    todoForm.appendChild(closeBtn);
    todoForm.appendChild(todoHeader);
    todoForm.appendChild(todoName);
    todoForm.appendChild(todoDesc);
    todoForm.appendChild(todoType);
    todoForm.appendChild(submitBtn);

    
    return todoForm
}


function addTodoBtn(projectName) {
    // Create the button and listener for adding todos
    const todoBtn = document.createElement('button'); // Use a span?
    todoBtn.classList.add('add-todo-btn');
    todoBtn.classList.add('btn');
    // todoBtn.setAttribute('name', todoType)

    todoBtn.innerText = 'Add Todo';
    todoBtn.addEventListener('click', () => {
        let modal = document.querySelectorAll('.modal')
        modal[0].innerHTML = '';
        console.log("MODAL", modal)
        let todoForm = addTodoForm(projectName);
        modal[0].appendChild(todoForm);
        openModal(modal);
    })
    return todoBtn;
}

function addNewProject() {
    // Add the form for creating a new project
    const modal = document.querySelector('.modal');
    const boxContainer = document.querySelector('#box-container');

    // modal.classList.add('modal')
    const newProjectForm = document.createElement('div');
    const newProjectHeader = document.createElement('p');
    const projectName = document.createElement('input');
    const projectDescription = document.createElement('textarea')
    const submitBtn = document.createElement('button');


    newProjectForm.classList.add('modal-form');
    newProjectHeader.classList.add('header');
    submitBtn.classList.add('btn');
    submitBtn.innerText = 'Add Project';

    newProjectHeader.innerText = 'Add New Project';
    newProjectForm.appendChild(newProjectHeader);
    newProjectForm.appendChild(projectName);
    newProjectForm.appendChild(projectDescription);
    newProjectForm.appendChild(submitBtn);

    modal.appendChild(newProjectForm);

    modal.style.display = 'block';
    boxContainer.appendChild(modal);
}


function addListeners() {
    // Add listeners to DOM elements
    let todoOptions = document.getElementsByClassName('box-item');
    for (let i = 0; i < todoOptions.length;i++) {
        todoOptions[i].addEventListener('click', () => {
            let keyword = todoOptions[i].innerText[0].toLowerCase() + todoOptions[i].innerText.slice(1);
            let todobox = document.getElementsByName(keyword)[0];
            loadTodoBox(keyword)
        })
    }
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


loadPage('general');
// addListeners();

export { loadPage, addListeners, loadTodoBox, addTodoContainer, addBanner, addSidebar }