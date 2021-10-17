// Run test functions here
console.log("Running test scripts....")

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