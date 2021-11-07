import './style.css';
// import { testJSON } from './tests.js';
import { Todo, weeklyTodo, monthlyTodo, Project } from './todoclass.js';
import { test, addProject, removeProject, addTodo, removeTodo, addModal, openModal, closeModal, checkFinished } from './todos.js';
import { loadCalendar } from './calendar.js';



console.log("Scripts loading....")
const storage = localStorage;
// const generalTodos = new Project('general');
// storage.setItem('general', JSON.stringify(generalTodos))
// storage.clear()
// console.log(storage)

function loadPage(projectName, todoType) {
    // Main function for adding elements to the DOM

    document.body.innerHTML = '';
    // initialize storage if none
    if(storage.length === 0) {
        let generalTodos = new Project('general');
        storage.setItem('general', JSON.stringify(generalTodos))
        // storage.clear()
    }

    let contentDiv = document.createElement('div') // Content div is all elements of the the body after the banner
    let boxContainer = document.createElement('div'); // Added Box container here instead of in add container
    boxContainer.id = 'box-container';
    contentDiv.id = 'content'
    document.body.appendChild(addBanner(projectName))
    document.body.appendChild(contentDiv)
    contentDiv.appendChild(addSidebar())
    contentDiv.appendChild(boxContainer);

    addTodoContainer(projectName, todoType);
    addListeners(projectName);
}


function addBanner(projectName) {
    // Add a header banner for the webpage
    let banner = document.createElement('div')
    let bannerHeader = document.createElement('p');

    banner.id = 'banner';
    bannerHeader.classList.add('header')

    bannerHeader.innerText = `User's Todo List for ${projectName}`;

    banner.appendChild(bannerHeader);

    return banner
}


function addSidebar() {
    // Add the sidebar to the DOM
    console.log("storage in addSidebar()", storage)
    let sidebar = document.createElement('div');
    let addProjectBtn = document.createElement('button');
    let boxes = ['Today', 'Daily', 'Weekly', 'Monthly']
    let linebreak = document.createElement('hr');
    let projectHeader = document.createElement('p');


    sidebar.id = 'sidebar';
    sidebar.classList.add('container');
    addProjectBtn.classList.add('btn');
    linebreak.classList.add('linebreak');
    projectHeader.classList.add('header');
    projectHeader.innerText = 'Projects';
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
    // sidebar.appendChild(projectHeader);
    sidebar.appendChild(addProjectBtn);

    let projects = Object.keys(storage);
    for(let i = 0; i < projects.length; i++) {
        // // Add an optiont to load project into main window
        // let projectDiv = document.createElement('div');
        // let projectSelect = document.createElement('button');
        // let removeProject = document.createElement('button');

        // projectDiv.classList.add('project-select');
        // projectSelect.innerText = projects[i];
        // projectSelect.classList.add('btn');
        // projectSelect.classList.add('btn-sm');
        // removeProject.classList.add('btn');
        // removeProject.classList.add('remove-project-btn');
        // removeProject.innerText = 'X';

        // projectDiv.appendChild(projectSelect);
        // projectDiv.appendChild(removeProject);
        // sidebar.appendChild(projectDiv);

        // projectSelect.addEventListener('click', () => {
        //     loadPage(projects[i], 'today');
        // })
        sidebar.append(addProjectsToSidebar(projects[i]))
    }

    return sidebar;
}

function addProjectsToSidebar(project) {
    let projectDiv = document.createElement('div');
    let projectSelect = document.createElement('button');
    let removeProjectBtn = document.createElement('button');

    projectDiv.classList.add('project-select');
    projectSelect.innerText = project;
    projectSelect.classList.add('btn');
    projectSelect.classList.add('btn-sm');
    removeProjectBtn.classList.add('btn');
    removeProjectBtn.classList.add('remove-project-btn');
    removeProjectBtn.innerText = 'X';

    projectDiv.appendChild(projectSelect);
    projectDiv.appendChild(removeProjectBtn);
    // sidebar.appendChild(projectDiv);

    projectSelect.addEventListener('click', () => {
        loadPage(project, 'today');
    })

    removeProjectBtn.addEventListener('click', () => {
        removeProject(project);
    })
    return projectDiv
}

function addTodoContainer(projectName, todoType) {
    const content = document.querySelector('#content')
    // const boxContainer = document.createElement('div'); // Added boxContainer to loadPage() instead of creating it here
    // boxContainer.id = 'box-container';
    const boxContainer = document.querySelector('#box-container');
    boxContainer.innerHTML = '';

    let boxDiv = document.createElement('div');
    let boxDivHeader = document.createElement('div');
    const addBtn = addTodoBtn(projectName);

    boxDivHeader.classList.add('header');
    boxDiv.classList.add('todo-box')
    boxDiv.setAttribute('name', todoType);
    addBtn.innerText = 'Add Todo';
    console.log("BOX HEADER", boxDivHeader, todoType)
    boxDivHeader.innerText = todoType[0].toUpperCase() + todoType.slice(1) + ' Todos';
    boxDiv.appendChild(boxDivHeader);
    boxDiv.appendChild(addBtn);

    if(todoType === 'monthly') {
        boxDiv.appendChild(loadCalendar());
        boxDiv.style.display = 'flex';
        boxContainer.appendChild(boxDiv);
    } else if(todoType === 'weekly'){
        boxDiv.appendChild(loadWeekly(projectName));
        boxDiv.style.display = 'flex';
    } else {
        let todos = loadTodos(todoType, projectName);
        boxDiv.appendChild(addTodos(todos, projectName))
        boxDiv.style.display = 'flex';
    }

    boxContainer.appendChild(boxDiv);
    boxContainer.appendChild(addModal());
    content.appendChild(boxContainer);
}


function addTodoContainerx(projectName) {
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
            boxDiv.appendChild(addTodos(dailyTodos, projectName))
            boxDiv.style.display = 'none';
        } 
        if(todoBoxes[i] === 'weekly') {
            let weeklyTodos = loadTodos('weekly', projectName);
            boxDiv.appendChild(addTodos(weeklyTodos, projectName))
            boxDiv.style.display = 'none'
        }
        if(todoBoxes[i] === 'today') { // This just sets today to display by default, everything else is set to 'none'
            let todayTodos = loadTodos('today', projectName)
            boxDiv.appendChild(addTodos(todayTodos, projectName))
            boxDiv.style.display = 'flex';
        }

        boxContainer.appendChild(boxDiv);
    }
    boxContainer.appendChild(addModal())
    content.appendChild(boxContainer);
}

function addTodos(todos, projectName) {
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
            // console.log("TODOS", todos[i])
            let newTodo = document.createElement('div');
            // let checkBox = document.createElement('i');
            let todoDetails = document.createElement('div');
            let todoName = document.createElement('p');
            let todoDesc = document.createElement('p');
            let todoBool = todos[i].finished
            let removeBtn = document.createElement('button');

            if(todoBool === true){
                todoDetails.classList.add('finished')
            } else if(todoBool === false) {
                todoDetails.classList.remove('finished')
            }
            todoName.innerText = todos[i].title
            todoDesc.innerText = todos[i].desc;
            removeBtn.innerText = 'Remove';
            removeBtn.classList.add('btn');
            removeBtn.classList.add('remove-btn');
            todoDetails.classList.add('todo-details');

            removeBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                removeTodo(todos[i], projectName)
            })

            todoDetails.appendChild(todoName);
            todoDetails.appendChild(todoDesc)
            newTodo.appendChild(todoDetails);
            newTodo.appendChild(removeBtn);

            newTodo.classList.add('todo-card');

            todoContainer.appendChild(newTodo);

            newTodo.addEventListener('click', () => {

                if(todoBool === false){

                    checkFinished(todos[i], projectName)
                    todoDetails.classList.remove('finished')
                    loadPage(projectName)
                } else if(todoBool === true) {

                    checkFinished(todos[i], projectName)
                    todoDetails.classList.add('finished')
                    loadPage(projectName)
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
        // console.log("INDEX OF", projectStorage.todos[todo].indexOf(projectStorage.todos[todo][i]))
    }
    // console.log("loading todos function", todoList)

    return todoList
}

function weeklyTodoForm() {
    // Variation of todoForm with days of week as options instead of todo type, supplemented to addTodoForm function

    const daysOfWeek = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ]


}

function addTodoForm(projectName, todo) {
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

    if(todo === 'weekly') {
        const daysOfWeek = [
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday'
        ]
        for (let i = 0; i < daysOfWeek.length;i++) {
            let option = document.createElement('option');
            option.value = daysOfWeek[i]
            option.innerText = daysOfWeek[i][0].toUpperCase() + daysOfWeek[i].slice(1)
            todoType.appendChild(option)
        }
    } else {
        for (let i = 0; i < todoTypes.length;i++) {
            let option = document.createElement('option');
            option.value = todoTypes[i]
            option.innerText = todoTypes[i][0].toUpperCase() + todoTypes[i].slice(1)
            todoType.appendChild(option)
        }
    }
    // for (let i = 0; i < todoTypes.length;i++) {
    //     let option = document.createElement('option');
    //     option.value = todoTypes[i]
    //     option.innerText = todoTypes[i][0].toUpperCase() + todoTypes[i].slice(1)
    //     todoType.appendChild(option)
    // }

    closeBtn.addEventListener('click', () => {
        closeModal()
    })

    submitBtn.addEventListener('click', () => {
        console.log(JSON.parse(storage[projectName]).numTodos)
        let todoID = JSON.parse(storage[projectName]).numTodos;
        // console.log("ID: ", todoID)
        let newTodo = new Todo (todoType.value, todoName.value, todoDesc.value,todoID)
        addTodo(todoType.value, newTodo, projectName)

        closeModal()
        loadPage(projectName, todoType.value);

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
    const closeBtn = document.createElement('button');
    const submitBtn = document.createElement('button');


    newProjectForm.classList.add('modal-form');
    newProjectHeader.classList.add('header');
    closeBtn.classList.add('btn');
    closeBtn.classList.add('close-btn');
    closeBtn.innerText = 'X'
    submitBtn.classList.add('btn');
    submitBtn.innerText = 'Add Project';


    newProjectHeader.innerText = 'Add New Project';
    newProjectForm.appendChild(closeBtn);
    newProjectForm.appendChild(newProjectHeader);
    newProjectForm.appendChild(projectName);
    newProjectForm.appendChild(projectDescription);
    // newProjectForm.appendChild(closeBtn);
    newProjectForm.appendChild(submitBtn);

    modal.appendChild(newProjectForm);

    closeBtn.addEventListener('click', () => {
        closeModal();
    })

    submitBtn.addEventListener('click', () => {
        addProject(projectName.value)
        closeModal();
        loadPage(projectName.value, 'today');
    })
    modal.style.display = 'block';
    boxContainer.appendChild(modal);
}


function addListeners(projectName) {
    // Add listeners to DOM elements
    let todoOptions = document.getElementsByClassName('box-item');
    for (let i = 0; i < todoOptions.length;i++) {
        todoOptions[i].addEventListener('click', () => {
            let keyword = todoOptions[i].innerText[0].toLowerCase() + todoOptions[i].innerText.slice(1);
            let todobox = document.getElementsByName(keyword)[0];

            // loadTodoBox(keyword);
            addTodoContainer(projectName, keyword);

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
        todayBox.style.display = 'flex';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'none';
    } else if(todo === 'daily') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'flex';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'none';
    } else if(todo === 'weekly') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'flex';
        monthlyBox.style.display = 'none';
    } else if (todo === 'monthly') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'flex';
    }
}

function loadWeekly(projectName) {
    // Create a weekly todo container where you can choose and add todos based on days of the week, 
    // returns a div with 7 boxes for each day of the week
    let daysOfWeek = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ]

    let weekdayDiv = document.createElement('div');
    weekdayDiv.classList.add('weekly')

    for(let i = 0; i < daysOfWeek.length;i++) {
        let day = document.createElement('div')
        day.classList.add('calendar-day')

        day.addEventListener('click', () => {
            let modal = document.querySelectorAll('.modal')
            modal[0].innerHTML = '';
            console.log("MODAL", modal)
            let todoForm = addTodoForm(projectName);
            modal[0].appendChild(todoForm);
            openModal(modal);
        })
        day.innerText = daysOfWeek[i][0].toUpperCase() + daysOfWeek[i].slice(1);
        weekdayDiv.appendChild(day);
    }
    return weekdayDiv;
}


function askName() {
    //pass
}
// By default, load 'General' todos when visitng the page
loadPage('general', 'today');
// addListeners();

export { loadPage, addListeners, loadTodoBox, addTodoContainer, addBanner, addSidebar }