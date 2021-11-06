import { Todo, weeklyTodo, Project, monthlyTodo} from './todoclass.js';
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
    todoProject['numTodos'] += 1;
    storage.setItem(projectName, JSON.stringify(todoProject))
    // loadTodoBox(todoType, todoType)
}

function removeTodo(todo, projectName) {
    //Remove a todo when it's deleted/completed
    // Get 'type' of todo
    console.log(todo.type)
    let todoProject = JSON.parse(storage[projectName])
    let indexOfTodo = todoProject.todos[todo.type].findIndex(e => e.id === todo.id); // Changed title to id
    todoProject.todos[todo.type].splice(indexOfTodo, 1)
    storage.setItem(projectName, JSON.stringify(todoProject))
    console.log("Removing todo")
    loadPage(projectName, todo.type)

}


function checkFinished(todo, projectName) {
    // Mark a todo as finished or unfinished
    let todoProject = JSON.parse(storage[projectName])
    let indexOfTodo = todoProject.todos[todo.type].findIndex(e => e.id === todo.id);
    console.log(indexOfTodo)
    if(todo.finished === true) {
        todo.finished = false
        todoProject.todos[todo.type][indexOfTodo] = todo
        
    } else if(todo.finished === false) {
        todo.finished = true
        todoProject.todos[todo.type][indexOfTodo] = todo
    }
    storage.setItem(projectName, JSON.stringify(todoProject))
}


function addProject(projectName) {
    // Add a new project to todo list, project is JSON object, same as allTodos
    // that is stored within allTodos
    let newProject = new Project(projectName);
    storage.setItem(projectName, JSON.stringify(newProject));
}

function removeProject(projectName) {
    if(confirm("Are you sure you want to delete project?")) {
        storage.removeItem(projectName)
        loadPage('general', 'today');
    } 
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
export { addProject, removeProject, addTodo, removeTodo, addModal, openModal, closeModal, checkFinished }