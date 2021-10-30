import { Todo, weeklyTodo, monthlyTodo} from './todoclass.js';
import { loadPage, addListeners, loadTodoBox, addTodoContainer, addBanner, addSidebar } from './index.js';
// Manage Adding/Updating Todos here

// Storage
const storage = localStorage
// const allTodos = {
//     'due': [],
//     'daily': [],
//     'weekly': [],
//     'monthly': [],
// }


// const newProject = {
//     'due': [],
//     'daily': [],
//     'weekly': [],
//     'monthly': [],
// }

// storage.setItem('new project', JSON.stringify(newProject))
// console.log(storage)


function checkLocalStorage(todoType, storage) {
    // Check status of local storage, if none exists, initialize, else do nothing
    if(storage.getItem(todoType) === null) {
        console.log("Storage is not created yet")
        if (todoType === 'weekly') {
            storage.setItem('weekly', JSON.stringify(weekly))
        } else if(todoType === 'daily') {
            storage.setItem('daily', JSON.stringify(daily))
        } else if(todoType === 'monthly') {
            storage.setItem('monthly', JSON.stringify(monthly))
        }
        return JSON.parse(storage.getItem(todoType))
    } else {
        // return true
        return JSON.parse(storage.getItem(todoType))
        // console.group("STORAGE CHECK", storage.getItem(todoType))
    }
}

function test() {
    // console.log("Todo js file loading...")
}


function addModal() {
    // Create a modal for adding Todos to Daily/Weekly
    const modal = document.createElement('div');
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerText = 'X'
    closeBtn.addEventListener('click', () => {
        closeModal(modal)
    })
    modal.appendChild(closeBtn)
    modal.classList.add('modal')
    // modal.setAttribute('name', todoType)
    console.log("Adding modal...")


    // Add input for creating a new Todo
    // modal.style.display = 'block'; // Testing only
    // modal.appendChild(addTodoForm())
    return modal
}


function addTodoForm() {
    const todoAdd = document.createElement('div');
    todoAdd.classList.add('add-todo');

    const todoHeader = document.createElement('p');
    const todo = document.createElement('input');
    const todoDesc = document.createElement('textarea'); // To be added later
    const submitBtn = document.createElement('button');
    const closeBtn = document.createElement('span');

    let options = ['daily', 'weekly', 'monthly']

    todoHeader.classList.add('modal-header');
    submitBtn.classList.add('btn');

    todoHeader.innerText = 'Submit new Todo'
    submitBtn.innerText = 'Add Todo'
    todo.placeholder = 'Add a new todo';
    todoDesc.placeholder = 'Brief description of todo'

    todoAdd.appendChild(todoHeader);
    todoAdd.appendChild(todo);

    for(let i = 0; i < options.length; i++){
        const radioDiv = document.createElement('div');
        radioDiv.classList.add('checkbox');

        let choice = document.createElement('input');

        choice.type = 'checkbox';
 
        let label = document.createElement('label');

        label.for = choice;
        label.innerText = options[i][0].toUpperCase() + options[i].slice(1);

        choice.value = options[i]

        radioDiv.appendChild(choice);
        radioDiv.appendChild(label)
        todoAdd.appendChild(radioDiv);
    }

    todoAdd.appendChild(submitBtn);
    todoAdd.appendChild(closeBtn);

    submitBtn.addEventListener('click', () => {

        addTodo(todo.value)
    })
    return todoAdd;
}

function checkRadioBtn(button) {

    button.addEventListener('click', () => {
        console.log(button)
        if(button.checked === false) {
            button.checked = true
        } else if(button.checked === true){
            button.checked = false
        }
    })

}

let mondayTodo = new weeklyTodo('weekly', 'Test', 'This is a new test', 'monday');

function addTodo(todoType, todo, projectName) {
    // Add a todo to local storage

    let todoProject = JSON.parse(storage[projectName])
    
    todoProject['todos'][todoType].push(todo)
    storage.setItem(projectName, JSON.stringify(todoProject))
    loadTodoBox(todoType)
}

function addProject(projectName) {
    // Add a new project to todo list, project is JSON object, same as allTodos
    // that is stored within allTodos
    const newProject = {
        'due': [],
        'daily': [],
        'weekly': [],
        'monthly': [],
    }
    storage.setItem(projectName, newProject);
}


function openModal() {
    // Open the modal when the appreopriate element is clicked (in this case the Add todo button)
    let modal = document.querySelector('.modal')
    
    modal.style.display = 'block';
    console.log("Opening modal", modal)

}

function closeModal() {
    // Close a modal when user hits the X in the top of the screen on the modal (or clicks outside modal)
    let modal = document.querySelector('.modal');
    modal.innerHTML = '';
    modal.style.display = 'none';
}
export { test, addProject, addTodo, addModal, openModal, closeModal }