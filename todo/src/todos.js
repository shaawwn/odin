// Manage Adding/Updating Todos here

// Storage
// Todos are stored in local storage with the following categories: Today, Daily, Weekly, Monthly

const storage = localStorage
// console.log("STORAGE in todo.js", localStorage)
// localStorage.clear()

let daily = []

let today = ['Add pending todos to today']

let weekly = {
    'sunday': [],
    'monday': [],
    'tuesday': [],
    'wednesday': [],
    'thursday': [],
    'friday': [],
    'saturday': []
}

let monthly = {
    
}

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

// let dailyStorage = checkLocalStorage('daily', storage)
// // console.log("DAILY STORAGE", dailyStorage['8am'])
// dailyStorage.push("do even more random stuff")
// storage.setItem('daily', JSON.stringify(dailyStorage))
// console.log(storage)
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
    modal.appendChild(addTodoForm())
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
function addTodo(todoType, todo) {
    // Add a todo to local storage
    // When 'Add todo is clicked in the form, take the todo and save it
    // storage.setItem()
    console.log("Adding: ", todo)
    // alert("To do added")
    closeModal()

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
    modal.style.display = 'none';
}
export { test, addModal, openModal }