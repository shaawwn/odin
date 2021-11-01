// Classes for todo objects
console.log('loading todo objects...')

let storage = localStorage

// console.log(storage)


class Todo {
    // Type: Due, Daily, Weekly, Monthly
    constructor(type, title, desc, id, finished=false) {
        this.type = type;
        this.title = title;
        this.desc = desc;
        this.finished = finished
        this.id = id
    }
}

class weeklyTodo extends Todo {
    // Weekly todos, day: Day of the week
    constructor(type, title, desc, day) {
        super(type, title, desc);
        this.day = day
    }
}


class monthlyTodo extends Todo {
    constructor(type, title, desc, date) {
        super(type, title, desc);
        this.date;
    }
}


class Project {
    constructor(name) {
        this.name = name;
        this.todos = {
            'today': [],
            'daily': [],
            'weekly': [],
            'monthly': [],
        }
        this.numTodos = 0 // numTodo increments with each new todo, and functions as a unique ID for each todo
    }

}


// let newProject = new Project('default')


// function addTodo() {

// }
export {Todo, weeklyTodo, monthlyTodo, Project}