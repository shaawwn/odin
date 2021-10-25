// Run test functions here
// console.log("Running test scripts....")

// let storage = localStorage
// console.log("STORAGE", storage)
function testJSON() {
    // Create a test JSON object to use for local storage testing
    let todos = {}
    // Today Todo
    todos['today'] = {
        'allday': ['One hour studying', 'Make Bed'],
    }
    // Daily todo
    todos['daily'] = {
        'allday': todos['today']['allday'],
        '8': ['Make Coffee'],
        '9': ['Go for run'],
    }
    // Weekly todo
    todos['weekly'] = {
        'monday': ['Do Laundry', 'Go to gym']
    }
    // Monthly todo 
    todos['monthly'] = {
        '5': ['Check bank account'],
        '20': ['Check bank account'],
    }
    // console.log("Todos: ", todos)
    return todos;
}

export { testJSON }

// testJSON();

let todo = {
    'today': ['Work on JS project'],
    'daily': [],
    'weekly': {
        'sunday': null,
        'monday': null,
        'tuesday': null,
        'wednesday': null,
        'thursday': null,
        'friday': null,
        'saturday': null,
    },
    'monthly': {}
}

let daily = {
    '8am': 'Brush Teeth',
    '9am': 'Wash hands',
    '1pm': 'Do homework',
}

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

// localStorage.clear()
// Stringify setsd the object to a string, which is usable by local storage

// localStorage.setItem('daily', JSON.stringify(daily))
// localStorage.setItem('weekly', JSON.stringify(weekly))
// localStorage.setItem('monthly', JSON.stringify(monthly))


// Can then JSON.parse() that string to turn it back into an object
// console.log(localStorage)
let dailyStorage = localStorage.getItem('daily')
// console.log("DAILY STORAGE", JSON.parse(dailyStorage)['8am'])
let dailyTodo = {
    '10am': 'Make breakfast',
}

function testStorage(todoType, newTodo) {
    
    // localStorage.setItem('todo', JSON.stringify(todo))
    // let todos = JSON.parse(localStorage.getItem('todo'))
    let today = JSON.parse(localStorage.getItem('todo'))['today']
    let todos = JSON.parse(localStorage.getItem('todo'))
    // localStorage.clear()
    today.push("Do some stuff")
    todos['today'] = today

    // So load the localStorage object using JSON.parse()
    // Now you can load like you load a discionary
    // So push the new string to the array, then save the array from the object
    // With the object now updated, you can setItem to local storage the same way, but with updated data
    // When you set llocal storage, make sure to stringify to the new object data
    // localStorage.setItem('todo', JSON.stringify(todos))

    // console.log("TODAYS", today, todos, JSON.parse(localStorage['todo']))
    // console.log("TODAY", localStorage)


}

function testAdd(todoType, newTodo) {
    console.log(todoType)
    let todoKey = Object.keys(newTodo);
    // todoType[todoKey].push(newTodo[todoKey])

    // If no todo array exists, create one, else add to the array
    if(todoType[todoKey] === undefined) {
        console.log("No todos exist at this time")
        todoType[todoKey] = [newTodo[todoKey]]
        console.log(todoType[todoKey])
    } else {
        todoType[todoKey].push(newTodo[todoKey])
    }
    console.log(todoType[todoKey], newTodo[todoKey])
}

// testAdd(daily, dailyTodo)
// User todos

