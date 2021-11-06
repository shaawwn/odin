/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCalendar": () => (/* binding */ loadCalendar)
/* harmony export */ });
// console.log("Loading monthly todo calendar....")
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dt = new Date();
var current = 0;
var monthTodo = document.getElementsByName('monthly'); // Container for the calendar, when a month is changed, this gets reset and replaced with currently selected month

function loadCalendar() {
  // console.log("MONTH + CURRENT", dt.getMonth(), current)
  // let date = dt.getDate();
  // let day = dt.getDay()
  var year = dt.getFullYear();
  var month = dt.getMonth() + current;
  var daysInMonth = new Date(year, month + 1, 0).getDate();
  var firstDayOfMonth = new Date(year, month, 1);
  var lastDayOfMonth = new Date(year, month + 1, 0);
  var dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
  var lastDateString = lastDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
  var paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
  var nextPaddingDays = weekdays.length - weekdays.indexOf(lastDateString.split(', ')[0]); // Create elements and set attributes

  var monthlyDiv = document.createElement('div');
  monthlyDiv.classList.add('todo-box');
  monthlyDiv.style.display = 'none';
  monthlyDiv.setAttribute('name', 'monthly');
  var calendarContainer = document.createElement('div');
  var calendar = document.createElement('div');
  var monthHeader = document.createElement('p');
  var calendarHeader = document.createElement('div');
  calendar.classList.add('calendar');
  calendarHeader.classList.add('cal-header-container');
  monthHeader.classList.add('month-header');
  monthHeader.innerText = months[month]; // calendarContainer.appendChild(monthHeader);

  calendarContainer.appendChild(addMonthHeader(month));
  calendarContainer.appendChild(calendar); // Add weekday headers

  calendar.appendChild(addWeekdayHeader()); // Add day squares to calendar

  addDaySquares(calendar, paddingDays, daysInMonth, nextPaddingDays);
  monthlyDiv.appendChild(calendarContainer); // return monthlyDiv
  // calendarContainer.append(addModal('monthly'))

  return calendarContainer;
}

function addMonthHeader(month) {
  // Add the name of the current month at the top of the calendar, as well as the ability to switch months
  // 'Current' defaults to the given month parameter (current month), adding/subtracting form current will switch months
  // let current = 0;
  var monthHeader = document.createElement('div');
  monthHeader.classList.add('month-header-container');
  var monthTitle = document.createElement('p');
  monthTitle.classList.add('month-header');
  monthTitle.innerText = months[month];
  var previousMonth = document.createElement('button');
  var nextMonth = document.createElement('button');
  addMonthNavigation(previousMonth, 'previous');
  addMonthNavigation(nextMonth, 'next');
  previousMonth.classList.add('btn');
  previousMonth.classList.add('month-nav');
  nextMonth.classList.add('month-nav');
  nextMonth.classList.add('btn');
  previousMonth.innerText = '<';
  nextMonth.innerText = '>';
  monthHeader.appendChild(previousMonth);
  monthHeader.appendChild(monthTitle);
  monthHeader.appendChild(nextMonth);
  return monthHeader;
}

function addWeekdayHeader() {
  // Add weekday headers to the calendar('Monday', 'Tuesday', 'etc)
  var weekdayHeader = document.createElement('div');
  weekdayHeader.classList.add('cal-header-container');

  for (var i = 0; i < weekdays.length; i++) {
    var dayHeader = document.createElement('div');
    dayHeader.classList.add('cal-header');
    dayHeader.innerText = weekdays[i];
    weekdayHeader.appendChild(dayHeader);
  }

  return weekdayHeader;
}

function addMonthNavigation(button, direction) {
  // Add click listeners to previous/next month Buttons to switch months in the calendar
  var month = document.getElementsByName('monthly');
  var monthCalendar = document.getElementsByClassName('calendar');
  button.addEventListener('click', function () {
    // Nav moves left or right
    if (direction === 'previous') {
      current -= 1;
      current = checkCurrent(current);
      monthTodo[0].innerHTML = '';
      monthTodo[0].appendChild(loadCalendar());
    } else if (direction === 'next') {
      current += 1;
      current = checkCurrent(current);
      monthTodo[0].innerHTML = '';
      monthTodo[0].appendChild(loadCalendar());
    }
  });
}

function checkCurrent(current) {
  // Resets 'current' to 0 if greater than 12, since numbers higher than that are out of index for months
  if (current + dt.getMonth() > 11) {
    console.log("Invalid current", current + dt.getMonth());
    return -dt.getMonth();
  } else if (dt.getMonth() + current < 0) {
    // Roll over so that it will return index 12 for December, return the difference between 12 and dt.getMonth()
    console.log("Previous year");
    return 11 - dt.getMonth();
  }

  console.log("Valid current", current);
  return current;
}

function addDaySquares(calendar, paddingDays, daysInMonth, nextPaddingDays) {
  var _loop = function _loop(i) {
    var calendarDay = document.createElement('div');
    calendarDay.classList.add('calendar-day');

    if (i < paddingDays || i >= paddingDays + daysInMonth) {
      calendarDay.classList.add('padding');
    } else {
      calendarDay.innerText = i - paddingDays + 1;
      calendarDay.addEventListener('click', function () {
        openModal(calendarDay);
      });
    }

    calendar.appendChild(calendarDay);
  };

  for (var i = 0; i < paddingDays + daysInMonth + nextPaddingDays - 1; i++) {
    _loop(i);
  }
}

function addModal(todoType) {
  // Add a modal to the calendar for adding new Todos, potentially not unique to calendar, so maybe move to another file and export
  // 4 types of todos: Today(Unique), Daily, Weekly, Monthly, adjust the form accordingly
  var modal = document.createElement('div');
  modal.classList.add('modal');
  var todoForm = document.createElement('div');
  todoForm.classList.add('add-todo'); // Create a form for adding new Todos, and add it to the todo form div

  if (todoType === 'daily') {
    pass;
  } else if (todoType === 'today') {
    pass;
  } else if (todoType === 'weekly') {
    pass;
  } else if (todoType === 'monthly') {
    // Here's where I add stuff for now
    var monthDate = document.createElement('p');
    var todo = document.createElement('input');
    var todoDesc = document.createElement('textarea');
    var submitBtn = document.createElement('input');
    var closeBtn = document.createElement('span');
    monthDate.classList.add('header');
    monthDate.classList.add('modal-header'); // monthDate.innerText = months[dt.getMonth()]

    todo.type = 'text';
    todo.placeholder = 'Add todo';
    todoDesc.placeholder = 'Add a description of the todo here';
    submitBtn.type = 'submit';
    submitBtn.value = 'Add Todo';
    submitBtn.classList.add('btn');
    closeBtn.classList.add('close-btn');
    closeBtn.innerText = 'X';
    closeBtn.addEventListener('click', function () {
      closeModal(modal);
    });
    todoForm.appendChild(monthDate);
    todoForm.appendChild(todo);
    todoForm.appendChild(todoDesc);
    todoForm.appendChild(submitBtn);
    todoForm.appendChild(closeBtn);
  } // todoForm.appendChild(todo)
  // todoForm.appendChild(submitBtn)


  modal.appendChild(todoForm);
  return modal;
}

function closeModal(modal) {
  // By clicking a close button close any open modal
  modal.style.display = 'none';
}

function openModal(day) {
  // Add an event lsitener to open up the add todo modal
  var modal = document.getElementsByClassName('modal');
  var modalHeader = document.getElementsByClassName('modal-header')[0];
  var monthDate = months[dt.getMonth() + current] + " " + day.innerText;
  modalHeader.innerText = '';
  modalHeader.innerText = months[dt.getMonth() + current] + " " + day.innerText;
  modal[0].style.display = 'block';
}

function printDateInfo(date) {
  console.log("Date: ", date.getDate());
  console.log("Day: ", weekdays[date.getDay()]);
  console.log("Year: ", date.getFullYear());
  console.log("Month: ", months[date.getMonth()]);
  var dateParams = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  console.log("Formated date string", date.toLocaleDateString('en-US', dateParams)); // Can get days in month by getting the date of the last day in a month.

  var daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  var firstDay = new Date(date.getYear(), date.getMonth(), 1).getDay();
  console.log("Days in month: ", daysInMonth, firstDay);
}

document.addEventListener("DOMContentLoaded", function () {}); // printDateInfo(dt)



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage),
/* harmony export */   "addListeners": () => (/* binding */ addListeners),
/* harmony export */   "loadTodoBox": () => (/* binding */ loadTodoBox),
/* harmony export */   "addTodoContainer": () => (/* binding */ addTodoContainer),
/* harmony export */   "addBanner": () => (/* binding */ addBanner),
/* harmony export */   "addSidebar": () => (/* binding */ addSidebar)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoclass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoclass.js */ "./src/todoclass.js");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.js */ "./src/calendar.js");
 // import { testJSON } from './tests.js';




console.log("Scripts loading....");
var storage = localStorage; // const generalTodos = new Project('general');
// storage.setItem('general', JSON.stringify(generalTodos))
// storage.clear()
// console.log(storage)

function loadPage(projectName, todoType) {
  // Main function for adding elements to the DOM
  document.body.innerHTML = ''; // initialize storage if none

  if (storage.length === 0) {
    var generalTodos = new _todoclass_js__WEBPACK_IMPORTED_MODULE_1__.Project('general');
    storage.setItem('general', JSON.stringify(generalTodos)); // storage.clear()
  }

  var contentDiv = document.createElement('div'); // Content div is all elements of the the body after the banner

  var boxContainer = document.createElement('div'); // Added Box container here instead of in add container

  boxContainer.id = 'box-container';
  contentDiv.id = 'content';
  document.body.appendChild(addBanner(projectName));
  document.body.appendChild(contentDiv);
  contentDiv.appendChild(addSidebar());
  contentDiv.appendChild(boxContainer);
  addTodoContainer(projectName, todoType);
  addListeners(projectName);
}

function addBanner(projectName) {
  // Add a header banner for the webpage
  var banner = document.createElement('div');
  var bannerHeader = document.createElement('p');
  banner.id = 'banner';
  bannerHeader.classList.add('header');
  bannerHeader.innerText = "User's Todo List for ".concat(projectName);
  banner.appendChild(bannerHeader);
  return banner;
}

function addSidebar() {
  // Add the sidebar to the DOM
  console.log("storage in addSidebar()", storage);
  var sidebar = document.createElement('div');
  var addProjectBtn = document.createElement('button');
  var boxes = ['Today', 'Daily', 'Weekly', 'Monthly'];
  var linebreak = document.createElement('hr');
  var projectHeader = document.createElement('p');
  sidebar.id = 'sidebar';
  sidebar.classList.add('container');
  addProjectBtn.classList.add('btn');
  linebreak.classList.add('linebreak');
  projectHeader.classList.add('header');
  projectHeader.innerText = 'Projects';
  addProjectBtn.innerText = '+ Project';
  addProjectBtn.addEventListener('click', function () {
    addNewProject();
  });

  for (var i = 0; i < boxes.length; i++) {
    var navHeader = document.createElement('p');
    navHeader.classList.add('box-item');
    navHeader.innerText = boxes[i];
    sidebar.appendChild(navHeader);
  }

  sidebar.appendChild(linebreak); // sidebar.appendChild(projectHeader);

  sidebar.appendChild(addProjectBtn);
  var projects = Object.keys(storage);

  for (var _i = 0; _i < projects.length; _i++) {
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
    sidebar.append(addProjectsToSidebar(projects[_i]));
  }

  return sidebar;
}

function addProjectsToSidebar(project) {
  var projectDiv = document.createElement('div');
  var projectSelect = document.createElement('button');
  var removeProjectBtn = document.createElement('button');
  projectDiv.classList.add('project-select');
  projectSelect.innerText = project;
  projectSelect.classList.add('btn');
  projectSelect.classList.add('btn-sm');
  removeProjectBtn.classList.add('btn');
  removeProjectBtn.classList.add('remove-project-btn');
  removeProjectBtn.innerText = 'X';
  projectDiv.appendChild(projectSelect);
  projectDiv.appendChild(removeProjectBtn); // sidebar.appendChild(projectDiv);

  projectSelect.addEventListener('click', function () {
    loadPage(project, 'today');
  });
  removeProjectBtn.addEventListener('click', function () {
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.removeProject)(project);
  });
  return projectDiv;
}

function addTodoContainer(projectName, todoType) {
  var content = document.querySelector('#content'); // const boxContainer = document.createElement('div'); // Added boxContainer to loadPage() instead of creating it here
  // boxContainer.id = 'box-container';

  var boxContainer = document.querySelector('#box-container');
  boxContainer.innerHTML = '';
  var boxDiv = document.createElement('div');
  var boxDivHeader = document.createElement('div');
  var addBtn = addTodoBtn(projectName);
  boxDivHeader.classList.add('header');
  boxDiv.classList.add('todo-box');
  boxDiv.setAttribute('name', todoType);
  addBtn.innerText = 'Add Todo';
  console.log("BOX HEADER", boxDivHeader, todoType);
  boxDivHeader.innerText = todoType[0].toUpperCase() + todoType.slice(1) + ' Todos';
  boxDiv.appendChild(boxDivHeader);
  boxDiv.appendChild(addBtn);

  if (todoType === 'monthly') {
    boxDiv.appendChild((0,_calendar_js__WEBPACK_IMPORTED_MODULE_3__.loadCalendar)());
    boxDiv.style.display = 'flex';
    boxContainer.appendChild(boxDiv);
  } else {
    var todos = loadTodos(todoType, projectName);
    boxDiv.appendChild(addTodos(todos, projectName));
    boxDiv.style.display = 'flex';
  }

  boxContainer.appendChild(boxDiv);
  boxContainer.appendChild((0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.addModal)());
  content.appendChild(boxContainer);
}

function addTodoContainerx(projectName) {
  // Add containers for each todo category to be displayed in 'mailbox' style
  // Load 'general' by default
  var todoBoxes = ['today', 'daily', 'weekly', 'monthly'];
  var content = document.querySelector('#content');
  var boxContainer = document.createElement('div');
  var parseTodos = JSON.parse(storage[projectName]);
  boxContainer.id = 'box-container';

  for (var i = 0; i < todoBoxes.length; i++) {
    var boxDiv = document.createElement('div');
    var boxDivHeader = document.createElement('p');
    var addBtn = addTodoBtn(projectName);
    boxDivHeader.classList.add('header');
    boxDiv.classList.add('todo-box');
    boxDiv.setAttribute('name', todoBoxes[i]);
    addBtn.innerText = 'Add Todo';
    boxDivHeader.innerText = todoBoxes[i][0].toUpperCase() + todoBoxes[i].slice(1) + ' Todos';
    boxDiv.appendChild(boxDivHeader);
    boxDiv.appendChild(addBtn);

    if (todoBoxes[i] === 'monthly') {
      // Calendar functions in a different way, so add later
      boxDiv.appendChild((0,_calendar_js__WEBPACK_IMPORTED_MODULE_3__.loadCalendar)());
      boxContainer.appendChild(boxDiv);
    }

    if (todoBoxes[i] === 'daily') {
      var dailyTodos = loadTodos('daily', projectName);
      boxDiv.appendChild(addTodos(dailyTodos, projectName));
      boxDiv.style.display = 'none';
    }

    if (todoBoxes[i] === 'weekly') {
      var weeklyTodos = loadTodos('weekly', projectName);
      boxDiv.appendChild(addTodos(weeklyTodos, projectName));
      boxDiv.style.display = 'none';
    }

    if (todoBoxes[i] === 'today') {
      // This just sets today to display by default, everything else is set to 'none'
      var todayTodos = loadTodos('today', projectName);
      boxDiv.appendChild(addTodos(todayTodos, projectName));
      boxDiv.style.display = 'flex';
    }

    boxContainer.appendChild(boxDiv);
  }

  boxContainer.appendChild((0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.addModal)());
  content.appendChild(boxContainer);
}

function addTodos(todos, projectName) {
  // Parse todos and add to container, todos is an array of todos
  if (todos.length === 0) {
    var noTodos = document.createElement('h1');
    noTodos.classList.add('header');
    noTodos.innerText = 'You have no Todos!';
    return noTodos;
  } else {
    // Load and add the todos 
    var todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');

    var _loop = function _loop(i) {
      // console.log("TODOS", todos[i])
      var newTodo = document.createElement('div'); // let checkBox = document.createElement('i');

      var todoDetails = document.createElement('div');
      var todoName = document.createElement('p');
      var todoDesc = document.createElement('p');
      var todoBool = todos[i].finished;
      var removeBtn = document.createElement('button');

      if (todoBool === true) {
        todoDetails.classList.add('finished');
      } else if (todoBool === false) {
        todoDetails.classList.remove('finished');
      }

      todoName.innerText = todos[i].title;
      todoDesc.innerText = todos[i].desc;
      removeBtn.innerText = 'Remove';
      removeBtn.classList.add('btn');
      removeBtn.classList.add('remove-btn');
      todoDetails.classList.add('todo-details');
      removeBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.removeTodo)(todos[i], projectName);
      });
      todoDetails.appendChild(todoName);
      todoDetails.appendChild(todoDesc);
      newTodo.appendChild(todoDetails);
      newTodo.appendChild(removeBtn);
      newTodo.classList.add('todo-card');
      todoContainer.appendChild(newTodo);
      newTodo.addEventListener('click', function () {
        if (todoBool === false) {
          (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.checkFinished)(todos[i], projectName);
          todoDetails.classList.remove('finished');
          loadPage(projectName);
        } else if (todoBool === true) {
          (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.checkFinished)(todos[i], projectName);
          todoDetails.classList.add('finished');
          loadPage(projectName);
        }
      });
    };

    for (var i = 0; i < todos.length; i++) {
      _loop(i);
    }

    return todoContainer;
  }
}

function loadTodos(todo, projectName) {
  // Load todos based on project name, or by all as default
  var projectStorage = JSON.parse(storage[projectName]);
  var todoList = [];

  for (var i = 0; i < projectStorage.todos[todo].length; i++) {
    todoList.push(projectStorage.todos[todo][i]); // console.log("INDEX OF", projectStorage.todos[todo].indexOf(projectStorage.todos[todo][i]))
  } // console.log("loading todos function", todoList)


  return todoList;
}

function addTodoForm(projectName) {
  // Create a form and add to modal
  var todoForm = document.createElement('div');
  todoForm.classList.add('todo-form');
  var todoHeader = document.createElement('p');
  var todoName = document.createElement('input');
  var todoDesc = document.createElement('textarea');
  var todoType = document.createElement('select');
  var closeBtn = document.createElement('button');
  var submitBtn = addTodoBtn();
  todoName.classList.add('form-input');
  todoDesc.classList.add('form-input');
  todoType.classList.add('form-input');
  closeBtn.classList.add('close-btn');
  todoHeader.innerText = 'Add new Todo';
  todoName.placeholder = 'Enter a name for your todo';
  todoDesc.placeholder = 'Enter a brief description of your todo';
  closeBtn.innerText = 'X';
  submitBtn.value = 'Add Todo';
  var todoTypes = ['today', 'daily', 'weekly', 'monthly'];

  for (var i = 0; i < todoTypes.length; i++) {
    var option = document.createElement('option');
    option.value = todoTypes[i];
    option.innerText = todoTypes[i][0].toUpperCase() + todoTypes[i].slice(1);
    todoType.appendChild(option);
  }

  closeBtn.addEventListener('click', function () {
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
  });
  submitBtn.addEventListener('click', function () {
    console.log(JSON.parse(storage[projectName]).numTodos);
    var todoID = JSON.parse(storage[projectName]).numTodos; // console.log("ID: ", todoID)

    var newTodo = new _todoclass_js__WEBPACK_IMPORTED_MODULE_1__.Todo(todoType.value, todoName.value, todoDesc.value, todoID);
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.addTodo)(todoType.value, newTodo, projectName);
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
    loadPage(projectName, todoType.value);
  });
  todoForm.appendChild(closeBtn);
  todoForm.appendChild(todoHeader);
  todoForm.appendChild(todoName);
  todoForm.appendChild(todoDesc);
  todoForm.appendChild(todoType);
  todoForm.appendChild(submitBtn);
  return todoForm;
}

function addTodoBtn(projectName) {
  // Create the button and listener for adding todos
  var todoBtn = document.createElement('button'); // Use a span?

  todoBtn.classList.add('add-todo-btn');
  todoBtn.classList.add('btn'); // todoBtn.setAttribute('name', todoType)

  todoBtn.innerText = 'Add Todo';
  todoBtn.addEventListener('click', function () {
    var modal = document.querySelectorAll('.modal');
    modal[0].innerHTML = '';
    console.log("MODAL", modal);
    var todoForm = addTodoForm(projectName);
    modal[0].appendChild(todoForm);
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(modal);
  });
  return todoBtn;
}

function addNewProject() {
  // Add the form for creating a new project
  var modal = document.querySelector('.modal');
  var boxContainer = document.querySelector('#box-container'); // modal.classList.add('modal')

  var newProjectForm = document.createElement('div');
  var newProjectHeader = document.createElement('p');
  var projectName = document.createElement('input');
  var projectDescription = document.createElement('textarea');
  var closeBtn = document.createElement('button');
  var submitBtn = document.createElement('button');
  newProjectForm.classList.add('modal-form');
  newProjectHeader.classList.add('header');
  closeBtn.classList.add('btn');
  closeBtn.classList.add('close-btn');
  closeBtn.innerText = 'X';
  submitBtn.classList.add('btn');
  submitBtn.innerText = 'Add Project';
  newProjectHeader.innerText = 'Add New Project';
  newProjectForm.appendChild(closeBtn);
  newProjectForm.appendChild(newProjectHeader);
  newProjectForm.appendChild(projectName);
  newProjectForm.appendChild(projectDescription); // newProjectForm.appendChild(closeBtn);

  newProjectForm.appendChild(submitBtn);
  modal.appendChild(newProjectForm);
  closeBtn.addEventListener('click', function () {
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
  });
  submitBtn.addEventListener('click', function () {
    console.log("New project name: ", projectName.value);
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.addProject)(projectName.value);
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
    console.log("PRJECT NAME", projectName.value);
    loadPage(projectName.value, 'today');
  });
  modal.style.display = 'block';
  boxContainer.appendChild(modal);
}

function addListeners(projectName) {
  // Add listeners to DOM elements
  var todoOptions = document.getElementsByClassName('box-item');

  var _loop2 = function _loop2(i) {
    todoOptions[i].addEventListener('click', function () {
      var keyword = todoOptions[i].innerText[0].toLowerCase() + todoOptions[i].innerText.slice(1);
      var todobox = document.getElementsByName(keyword)[0]; // loadTodoBox(keyword);

      addTodoContainer(projectName, keyword);
    });
  };

  for (var i = 0; i < todoOptions.length; i++) {
    _loop2(i);
  }
}

function loadTodoBox(todo) {
  // Display given todobox
  var todayBox = document.getElementsByName('today')[0];
  var dailyBox = document.getElementsByName('daily')[0];
  var weeklyBox = document.getElementsByName('weekly')[0];
  var monthlyBox = document.getElementsByName('monthly')[0];

  if (todo === 'today') {
    todayBox.style.display = 'flex';
    dailyBox.style.display = 'none';
    weeklyBox.style.display = 'none';
    monthlyBox.style.display = 'none';
  } else if (todo === 'daily') {
    todayBox.style.display = 'none';
    dailyBox.style.display = 'flex';
    weeklyBox.style.display = 'none';
    monthlyBox.style.display = 'none';
  } else if (todo === 'weekly') {
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

function askName() {//pass
} // By default, load 'General' todos when visitng the page


loadPage('general', 'today'); // addListeners();



/***/ }),

/***/ "./src/todoclass.js":
/*!**************************!*\
  !*** ./src/todoclass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "weeklyTodo": () => (/* binding */ weeklyTodo),
/* harmony export */   "monthlyTodo": () => (/* binding */ monthlyTodo),
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Classes for todo objects
console.log('loading todo objects...');
var storage = localStorage; // console.log(storage)

var Todo = // Type: Due, Daily, Weekly, Monthly
function Todo(type, title, desc, id) {
  var finished = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  _classCallCheck(this, Todo);

  this.type = type;
  this.title = title;
  this.desc = desc;
  this.finished = finished;
  this.id = id;
};

var weeklyTodo = /*#__PURE__*/function (_Todo) {
  _inherits(weeklyTodo, _Todo);

  var _super = _createSuper(weeklyTodo);

  // Weekly todos, day: Day of the week
  function weeklyTodo(type, title, desc, day) {
    var _this;

    _classCallCheck(this, weeklyTodo);

    _this = _super.call(this, type, title, desc);
    _this.day = day;
    return _this;
  }

  return weeklyTodo;
}(Todo);

var monthlyTodo = /*#__PURE__*/function (_Todo2) {
  _inherits(monthlyTodo, _Todo2);

  var _super2 = _createSuper(monthlyTodo);

  function monthlyTodo(type, title, desc, date) {
    var _this2;

    _classCallCheck(this, monthlyTodo);

    _this2 = _super2.call(this, type, title, desc);
    _this2.date;
    return _this2;
  }

  return monthlyTodo;
}(Todo);

var Project = function Project(name) {
  _classCallCheck(this, Project);

  this.name = name;
  this.todos = {
    'today': [],
    'daily': [],
    'weekly': [],
    'monthly': []
  };
  this.numTodos = 0; // numTodo increments with each new todo, and functions as a unique ID for each todo
}; // let newProject = new Project('default')
// function addTodo() {
// }




/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
/* harmony export */   "addModal": () => (/* binding */ addModal),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "checkFinished": () => (/* binding */ checkFinished)
/* harmony export */ });
/* harmony import */ var _todoclass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoclass.js */ "./src/todoclass.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");

 // Manage Adding/Updating Todos here
// Storage

var storage = localStorage; // const allTodos = {
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
  var modal = document.createElement('div');
  var closeBtn = document.createElement('span');
  closeBtn.classList.add('close-btn');
  closeBtn.innerText = 'X';
  closeBtn.addEventListener('click', function () {
    closeModal(modal);
  });
  modal.appendChild(closeBtn);
  modal.classList.add('modal'); // modal.setAttribute('name', todoType)

  console.log("Adding modal..."); // Add input for creating a new Todo
  // modal.style.display = 'block'; // Testing only
  // modal.appendChild(addTodoForm())

  return modal;
}

function addTodoForm() {
  var todoAdd = document.createElement('div');
  todoAdd.classList.add('add-todo');
  var todoHeader = document.createElement('p');
  var todo = document.createElement('input');
  var todoDesc = document.createElement('textarea'); // To be added later

  var submitBtn = document.createElement('button');
  var closeBtn = document.createElement('span');
  var options = ['daily', 'weekly', 'monthly'];
  todoHeader.classList.add('modal-header');
  submitBtn.classList.add('btn');
  todoHeader.innerText = 'Submit new Todo';
  submitBtn.innerText = 'Add Todo';
  todo.placeholder = 'Add a new todo';
  todoDesc.placeholder = 'Brief description of todo';
  todoAdd.appendChild(todoHeader);
  todoAdd.appendChild(todo);

  for (var i = 0; i < options.length; i++) {
    var radioDiv = document.createElement('div');
    radioDiv.classList.add('checkbox');
    var choice = document.createElement('input');
    choice.type = 'checkbox';
    var label = document.createElement('label');
    label.for = choice;
    label.innerText = options[i][0].toUpperCase() + options[i].slice(1);
    choice.value = options[i];
    radioDiv.appendChild(choice);
    radioDiv.appendChild(label);
    todoAdd.appendChild(radioDiv);
  }

  todoAdd.appendChild(submitBtn);
  todoAdd.appendChild(closeBtn);
  submitBtn.addEventListener('click', function () {
    addTodo(todo.value);
  });
  return todoAdd;
}

function checkRadioBtn(button) {
  button.addEventListener('click', function () {
    console.log(button);

    if (button.checked === false) {
      button.checked = true;
    } else if (button.checked === true) {
      button.checked = false;
    }
  });
}

var mondayTodo = new _todoclass_js__WEBPACK_IMPORTED_MODULE_0__.weeklyTodo('weekly', 'Test', 'This is a new test', 'monday');

function addTodo(todoType, todo, projectName) {
  // Add a todo to local storage
  var todoProject = JSON.parse(storage[projectName]);
  todoProject['todos'][todoType].push(todo);
  todoProject['numTodos'] += 1;
  storage.setItem(projectName, JSON.stringify(todoProject)); // loadTodoBox(todoType, todoType)
}

function removeTodo(todo, projectName) {
  //Remove a todo when it's deleted/completed
  // Get 'type' of todo
  console.log(todo.type);
  var todoProject = JSON.parse(storage[projectName]);
  var indexOfTodo = todoProject.todos[todo.type].findIndex(function (e) {
    return e.id === todo.id;
  }); // Changed title to id

  todoProject.todos[todo.type].splice(indexOfTodo, 1);
  storage.setItem(projectName, JSON.stringify(todoProject));
  console.log("Removing todo");
  (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.loadPage)(projectName, todo.type);
}

function checkFinished(todo, projectName) {
  // Mark a todo as finished or unfinished
  var todoProject = JSON.parse(storage[projectName]);
  var indexOfTodo = todoProject.todos[todo.type].findIndex(function (e) {
    return e.id === todo.id;
  });
  console.log(indexOfTodo);

  if (todo.finished === true) {
    todo.finished = false;
    todoProject.todos[todo.type][indexOfTodo] = todo;
  } else if (todo.finished === false) {
    todo.finished = true;
    todoProject.todos[todo.type][indexOfTodo] = todo;
  }

  storage.setItem(projectName, JSON.stringify(todoProject));
}

function addProject(projectName) {
  // Add a new project to todo list, project is JSON object, same as allTodos
  // that is stored within allTodos
  var newProject = new _todoclass_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);
  storage.setItem(projectName, JSON.stringify(newProject));
}

function removeProject(projectName) {
  if (confirm("Are you sure you want to delete project?")) {
    storage.removeItem(projectName);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.loadPage)('general', 'today');
  }
}

function openModal() {
  // Open the modal when the appreopriate element is clicked (in this case the Add todo button)
  var modal = document.querySelector('.modal');
  modal.style.display = 'block';
  console.log("Opening modal", modal);
}

function closeModal() {
  // Close a modal when user hits the X in the top of the screen on the modal (or clicks outside modal)
  var modal = document.querySelector('.modal');
  modal.innerHTML = '';
  modal.style.display = 'none';
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0px;\n    padding: 0px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: rgb(200,200,200);\n}\n\n:root {\n    --page-height: 100vh;\n    --sidebar-width: 25%;\n}\n\np {\n    margin: 0px;\n}\n\n\n.btn {\n    border: none;\n    border-radius: 10px;\n    font-size: 24px;\n}\n\n\n.btn:hover {\n    background-color: rgb(200,200,200);\n}\n\n\n.btn:active {\n    background-color: rgb(150, 150, 150);\n}\n\n\n.linebreak {\n    width: 100%;\n}\n\n\n.test {\n    color: red;\n    background-color: green;\n}\n\n/* General selectors */\n\n.header {\n    font-size: 48px;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    display: flex;\n}\n\n/* Banner */\n\n#banner {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 100px;\n    border-bottom: 1px solid black;\n    background-color: rgb(90, 90, 90);\n    padding-left: 25px;\n}\n\n\n/* Sidebar */\n\n#sidebar {\n    /* height: 100vh; */\n    height: var(--page-height);\n    width: var(--sidebar-width);\n    border-right: 1px solid black;\n    padding: 10px;\n    background-color: rgb(150,150,150);\n}\n\n#sidebar > .btn {\n    margin-bottom: 10px;\n}\n\n.btn-sm {\n    font-size: 18px;\n}\n.box-item {\n    text-align: right;\n    font-size: 24px;\n    border-radius: 5px;\n    margin: 5px;\n    padding: 3px;\n}\n\n.box-item:hover {\n    background-color: rgb(200,200,200);\n    color: rgb(50,50,50);\n}\n\n.project-select {\n    display:flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n\n.remove-project-btn {\n    background-color: red;\n    color: white;\n}\n/* Todo content */\n\n#box-container {\n    display: flex;\n    justify-content: center;\n    /* flex-direction: column; */\n    width: 100vw;\n    background-color: rgb(230,230,230);\n}\n\n.todo-box {\n    background-color: rgb(230,230,230);\n    width: 75%;\n    height: 100vh;\n    display: none;\n    flex-direction: column;\n    position: relative;\n}\n\n.todo-box > .header {\n    text-align: center;\n    color: rgb(100,100,100);\n    margin-bottom: 20px;\n}\n\n.todo-box > ul {\n    background-color: white;\n    color: black;\n    /* padding: 10px; */\n}\n\n.todo-box > button {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    /* background-color: green; */\n    padding: 5px;\n}\nul > li {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    margin: 5px;\n}\n\n\n.todo-card {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    color: black;\n    font-size: 24px;\n    border-bottom: 1px solid black;\n    padding: 5px;\n}\n\n.todo-details {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.todo-details > p {\n    font-size: 18px;\n    margin-right:100px;\n}\n\n\n.finished {\n    text-decoration: line-through;\n    color: green;\n}\n\n.remove-btn {\n    background-color: rgb(170, 66, 66);\n    color: white;\n    font-size: 14px;\n}\n\n.todo-card > p {\n    margin-right: 10px;\n}\n.todo-card:hover {\n    background-color: rgb(150,150,150);\n}\n\n.calendar-container{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    /* width: 100%; */\n}\n\n.calendar {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 770px;\n    padding-top: 30px;\n    margin: auto;\n}\n\n.cal-header-container {\n    display: flex;\n    justify-content: center;\n    background-color:rgb(75, 75, 75);\n}\n\n.cal-header{\n    text-align: center;\n    background-color: rgb(90, 90, 90);\n    margin: 1px;\n    padding: 10px;\n    width: 100px;\n}\n\n\n.month-header-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    position: relative;\n}\n\n.month-header {\n    color: black;\n    text-align: center;\n    font-size: 48px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.month-nav {\n    background-color: rgb(150,150,150);\n    border-radius: 5px;\n    color: black;\n    width: 50px;\n    height: 25px;\n    position: relative;\n    top: 38px;\n}\n\n.calendar-day {\n    margin: 1px;\n    width: 100px;\n    height: 100px;\n    background-color: rgb(150,150,150);\n    padding: 2px;\n    /* border: 1px solid black; */\n}\n\n\n/* Modals */\n\n.modal {\n    background-color: rgba(0,0,0, 0.7);\n    top: 100px;\n    /* width: calc(100% - var(--sidebar-width)); */\n    width: 80%;\n    height: var(--page-height);\n    display: none;\n    position: absolute;\n}\n\n.modal-header {\n    font-size: 28px;\n}\n\n.checkbox {\n    display: flex;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    position: relative;\n    background-color:rgb(200,200,200);\n    color: black;\n    width: 400px;\n    height: 200px;\n    text-align: center;\n    padding: 20px;\n    margin: auto;\n    margin-top: 200px;\n}\n\n.modal-form > p {\n    font-size: 24px;\n}\n\n.modal-form > .btn {\n    width: 50%;\n    margin: auto;\n    margin-top: 10px;\n}\n\n.modal-form > .btn:hover {\n    background-color: rgb(150,150,150);\n}\n\n.modal-form > [type~='text'] {\n    height: 2rem;\n}\n\n.modal-form > textarea {\n\n    height: 75px;\n}\n\n.modal-form-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-bottom: 5px;\n    font-size: 30px;\n    width: 75px;\n    height: 75px;\n    text-align: center;\n    border-radius: 40px;\n    background-color: rgb(135,135,135);\n    /* position: relative; */\n    position: absolute;\n    /* left: 0px; */\n    right: 50px;\n    align-items: right;\n    box-shadow: 2px 2px rgb(50,50,50);\n}\n\n.modal-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n\n.todo-form {\n    display: flex;\n    flex-direction:column;\n    width: 50%;\n    padding: 25px;\n    background-color: rgb(135,135,135);\n    margin: auto;\n    margin-top: 100px;\n}\n\n.todo-form > p {\n    text-align: center;\n    font-size: 24px;\n    color:rgb(40,40,40);\n    margin-bottom: 5px;\n}\n\n.todo-form > textarea {\n    height: 100px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 24px;\n}\n\n.todo-form > select{\n    height: 36px;\n    font-size: 24px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.todo-form > button {\n    width: 50%;\n    margin: auto;\n}\n\n.todo-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n.form-input {\n    margin: 5px;\n}\n\n.todo-form > input {\n    font-size: 24px;\n}\n\n.add-todo-btn {\n    /*  */\n    /* position: absolute; */\n    width: 20%;\n    background-color: rgb(135,135,135);\n    \n}\n.add-todo-btn:hover {\n    background-color: rgb(100,100,100);\n}\n\n.add-todo-btn:active {\n    background-color: rgb(75,75,75);\n}\n\n.close-btn {\n    /* background-color:rgb(230,230,230);\n    box-shadow: 1px 1px;\n    width: 20px;\n    height: 20px;\n    margin-right: 0px; */\n    /* position: absolute; */\n    /* right: 10px; */\n    /* top: 10px; */\n}\n\n.close-btn:hover {\n    background-color: rgb(150,150,150);\n}\n/* Calendar Modal */\n.padding {\n    background-color: rgb(200,200,200);\n}\n\n\n\n@media (max-width: 500px) {\n    \n    #sidebar {\n        display: flex;\n        flex-direction: row;\n        width: 100vw;\n        height: 15%;\n    }\n\n    .header, .nav-header {\n        font-size: 36px;\n        display:none;\n    }\n\n\n}\n\n\n.test-box {\n    width: 1500px;\n    height: 1500px;\n    background-color: green;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0px;\n    padding: 0px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: rgb(200,200,200);\n}\n\n:root {\n    --page-height: 100vh;\n    --sidebar-width: 25%;\n}\n\np {\n    margin: 0px;\n}\n\n\n.btn {\n    border: none;\n    border-radius: 10px;\n    font-size: 24px;\n}\n\n\n.btn:hover {\n    background-color: rgb(200,200,200);\n}\n\n\n.btn:active {\n    background-color: rgb(150, 150, 150);\n}\n\n\n.linebreak {\n    width: 100%;\n}\n\n\n.test {\n    color: red;\n    background-color: green;\n}\n\n/* General selectors */\n\n.header {\n    font-size: 48px;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    display: flex;\n}\n\n/* Banner */\n\n#banner {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 100px;\n    border-bottom: 1px solid black;\n    background-color: rgb(90, 90, 90);\n    padding-left: 25px;\n}\n\n\n/* Sidebar */\n\n#sidebar {\n    /* height: 100vh; */\n    height: var(--page-height);\n    width: var(--sidebar-width);\n    border-right: 1px solid black;\n    padding: 10px;\n    background-color: rgb(150,150,150);\n}\n\n#sidebar > .btn {\n    margin-bottom: 10px;\n}\n\n.btn-sm {\n    font-size: 18px;\n}\n.box-item {\n    text-align: right;\n    font-size: 24px;\n    border-radius: 5px;\n    margin: 5px;\n    padding: 3px;\n}\n\n.box-item:hover {\n    background-color: rgb(200,200,200);\n    color: rgb(50,50,50);\n}\n\n.project-select {\n    display:flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n\n.remove-project-btn {\n    background-color: red;\n    color: white;\n}\n/* Todo content */\n\n#box-container {\n    display: flex;\n    justify-content: center;\n    /* flex-direction: column; */\n    width: 100vw;\n    background-color: rgb(230,230,230);\n}\n\n.todo-box {\n    background-color: rgb(230,230,230);\n    width: 75%;\n    height: 100vh;\n    display: none;\n    flex-direction: column;\n    position: relative;\n}\n\n.todo-box > .header {\n    text-align: center;\n    color: rgb(100,100,100);\n    margin-bottom: 20px;\n}\n\n.todo-box > ul {\n    background-color: white;\n    color: black;\n    /* padding: 10px; */\n}\n\n.todo-box > button {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    /* background-color: green; */\n    padding: 5px;\n}\nul > li {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    margin: 5px;\n}\n\n\n.todo-card {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    color: black;\n    font-size: 24px;\n    border-bottom: 1px solid black;\n    padding: 5px;\n}\n\n.todo-details {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.todo-details > p {\n    font-size: 18px;\n    margin-right:100px;\n}\n\n\n.finished {\n    text-decoration: line-through;\n    color: green;\n}\n\n.remove-btn {\n    background-color: rgb(170, 66, 66);\n    color: white;\n    font-size: 14px;\n}\n\n.todo-card > p {\n    margin-right: 10px;\n}\n.todo-card:hover {\n    background-color: rgb(150,150,150);\n}\n\n.calendar-container{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    /* width: 100%; */\n}\n\n.calendar {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 770px;\n    padding-top: 30px;\n    margin: auto;\n}\n\n.cal-header-container {\n    display: flex;\n    justify-content: center;\n    background-color:rgb(75, 75, 75);\n}\n\n.cal-header{\n    text-align: center;\n    background-color: rgb(90, 90, 90);\n    margin: 1px;\n    padding: 10px;\n    width: 100px;\n}\n\n\n.month-header-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    position: relative;\n}\n\n.month-header {\n    color: black;\n    text-align: center;\n    font-size: 48px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.month-nav {\n    background-color: rgb(150,150,150);\n    border-radius: 5px;\n    color: black;\n    width: 50px;\n    height: 25px;\n    position: relative;\n    top: 38px;\n}\n\n.calendar-day {\n    margin: 1px;\n    width: 100px;\n    height: 100px;\n    background-color: rgb(150,150,150);\n    padding: 2px;\n    /* border: 1px solid black; */\n}\n\n\n/* Modals */\n\n.modal {\n    background-color: rgba(0,0,0, 0.7);\n    top: 100px;\n    /* width: calc(100% - var(--sidebar-width)); */\n    width: 80%;\n    height: var(--page-height);\n    display: none;\n    position: absolute;\n}\n\n.modal-header {\n    font-size: 28px;\n}\n\n.checkbox {\n    display: flex;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    position: relative;\n    background-color:rgb(200,200,200);\n    color: black;\n    width: 400px;\n    height: 200px;\n    text-align: center;\n    padding: 20px;\n    margin: auto;\n    margin-top: 200px;\n}\n\n.modal-form > p {\n    font-size: 24px;\n}\n\n.modal-form > .btn {\n    width: 50%;\n    margin: auto;\n    margin-top: 10px;\n}\n\n.modal-form > .btn:hover {\n    background-color: rgb(150,150,150);\n}\n\n.modal-form > [type~='text'] {\n    height: 2rem;\n}\n\n.modal-form > textarea {\n\n    height: 75px;\n}\n\n.modal-form-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-bottom: 5px;\n    font-size: 30px;\n    width: 75px;\n    height: 75px;\n    text-align: center;\n    border-radius: 40px;\n    background-color: rgb(135,135,135);\n    /* position: relative; */\n    position: absolute;\n    /* left: 0px; */\n    right: 50px;\n    align-items: right;\n    box-shadow: 2px 2px rgb(50,50,50);\n}\n\n.modal-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n\n.todo-form {\n    display: flex;\n    flex-direction:column;\n    width: 50%;\n    padding: 25px;\n    background-color: rgb(135,135,135);\n    margin: auto;\n    margin-top: 100px;\n}\n\n.todo-form > p {\n    text-align: center;\n    font-size: 24px;\n    color:rgb(40,40,40);\n    margin-bottom: 5px;\n}\n\n.todo-form > textarea {\n    height: 100px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 24px;\n}\n\n.todo-form > select{\n    height: 36px;\n    font-size: 24px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.todo-form > button {\n    width: 50%;\n    margin: auto;\n}\n\n.todo-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n.form-input {\n    margin: 5px;\n}\n\n.todo-form > input {\n    font-size: 24px;\n}\n\n.add-todo-btn {\n    /*  */\n    /* position: absolute; */\n    width: 20%;\n    background-color: rgb(135,135,135);\n    \n}\n.add-todo-btn:hover {\n    background-color: rgb(100,100,100);\n}\n\n.add-todo-btn:active {\n    background-color: rgb(75,75,75);\n}\n\n.close-btn {\n    /* background-color:rgb(230,230,230);\n    box-shadow: 1px 1px;\n    width: 20px;\n    height: 20px;\n    margin-right: 0px; */\n    /* position: absolute; */\n    /* right: 10px; */\n    /* top: 10px; */\n}\n\n.close-btn:hover {\n    background-color: rgb(150,150,150);\n}\n/* Calendar Modal */\n.padding {\n    background-color: rgb(200,200,200);\n}\n\n\n\n@media (max-width: 500px) {\n    \n    #sidebar {\n        display: flex;\n        flex-direction: row;\n        width: 100vw;\n        height: 15%;\n    }\n\n    .header, .nav-header {\n        font-size: 36px;\n        display:none;\n    }\n\n\n}\n\n\n.test-box {\n    width: 1500px;\n    height: 1500px;\n    background-color: green;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxPQUFPLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksU0FBUyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFFBQVEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLDZCQUE2Qiw2QkFBNkIs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QUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb2NsYXNzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc29sZS5sb2coXCJMb2FkaW5nIG1vbnRobHkgdG9kbyBjYWxlbmRhci4uLi5cIilcblxuXG5sZXQgd2Vla2RheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbmxldCBtb250aHMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXVxubGV0IGR0ID0gbmV3IERhdGUoKVxubGV0IGN1cnJlbnQgPSAwO1xubGV0IG1vbnRoVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdtb250aGx5JykgLy8gQ29udGFpbmVyIGZvciB0aGUgY2FsZW5kYXIsIHdoZW4gYSBtb250aCBpcyBjaGFuZ2VkLCB0aGlzIGdldHMgcmVzZXQgYW5kIHJlcGxhY2VkIHdpdGggY3VycmVudGx5IHNlbGVjdGVkIG1vbnRoXG5cbmZ1bmN0aW9uIGxvYWRDYWxlbmRhcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIk1PTlRIICsgQ1VSUkVOVFwiLCBkdC5nZXRNb250aCgpLCBjdXJyZW50KVxuICAgIC8vIGxldCBkYXRlID0gZHQuZ2V0RGF0ZSgpO1xuICAgIC8vIGxldCBkYXkgPSBkdC5nZXREYXkoKVxuICAgIGxldCB5ZWFyID0gZHQuZ2V0RnVsbFllYXIoKVxuICAgIGxldCBtb250aCA9IGR0LmdldE1vbnRoKCkgKyBjdXJyZW50O1xuXG4gICAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTtcbiAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSlcbiAgICBjb25zdCBsYXN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMClcblxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBmaXJzdERheU9mTW9udGgudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi11cycsIHtcbiAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICB5ZWFyOidudW1lcmljJyxcbiAgICAgICAgbW9udGg6J251bWVyaWMnLFxuICAgICAgICBkYXk6J251bWVyaWMnLFxuICAgIH0pXG5cbiAgICBjb25zdCBsYXN0RGF0ZVN0cmluZyA9IGxhc3REYXlPZk1vbnRoLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tdXMnLCB7XG4gICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICB9KVxuXG4gICAgY29uc3QgcGFkZGluZ0RheXMgPSB3ZWVrZGF5cy5pbmRleE9mKGRhdGVTdHJpbmcuc3BsaXQoJywgJylbMF0pO1xuICAgIGNvbnN0IG5leHRQYWRkaW5nRGF5cyA9IHdlZWtkYXlzLmxlbmd0aCAtIHdlZWtkYXlzLmluZGV4T2YobGFzdERhdGVTdHJpbmcuc3BsaXQoJywgJylbMF0pO1xuXG4gICAgLy8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBzZXQgYXR0cmlidXRlc1xuICAgIGNvbnN0IG1vbnRobHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vbnRobHlEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1ib3gnKVxuICAgIG1vbnRobHlEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtb250aGx5RGl2LnNldEF0dHJpYnV0ZSgnbmFtZScsICdtb250aGx5JylcblxuICAgIGNvbnN0IGNhbGVuZGFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtb250aEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGNhbGVuZGFySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhcicpXG4gICAgY2FsZW5kYXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FsLWhlYWRlci1jb250YWluZXInKTtcbiAgICBtb250aEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb250aC1oZWFkZXInKTtcbiAgICBtb250aEhlYWRlci5pbm5lclRleHQgPSBtb250aHNbbW9udGhdO1xuXG4gICAgLy8gY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQobW9udGhIZWFkZXIpO1xuICAgIGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE1vbnRoSGVhZGVyKG1vbnRoKSk7XG4gICAgY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuXG4gICAgLy8gQWRkIHdlZWtkYXkgaGVhZGVyc1xuICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGFkZFdlZWtkYXlIZWFkZXIoKSlcblxuICAgIC8vIEFkZCBkYXkgc3F1YXJlcyB0byBjYWxlbmRhclxuICAgIGFkZERheVNxdWFyZXMoY2FsZW5kYXIsIHBhZGRpbmdEYXlzLCBkYXlzSW5Nb250aCwgbmV4dFBhZGRpbmdEYXlzKVxuXG4gICAgbW9udGhseURpdi5hcHBlbmRDaGlsZChjYWxlbmRhckNvbnRhaW5lcilcbiAgICAvLyByZXR1cm4gbW9udGhseURpdlxuICAgIC8vIGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZChhZGRNb2RhbCgnbW9udGhseScpKVxuICAgIHJldHVybiBjYWxlbmRhckNvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBhZGRNb250aEhlYWRlcihtb250aCkge1xuICAgIC8vIEFkZCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBtb250aCBhdCB0aGUgdG9wIG9mIHRoZSBjYWxlbmRhciwgYXMgd2VsbCBhcyB0aGUgYWJpbGl0eSB0byBzd2l0Y2ggbW9udGhzXG5cbiAgICAvLyAnQ3VycmVudCcgZGVmYXVsdHMgdG8gdGhlIGdpdmVuIG1vbnRoIHBhcmFtZXRlciAoY3VycmVudCBtb250aCksIGFkZGluZy9zdWJ0cmFjdGluZyBmb3JtIGN1cnJlbnQgd2lsbCBzd2l0Y2ggbW9udGhzXG4gICAgLy8gbGV0IGN1cnJlbnQgPSAwO1xuICAgIGNvbnN0IG1vbnRoSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9udGhIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9udGgtaGVhZGVyLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbW9udGhUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1vbnRoVGl0bGUuY2xhc3NMaXN0LmFkZCgnbW9udGgtaGVhZGVyJyk7XG4gICAgbW9udGhUaXRsZS5pbm5lclRleHQgPSBtb250aHNbbW9udGhdO1xuICAgIGNvbnN0IHByZXZpb3VzTW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBuZXh0TW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGFkZE1vbnRoTmF2aWdhdGlvbihwcmV2aW91c01vbnRoLCAncHJldmlvdXMnKTtcbiAgICBhZGRNb250aE5hdmlnYXRpb24obmV4dE1vbnRoLCAnbmV4dCcpO1xuXG4gICAgcHJldmlvdXNNb250aC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBwcmV2aW91c01vbnRoLmNsYXNzTGlzdC5hZGQoJ21vbnRoLW5hdicpXG4gICAgbmV4dE1vbnRoLmNsYXNzTGlzdC5hZGQoJ21vbnRoLW5hdicpO1xuICAgIG5leHRNb250aC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuXG4gICAgcHJldmlvdXNNb250aC5pbm5lclRleHQgPSAnPCdcbiAgICBuZXh0TW9udGguaW5uZXJUZXh0ID0gJz4nXG5cbiAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChwcmV2aW91c01vbnRoKTtcbiAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChtb250aFRpdGxlKTtcbiAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChuZXh0TW9udGgpO1xuXG4gICAgcmV0dXJuIG1vbnRoSGVhZGVyO1xufVxuXG5mdW5jdGlvbiBhZGRXZWVrZGF5SGVhZGVyKCkge1xuICAgIC8vIEFkZCB3ZWVrZGF5IGhlYWRlcnMgdG8gdGhlIGNhbGVuZGFyKCdNb25kYXknLCAnVHVlc2RheScsICdldGMpXG4gICAgY29uc3Qgd2Vla2RheUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWtkYXlIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FsLWhlYWRlci1jb250YWluZXInKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlZWtkYXlzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgY29uc3QgZGF5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRheUhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYWwtaGVhZGVyJyk7XG4gICAgICAgIGRheUhlYWRlci5pbm5lclRleHQgPSB3ZWVrZGF5c1tpXTtcbiAgICAgICAgd2Vla2RheUhlYWRlci5hcHBlbmRDaGlsZChkYXlIZWFkZXIpXG4gICAgfVxuICAgIHJldHVybiB3ZWVrZGF5SGVhZGVyO1xufVxuXG5mdW5jdGlvbiBhZGRNb250aE5hdmlnYXRpb24oYnV0dG9uLCBkaXJlY3Rpb24pIHtcbiAgICAvLyBBZGQgY2xpY2sgbGlzdGVuZXJzIHRvIHByZXZpb3VzL25leHQgbW9udGggQnV0dG9ucyB0byBzd2l0Y2ggbW9udGhzIGluIHRoZSBjYWxlbmRhclxuICAgIGxldCBtb250aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdtb250aGx5JylcbiAgICBsZXQgbW9udGhDYWxlbmRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbGVuZGFyJylcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIE5hdiBtb3ZlcyBsZWZ0IG9yIHJpZ2h0XG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgICAgY3VycmVudCAtPSAxXG4gICAgICAgICAgICBjdXJyZW50ID0gY2hlY2tDdXJyZW50KGN1cnJlbnQpO1xuICAgICAgICAgICAgbW9udGhUb2RvWzBdLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgbW9udGhUb2RvWzBdLmFwcGVuZENoaWxkKGxvYWRDYWxlbmRhcigpKVxuICAgICAgICB9IGVsc2UgaWYoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgKz0gMVxuICAgICAgICAgICAgY3VycmVudCA9IGNoZWNrQ3VycmVudChjdXJyZW50KVxuICAgICAgICAgICAgbW9udGhUb2RvWzBdLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgbW9udGhUb2RvWzBdLmFwcGVuZENoaWxkKGxvYWRDYWxlbmRhcigpKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tDdXJyZW50KGN1cnJlbnQpIHtcbiAgICAvLyBSZXNldHMgJ2N1cnJlbnQnIHRvIDAgaWYgZ3JlYXRlciB0aGFuIDEyLCBzaW5jZSBudW1iZXJzIGhpZ2hlciB0aGFuIHRoYXQgYXJlIG91dCBvZiBpbmRleCBmb3IgbW9udGhzXG4gICAgaWYoY3VycmVudCArIGR0LmdldE1vbnRoKCkgPiAxMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgY3VycmVudFwiLCBjdXJyZW50ICsgZHQuZ2V0TW9udGgoKSlcbiAgICAgICAgcmV0dXJuIC1kdC5nZXRNb250aCgpXG4gICAgfSBlbHNlIGlmKGR0LmdldE1vbnRoKCkgKyBjdXJyZW50IDwgMCkge1xuICAgICAgICAvLyBSb2xsIG92ZXIgc28gdGhhdCBpdCB3aWxsIHJldHVybiBpbmRleCAxMiBmb3IgRGVjZW1iZXIsIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIDEyIGFuZCBkdC5nZXRNb250aCgpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJldmlvdXMgeWVhclwiKVxuICAgICAgICByZXR1cm4gMTEgLSBkdC5nZXRNb250aCgpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiVmFsaWQgY3VycmVudFwiLCBjdXJyZW50KVxuICAgIHJldHVybiBjdXJyZW50XG5cbn1cblxuXG5mdW5jdGlvbiBhZGREYXlTcXVhcmVzKGNhbGVuZGFyLCBwYWRkaW5nRGF5cywgZGF5c0luTW9udGgsIG5leHRQYWRkaW5nRGF5cykge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwYWRkaW5nRGF5cyArIGRheXNJbk1vbnRoICsgbmV4dFBhZGRpbmdEYXlzIC0gMTsgaSsrKSB7XG4gICAgICAgIGxldCBjYWxlbmRhckRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYWxlbmRhckRheS5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhci1kYXknKTtcblxuICAgICAgICBpZiAoaSA8IHBhZGRpbmdEYXlzIHx8IGkgPj0gcGFkZGluZ0RheXMgKyBkYXlzSW5Nb250aCkge1xuICAgICAgICAgICAgY2FsZW5kYXJEYXkuY2xhc3NMaXN0LmFkZCgncGFkZGluZycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxlbmRhckRheS5pbm5lclRleHQgPSAoaSAtIHBhZGRpbmdEYXlzKSArIDFcbiAgICAgICAgICAgIGNhbGVuZGFyRGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5Nb2RhbChjYWxlbmRhckRheSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXJEYXkpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBhZGRNb2RhbCh0b2RvVHlwZSkge1xuICAgIC8vIEFkZCBhIG1vZGFsIHRvIHRoZSBjYWxlbmRhciBmb3IgYWRkaW5nIG5ldyBUb2RvcywgcG90ZW50aWFsbHkgbm90IHVuaXF1ZSB0byBjYWxlbmRhciwgc28gbWF5YmUgbW92ZSB0byBhbm90aGVyIGZpbGUgYW5kIGV4cG9ydFxuICAgIC8vIDQgdHlwZXMgb2YgdG9kb3M6IFRvZGF5KFVuaXF1ZSksIERhaWx5LCBXZWVrbHksIE1vbnRobHksIGFkanVzdCB0aGUgZm9ybSBhY2NvcmRpbmdseVxuICAgIFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8nKTtcblxuXG5cbiAgICAvLyBDcmVhdGUgYSBmb3JtIGZvciBhZGRpbmcgbmV3IFRvZG9zLCBhbmQgYWRkIGl0IHRvIHRoZSB0b2RvIGZvcm0gZGl2XG4gICAgaWYodG9kb1R5cGUgPT09ICdkYWlseScpIHtcbiAgICAgICAgcGFzc1xuICAgIH0gZWxzZSBpZih0b2RvVHlwZSA9PT0gJ3RvZGF5Jykge1xuICAgICAgICBwYXNzXG4gICAgfSBlbHNlIGlmKHRvZG9UeXBlID09PSAnd2Vla2x5Jykge1xuICAgICAgICBwYXNzXG4gICAgfSBlbHNlIGlmKHRvZG9UeXBlID09PSAnbW9udGhseScpIHtcbiAgICAgICAgLy8gSGVyZSdzIHdoZXJlIEkgYWRkIHN0dWZmIGZvciBub3dcblxuICAgICAgICBjb25zdCBtb250aERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIG1vbnRoRGF0ZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgbW9udGhEYXRlLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhlYWRlcicpXG4gICAgICAgIC8vIG1vbnRoRGF0ZS5pbm5lclRleHQgPSBtb250aHNbZHQuZ2V0TW9udGgoKV1cbiAgICAgICAgdG9kby50eXBlID0gJ3RleHQnO1xuICAgICAgICB0b2RvLnBsYWNlaG9sZGVyID0gJ0FkZCB0b2RvJ1xuICAgICAgICB0b2RvRGVzYy5wbGFjZWhvbGRlciA9ICdBZGQgYSBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBoZXJlJ1xuICAgICAgICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICBzdWJtaXRCdG4udmFsdWUgPSAnQWRkIFRvZG8nXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcbiAgICAgICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobW9udGhEYXRlKVxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvKVxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzYylcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgfVxuXG4gICAgLy8gdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kbylcbiAgICAvLyB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgIHJldHVybiBtb2RhbFxufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgLy8gQnkgY2xpY2tpbmcgYSBjbG9zZSBidXR0b24gY2xvc2UgYW55IG9wZW4gbW9kYWxcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoZGF5KSB7XG4gICAgLy8gQWRkIGFuIGV2ZW50IGxzaXRlbmVyIHRvIG9wZW4gdXAgdGhlIGFkZCB0b2RvIG1vZGFsXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwnKTtcbiAgICBsZXQgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbC1oZWFkZXInKVswXTtcbiAgICBsZXQgbW9udGhEYXRlID0gbW9udGhzW2R0LmdldE1vbnRoKCkgKyBjdXJyZW50XSArIFwiIFwiICsgZGF5LmlubmVyVGV4dFxuXG4gICAgbW9kYWxIZWFkZXIuaW5uZXJUZXh0ID0gJydcbiAgICBtb2RhbEhlYWRlci5pbm5lclRleHQgPSBtb250aHNbZHQuZ2V0TW9udGgoKSArIGN1cnJlbnRdICsgXCIgXCIgKyBkYXkuaW5uZXJUZXh0XG4gICAgbW9kYWxbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIHByaW50RGF0ZUluZm8oZGF0ZSkge1xuXG4gICAgY29uc29sZS5sb2coXCJEYXRlOiBcIiwgZGF0ZS5nZXREYXRlKCkpXG4gICAgY29uc29sZS5sb2coXCJEYXk6IFwiLCB3ZWVrZGF5c1tkYXRlLmdldERheSgpXSlcbiAgICBjb25zb2xlLmxvZyhcIlllYXI6IFwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgY29uc29sZS5sb2coXCJNb250aDogXCIsIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldKVxuXG4gICAgbGV0IGRhdGVQYXJhbXMgPSB7XG4gICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJGb3JtYXRlZCBkYXRlIHN0cmluZ1wiLCBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBkYXRlUGFyYW1zKSlcblxuICAgIC8vIENhbiBnZXQgZGF5cyBpbiBtb250aCBieSBnZXR0aW5nIHRoZSBkYXRlIG9mIHRoZSBsYXN0IGRheSBpbiBhIG1vbnRoLlxuICAgIGxldCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpXG4gICAgbGV0IGZpcnN0RGF5ID0gbmV3IERhdGUoZGF0ZS5nZXRZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSkuZ2V0RGF5KClcbiAgICBjb25zb2xlLmxvZyhcIkRheXMgaW4gbW9udGg6IFwiLCBkYXlzSW5Nb250aCwgZmlyc3REYXkpXG5cblxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbn0pXG5cblxuLy8gcHJpbnREYXRlSW5mbyhkdClcbmV4cG9ydCB7IGxvYWRDYWxlbmRhciB9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBpbXBvcnQgeyB0ZXN0SlNPTiB9IGZyb20gJy4vdGVzdHMuanMnO1xuaW1wb3J0IHsgVG9kbywgd2Vla2x5VG9kbywgbW9udGhseVRvZG8sIFByb2plY3QgfSBmcm9tICcuL3RvZG9jbGFzcy5qcyc7XG5pbXBvcnQgeyB0ZXN0LCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBhZGRUb2RvLCByZW1vdmVUb2RvLCBhZGRNb2RhbCwgb3Blbk1vZGFsLCBjbG9zZU1vZGFsLCBjaGVja0ZpbmlzaGVkIH0gZnJvbSAnLi90b2Rvcy5qcyc7XG5pbXBvcnQgeyBsb2FkQ2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyLmpzJztcblxuXG5cbmNvbnNvbGUubG9nKFwiU2NyaXB0cyBsb2FkaW5nLi4uLlwiKVxuY29uc3Qgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcbi8vIGNvbnN0IGdlbmVyYWxUb2RvcyA9IG5ldyBQcm9qZWN0KCdnZW5lcmFsJyk7XG4vLyBzdG9yYWdlLnNldEl0ZW0oJ2dlbmVyYWwnLCBKU09OLnN0cmluZ2lmeShnZW5lcmFsVG9kb3MpKVxuLy8gc3RvcmFnZS5jbGVhcigpXG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxuXG5mdW5jdGlvbiBsb2FkUGFnZShwcm9qZWN0TmFtZSwgdG9kb1R5cGUpIHtcbiAgICAvLyBNYWluIGZ1bmN0aW9uIGZvciBhZGRpbmcgZWxlbWVudHMgdG8gdGhlIERPTVxuXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAvLyBpbml0aWFsaXplIHN0b3JhZ2UgaWYgbm9uZVxuICAgIGlmKHN0b3JhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxldCBnZW5lcmFsVG9kb3MgPSBuZXcgUHJvamVjdCgnZ2VuZXJhbCcpO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oJ2dlbmVyYWwnLCBKU09OLnN0cmluZ2lmeShnZW5lcmFsVG9kb3MpKVxuICAgICAgICAvLyBzdG9yYWdlLmNsZWFyKClcbiAgICB9XG5cbiAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIC8vIENvbnRlbnQgZGl2IGlzIGFsbCBlbGVtZW50cyBvZiB0aGUgdGhlIGJvZHkgYWZ0ZXIgdGhlIGJhbm5lclxuICAgIGxldCBib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gQWRkZWQgQm94IGNvbnRhaW5lciBoZXJlIGluc3RlYWQgb2YgaW4gYWRkIGNvbnRhaW5lclxuICAgIGJveENvbnRhaW5lci5pZCA9ICdib3gtY29udGFpbmVyJztcbiAgICBjb250ZW50RGl2LmlkID0gJ2NvbnRlbnQnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRCYW5uZXIocHJvamVjdE5hbWUpKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdilcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFkZFNpZGViYXIoKSlcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGJveENvbnRhaW5lcik7XG5cbiAgICBhZGRUb2RvQ29udGFpbmVyKHByb2plY3ROYW1lLCB0b2RvVHlwZSk7XG4gICAgYWRkTGlzdGVuZXJzKHByb2plY3ROYW1lKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRCYW5uZXIocHJvamVjdE5hbWUpIHtcbiAgICAvLyBBZGQgYSBoZWFkZXIgYmFubmVyIGZvciB0aGUgd2VicGFnZVxuICAgIGxldCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBiYW5uZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBiYW5uZXIuaWQgPSAnYmFubmVyJztcbiAgICBiYW5uZXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcblxuICAgIGJhbm5lckhlYWRlci5pbm5lclRleHQgPSBgVXNlcidzIFRvZG8gTGlzdCBmb3IgJHtwcm9qZWN0TmFtZX1gO1xuXG4gICAgYmFubmVyLmFwcGVuZENoaWxkKGJhbm5lckhlYWRlcik7XG5cbiAgICByZXR1cm4gYmFubmVyXG59XG5cblxuZnVuY3Rpb24gYWRkU2lkZWJhcigpIHtcbiAgICAvLyBBZGQgdGhlIHNpZGViYXIgdG8gdGhlIERPTVxuICAgIGNvbnNvbGUubG9nKFwic3RvcmFnZSBpbiBhZGRTaWRlYmFyKClcIiwgc3RvcmFnZSlcbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGJveGVzID0gWydUb2RheScsICdEYWlseScsICdXZWVrbHknLCAnTW9udGhseSddXG4gICAgbGV0IGxpbmVicmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgbGV0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cblxuICAgIHNpZGViYXIuaWQgPSAnc2lkZWJhcic7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGxpbmVicmVhay5jbGFzc0xpc3QuYWRkKCdsaW5lYnJlYWsnKTtcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIHByb2plY3RIZWFkZXIuaW5uZXJUZXh0ID0gJ1Byb2plY3RzJztcbiAgICBhZGRQcm9qZWN0QnRuLmlubmVyVGV4dCA9ICcrIFByb2plY3QnO1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZE5ld1Byb2plY3QoKVxuICAgIH0pXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG5hdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBuYXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYm94LWl0ZW0nKTtcbiAgICAgICAgbmF2SGVhZGVyLmlubmVyVGV4dCA9IGJveGVzW2ldO1xuXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmF2SGVhZGVyKVxuICAgIH1cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpbmVicmVhayk7XG4gICAgLy8gc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG4gICAgbGV0IHByb2plY3RzID0gT2JqZWN0LmtleXMoc3RvcmFnZSk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIC8vIEFkZCBhbiBvcHRpb250IHRvIGxvYWQgcHJvamVjdCBpbnRvIG1haW4gd2luZG93XG4gICAgICAgIC8vIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIGxldCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIC8vIGxldCByZW1vdmVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgLy8gcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNlbGVjdCcpO1xuICAgICAgICAvLyBwcm9qZWN0U2VsZWN0LmlubmVyVGV4dCA9IHByb2plY3RzW2ldO1xuICAgICAgICAvLyBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICAvLyBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpO1xuICAgICAgICAvLyByZW1vdmVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICAvLyByZW1vdmVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1wcm9qZWN0LWJ0bicpO1xuICAgICAgICAvLyByZW1vdmVQcm9qZWN0LmlubmVyVGV4dCA9ICdYJztcblxuICAgICAgICAvLyBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICAgICAgICAvLyBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3QpO1xuICAgICAgICAvLyBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuXG4gICAgICAgIC8vIHByb2plY3RTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBsb2FkUGFnZShwcm9qZWN0c1tpXSwgJ3RvZGF5Jyk7XG4gICAgICAgIC8vIH0pXG4gICAgICAgIHNpZGViYXIuYXBwZW5kKGFkZFByb2plY3RzVG9TaWRlYmFyKHByb2plY3RzW2ldKSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdHNUb1NpZGViYXIocHJvamVjdCkge1xuICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNlbGVjdCcpO1xuICAgIHByb2plY3RTZWxlY3QuaW5uZXJUZXh0ID0gcHJvamVjdDtcbiAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJyk7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICByZW1vdmVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1wcm9qZWN0LWJ0bicpO1xuICAgIHJlbW92ZVByb2plY3RCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdG4pO1xuICAgIC8vIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG5cbiAgICBwcm9qZWN0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsb2FkUGFnZShwcm9qZWN0LCAndG9kYXknKTtcbiAgICB9KVxuXG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KVxuICAgIHJldHVybiBwcm9qZWN0RGl2XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Db250YWluZXIocHJvamVjdE5hbWUsIHRvZG9UeXBlKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICAvLyBjb25zdCBib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gQWRkZWQgYm94Q29udGFpbmVyIHRvIGxvYWRQYWdlKCkgaW5zdGVhZCBvZiBjcmVhdGluZyBpdCBoZXJlXG4gICAgLy8gYm94Q29udGFpbmVyLmlkID0gJ2JveC1jb250YWluZXInO1xuICAgIGNvbnN0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3gtY29udGFpbmVyJyk7XG4gICAgYm94Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgbGV0IGJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBib3hEaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhZGRCdG4gPSBhZGRUb2RvQnRuKHByb2plY3ROYW1lKTtcblxuICAgIGJveERpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBib3hEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1ib3gnKVxuICAgIGJveERpdi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0b2RvVHlwZSk7XG4gICAgYWRkQnRuLmlubmVyVGV4dCA9ICdBZGQgVG9kbyc7XG4gICAgY29uc29sZS5sb2coXCJCT1ggSEVBREVSXCIsIGJveERpdkhlYWRlciwgdG9kb1R5cGUpXG4gICAgYm94RGl2SGVhZGVyLmlubmVyVGV4dCA9IHRvZG9UeXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0b2RvVHlwZS5zbGljZSgxKSArICcgVG9kb3MnO1xuICAgIGJveERpdi5hcHBlbmRDaGlsZChib3hEaXZIZWFkZXIpO1xuICAgIGJveERpdi5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgaWYodG9kb1R5cGUgPT09ICdtb250aGx5Jykge1xuICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQobG9hZENhbGVuZGFyKCkpO1xuICAgICAgICBib3hEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGJveERpdik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRvZG9zID0gbG9hZFRvZG9zKHRvZG9UeXBlLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIGJveERpdi5hcHBlbmRDaGlsZChhZGRUb2Rvcyh0b2RvcywgcHJvamVjdE5hbWUpKVxuICAgICAgICBib3hEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG5cbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYm94RGl2KTtcbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTW9kYWwoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib3hDb250YWluZXIpO1xufVxuXG5cbmZ1bmN0aW9uIGFkZFRvZG9Db250YWluZXJ4KHByb2plY3ROYW1lKSB7XG4gICAgLy8gQWRkIGNvbnRhaW5lcnMgZm9yIGVhY2ggdG9kbyBjYXRlZ29yeSB0byBiZSBkaXNwbGF5ZWQgaW4gJ21haWxib3gnIHN0eWxlXG4gICAgLy8gTG9hZCAnZ2VuZXJhbCcgYnkgZGVmYXVsdFxuICAgIGNvbnN0IHRvZG9Cb3hlcyA9IFsndG9kYXknLCAnZGFpbHknLCAnd2Vla2x5JywgJ21vbnRobHknXTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgcGFyc2VUb2RvcyA9IEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pXG5cbiAgICBib3hDb250YWluZXIuaWQgPSAnYm94LWNvbnRhaW5lcic7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9Cb3hlcy5sZW5ndGg7aSsrKSB7XG5cbiAgICAgICAgbGV0IGJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgYm94RGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBhZGRCdG4gPSBhZGRUb2RvQnRuKHByb2plY3ROYW1lKTtcblxuICAgICAgICBib3hEaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWJveCcpO1xuICAgICAgICBib3hEaXYuc2V0QXR0cmlidXRlKCduYW1lJywgdG9kb0JveGVzW2ldKVxuICAgICAgICBhZGRCdG4uaW5uZXJUZXh0ID0gJ0FkZCBUb2RvJztcblxuXG4gICAgICAgIGJveERpdkhlYWRlci5pbm5lclRleHQgPSB0b2RvQm94ZXNbaV1bMF0udG9VcHBlckNhc2UoKSArIHRvZG9Cb3hlc1tpXS5zbGljZSgxKSArICcgVG9kb3MnO1xuICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYm94RGl2SGVhZGVyKTtcbiAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICAgICAgaWYodG9kb0JveGVzW2ldID09PSAnbW9udGhseScpIHtcbiAgICAgICAgICAgIC8vIENhbGVuZGFyIGZ1bmN0aW9ucyBpbiBhIGRpZmZlcmVudCB3YXksIHNvIGFkZCBsYXRlclxuICAgICAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGxvYWRDYWxlbmRhcigpKTtcbiAgICAgICAgICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChib3hEaXYpXG4gICAgICAgIH1cbiAgICAgICAgaWYodG9kb0JveGVzW2ldID09PSAnZGFpbHknKSB7XG4gICAgICAgICAgICBsZXQgZGFpbHlUb2RvcyA9IGxvYWRUb2RvcygnZGFpbHknLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYWRkVG9kb3MoZGFpbHlUb2RvcywgcHJvamVjdE5hbWUpKVxuICAgICAgICAgICAgYm94RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gXG4gICAgICAgIGlmKHRvZG9Cb3hlc1tpXSA9PT0gJ3dlZWtseScpIHtcbiAgICAgICAgICAgIGxldCB3ZWVrbHlUb2RvcyA9IGxvYWRUb2Rvcygnd2Vla2x5JywgcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGFkZFRvZG9zKHdlZWtseVRvZG9zLCBwcm9qZWN0TmFtZSkpXG4gICAgICAgICAgICBib3hEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9XG4gICAgICAgIGlmKHRvZG9Cb3hlc1tpXSA9PT0gJ3RvZGF5JykgeyAvLyBUaGlzIGp1c3Qgc2V0cyB0b2RheSB0byBkaXNwbGF5IGJ5IGRlZmF1bHQsIGV2ZXJ5dGhpbmcgZWxzZSBpcyBzZXQgdG8gJ25vbmUnXG4gICAgICAgICAgICBsZXQgdG9kYXlUb2RvcyA9IGxvYWRUb2RvcygndG9kYXknLCBwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIGJveERpdi5hcHBlbmRDaGlsZChhZGRUb2Rvcyh0b2RheVRvZG9zLCBwcm9qZWN0TmFtZSkpXG4gICAgICAgICAgICBib3hEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChib3hEaXYpO1xuICAgIH1cbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTW9kYWwoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJveENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9zKHRvZG9zLCBwcm9qZWN0TmFtZSkge1xuICAgIC8vIFBhcnNlIHRvZG9zIGFuZCBhZGQgdG8gY29udGFpbmVyLCB0b2RvcyBpcyBhbiBhcnJheSBvZiB0b2Rvc1xuXG4gICAgaWYodG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IG5vVG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBub1RvZG9zLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gICAgICAgIG5vVG9kb3MuaW5uZXJUZXh0ID0gJ1lvdSBoYXZlIG5vIFRvZG9zISdcbiAgICAgICAgcmV0dXJuIG5vVG9kb3NcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBMb2FkIGFuZCBhZGQgdGhlIHRvZG9zIFxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVE9ET1NcIiwgdG9kb3NbaV0pXG4gICAgICAgICAgICBsZXQgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgLy8gbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgbGV0IHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgdG9kb0Jvb2wgPSB0b2Rvc1tpXS5maW5pc2hlZFxuICAgICAgICAgICAgbGV0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBpZih0b2RvQm9vbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgdG9kb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKVxuICAgICAgICAgICAgfSBlbHNlIGlmKHRvZG9Cb29sID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbmlzaGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZG9OYW1lLmlubmVyVGV4dCA9IHRvZG9zW2ldLnRpdGxlXG4gICAgICAgICAgICB0b2RvRGVzYy5pbm5lclRleHQgPSB0b2Rvc1tpXS5kZXNjO1xuICAgICAgICAgICAgcmVtb3ZlQnRuLmlubmVyVGV4dCA9ICdSZW1vdmUnO1xuICAgICAgICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1idG4nKTtcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGV0YWlscycpO1xuXG4gICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZW1vdmVUb2RvKHRvZG9zW2ldLCBwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvZG9EZXNjKVxuICAgICAgICAgICAgbmV3VG9kby5hcHBlbmRDaGlsZCh0b2RvRGV0YWlscyk7XG4gICAgICAgICAgICBuZXdUb2RvLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG5cbiAgICAgICAgICAgIG5ld1RvZG8uY2xhc3NMaXN0LmFkZCgndG9kby1jYXJkJyk7XG5cbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG5cbiAgICAgICAgICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZih0b2RvQm9vbCA9PT0gZmFsc2Upe1xuXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRmluaXNoZWQodG9kb3NbaV0sIHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgICAgICB0b2RvRGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRQYWdlKHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0b2RvQm9vbCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRmluaXNoZWQodG9kb3NbaV0sIHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgICAgICB0b2RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRQYWdlKHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kb0NvbnRhaW5lclxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBsb2FkVG9kb3ModG9kbywgcHJvamVjdE5hbWUpIHtcbiAgICAvLyBMb2FkIHRvZG9zIGJhc2VkIG9uIHByb2plY3QgbmFtZSwgb3IgYnkgYWxsIGFzIGRlZmF1bHRcblxuICAgIGNvbnN0IHByb2plY3RTdG9yYWdlID0gSlNPTi5wYXJzZShzdG9yYWdlW3Byb2plY3ROYW1lXSk7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0U3RvcmFnZS50b2Rvc1t0b2RvXS5sZW5ndGg7aSsrKSB7XG5cbiAgICAgICAgdG9kb0xpc3QucHVzaChwcm9qZWN0U3RvcmFnZS50b2Rvc1t0b2RvXVtpXSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJTkRFWCBPRlwiLCBwcm9qZWN0U3RvcmFnZS50b2Rvc1t0b2RvXS5pbmRleE9mKHByb2plY3RTdG9yYWdlLnRvZG9zW3RvZG9dW2ldKSlcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJsb2FkaW5nIHRvZG9zIGZ1bmN0aW9uXCIsIHRvZG9MaXN0KVxuXG4gICAgcmV0dXJuIHRvZG9MaXN0XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Gb3JtKHByb2plY3ROYW1lKSB7XG4gICAgLy8gQ3JlYXRlIGEgZm9ybSBhbmQgYWRkIHRvIG1vZGFsXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvcm0nKTtcblxuICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0b2RvVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBhZGRUb2RvQnRuKClcblxuICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICB0b2RvRGVzYy5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgdG9kb1R5cGUuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ0bicpO1xuXG4gICAgdG9kb0hlYWRlci5pbm5lclRleHQgPSAnQWRkIG5ldyBUb2RvJztcbiAgICB0b2RvTmFtZS5wbGFjZWhvbGRlciA9ICdFbnRlciBhIG5hbWUgZm9yIHlvdXIgdG9kbyc7XG4gICAgdG9kb0Rlc2MucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBicmllZiBkZXNjcmlwdGlvbiBvZiB5b3VyIHRvZG8nO1xuICAgIGNsb3NlQnRuLmlubmVyVGV4dCA9ICdYJztcbiAgICBzdWJtaXRCdG4udmFsdWUgPSAnQWRkIFRvZG8nXG5cbiAgICBjb25zdCB0b2RvVHlwZXMgPSBbJ3RvZGF5JywgJ2RhaWx5JywgJ3dlZWtseScsICdtb250aGx5J107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9UeXBlcy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdG9kb1R5cGVzW2ldXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB0b2RvVHlwZXNbaV1bMF0udG9VcHBlckNhc2UoKSArIHRvZG9UeXBlc1tpXS5zbGljZSgxKVxuICAgICAgICB0b2RvVHlwZS5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfVxuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlTW9kYWwoKVxuICAgIH0pXG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pLm51bVRvZG9zKVxuICAgICAgICBsZXQgdG9kb0lEID0gSlNPTi5wYXJzZShzdG9yYWdlW3Byb2plY3ROYW1lXSkubnVtVG9kb3M7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSUQ6IFwiLCB0b2RvSUQpXG4gICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8gKHRvZG9UeXBlLnZhbHVlLCB0b2RvTmFtZS52YWx1ZSwgdG9kb0Rlc2MudmFsdWUsdG9kb0lEKVxuICAgICAgICBhZGRUb2RvKHRvZG9UeXBlLnZhbHVlLCBuZXdUb2RvLCBwcm9qZWN0TmFtZSlcblxuICAgICAgICBjbG9zZU1vZGFsKClcbiAgICAgICAgbG9hZFBhZ2UocHJvamVjdE5hbWUsIHRvZG9UeXBlLnZhbHVlKTtcblxuICAgIH0pXG4gICAgXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9IZWFkZXIpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1R5cGUpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBcbiAgICByZXR1cm4gdG9kb0Zvcm1cbn1cblxuXG5mdW5jdGlvbiBhZGRUb2RvQnRuKHByb2plY3ROYW1lKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBidXR0b24gYW5kIGxpc3RlbmVyIGZvciBhZGRpbmcgdG9kb3NcbiAgICBjb25zdCB0b2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vIFVzZSBhIHNwYW4/XG4gICAgdG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1idG4nKTtcbiAgICB0b2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIC8vIHRvZG9CdG4uc2V0QXR0cmlidXRlKCduYW1lJywgdG9kb1R5cGUpXG5cbiAgICB0b2RvQnRuLmlubmVyVGV4dCA9ICdBZGQgVG9kbyc7XG4gICAgdG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJylcbiAgICAgICAgbW9kYWxbMF0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTU9EQUxcIiwgbW9kYWwpXG4gICAgICAgIGxldCB0b2RvRm9ybSA9IGFkZFRvZG9Gb3JtKHByb2plY3ROYW1lKTtcbiAgICAgICAgbW9kYWxbMF0uYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgICAgICBvcGVuTW9kYWwobW9kYWwpO1xuICAgIH0pXG4gICAgcmV0dXJuIHRvZG9CdG47XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4gICAgLy8gQWRkIHRoZSBmb3JtIGZvciBjcmVhdGluZyBhIG5ldyBwcm9qZWN0XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBib3hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm94LWNvbnRhaW5lcicpO1xuXG4gICAgLy8gbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKVxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cblxuICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWZvcm0nKTtcbiAgICBuZXdQcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ0bicpO1xuICAgIGNsb3NlQnRuLmlubmVyVGV4dCA9ICdYJ1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ0FkZCBQcm9qZWN0JztcblxuXG4gICAgbmV3UHJvamVjdEhlYWRlci5pbm5lclRleHQgPSAnQWRkIE5ldyBQcm9qZWN0JztcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEhlYWRlcik7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gICAgLy8gbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH0pXG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHByb2plY3QgbmFtZTogXCIsIHByb2plY3ROYW1lLnZhbHVlKVxuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKVxuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUFJKRUNUIE5BTUVcIiwgcHJvamVjdE5hbWUudmFsdWUpXG4gICAgICAgIGxvYWRQYWdlKHByb2plY3ROYW1lLnZhbHVlLCAndG9kYXknKTtcbiAgICB9KVxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG59XG5cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXJzKHByb2plY3ROYW1lKSB7XG4gICAgLy8gQWRkIGxpc3RlbmVycyB0byBET00gZWxlbWVudHNcbiAgICBsZXQgdG9kb09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gtaXRlbScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb09wdGlvbnMubGVuZ3RoO2krKykge1xuICAgICAgICB0b2RvT3B0aW9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBrZXl3b3JkID0gdG9kb09wdGlvbnNbaV0uaW5uZXJUZXh0WzBdLnRvTG93ZXJDYXNlKCkgKyB0b2RvT3B0aW9uc1tpXS5pbm5lclRleHQuc2xpY2UoMSk7XG4gICAgICAgICAgICBsZXQgdG9kb2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGtleXdvcmQpWzBdO1xuXG4gICAgICAgICAgICAvLyBsb2FkVG9kb0JveChrZXl3b3JkKTtcbiAgICAgICAgICAgIGFkZFRvZG9Db250YWluZXIocHJvamVjdE5hbWUsIGtleXdvcmQpO1xuXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGxvYWRUb2RvQm94KHRvZG8pIHtcbiAgICAvLyBEaXNwbGF5IGdpdmVuIHRvZG9ib3hcblxuICAgIGNvbnN0IHRvZGF5Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RvZGF5JylbMF07XG4gICAgY29uc3QgZGFpbHlCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnZGFpbHknKVswXTtcbiAgICBjb25zdCB3ZWVrbHlCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnd2Vla2x5JylbMF07XG4gICAgY29uc3QgbW9udGhseUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdtb250aGx5JylbMF07XG4gICAgaWYodG9kbyA9PT0gJ3RvZGF5Jykge1xuICAgICAgICB0b2RheUJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBkYWlseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB3ZWVrbHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbW9udGhseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZih0b2RvID09PSAnZGFpbHknKSB7XG4gICAgICAgIHRvZGF5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRhaWx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHdlZWtseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBtb250aGx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIGlmKHRvZG8gPT09ICd3ZWVrbHknKSB7XG4gICAgICAgIHRvZGF5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRhaWx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHdlZWtseUJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBtb250aGx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIGlmICh0b2RvID09PSAnbW9udGhseScpIHtcbiAgICAgICAgdG9kYXlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZGFpbHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgd2Vla2x5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG1vbnRobHlCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gYXNrTmFtZSgpIHtcbiAgICAvL3Bhc3Ncbn1cbi8vIEJ5IGRlZmF1bHQsIGxvYWQgJ0dlbmVyYWwnIHRvZG9zIHdoZW4gdmlzaXRuZyB0aGUgcGFnZVxubG9hZFBhZ2UoJ2dlbmVyYWwnLCAndG9kYXknKTtcbi8vIGFkZExpc3RlbmVycygpO1xuXG5leHBvcnQgeyBsb2FkUGFnZSwgYWRkTGlzdGVuZXJzLCBsb2FkVG9kb0JveCwgYWRkVG9kb0NvbnRhaW5lciwgYWRkQmFubmVyLCBhZGRTaWRlYmFyIH0iLCIvLyBDbGFzc2VzIGZvciB0b2RvIG9iamVjdHNcbmNvbnNvbGUubG9nKCdsb2FkaW5nIHRvZG8gb2JqZWN0cy4uLicpXG5cbmxldCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlXG5cbi8vIGNvbnNvbGUubG9nKHN0b3JhZ2UpXG5cblxuY2xhc3MgVG9kbyB7XG4gICAgLy8gVHlwZTogRHVlLCBEYWlseSwgV2Vla2x5LCBNb250aGx5XG4gICAgY29uc3RydWN0b3IodHlwZSwgdGl0bGUsIGRlc2MsIGlkLCBmaW5pc2hlZD1mYWxzZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgICAgIHRoaXMuZmluaXNoZWQgPSBmaW5pc2hlZFxuICAgICAgICB0aGlzLmlkID0gaWRcbiAgICB9XG59XG5cbmNsYXNzIHdlZWtseVRvZG8gZXh0ZW5kcyBUb2RvIHtcbiAgICAvLyBXZWVrbHkgdG9kb3MsIGRheTogRGF5IG9mIHRoZSB3ZWVrXG4gICAgY29uc3RydWN0b3IodHlwZSwgdGl0bGUsIGRlc2MsIGRheSkge1xuICAgICAgICBzdXBlcih0eXBlLCB0aXRsZSwgZGVzYyk7XG4gICAgICAgIHRoaXMuZGF5ID0gZGF5XG4gICAgfVxufVxuXG5cbmNsYXNzIG1vbnRobHlUb2RvIGV4dGVuZHMgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgdGl0bGUsIGRlc2MsIGRhdGUpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgdGl0bGUsIGRlc2MpO1xuICAgICAgICB0aGlzLmRhdGU7XG4gICAgfVxufVxuXG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IHtcbiAgICAgICAgICAgICd0b2RheSc6IFtdLFxuICAgICAgICAgICAgJ2RhaWx5JzogW10sXG4gICAgICAgICAgICAnd2Vla2x5JzogW10sXG4gICAgICAgICAgICAnbW9udGhseSc6IFtdLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubnVtVG9kb3MgPSAwIC8vIG51bVRvZG8gaW5jcmVtZW50cyB3aXRoIGVhY2ggbmV3IHRvZG8sIGFuZCBmdW5jdGlvbnMgYXMgYSB1bmlxdWUgSUQgZm9yIGVhY2ggdG9kb1xuICAgIH1cblxufVxuXG5cbi8vIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoJ2RlZmF1bHQnKVxuXG5cbi8vIGZ1bmN0aW9uIGFkZFRvZG8oKSB7XG5cbi8vIH1cbmV4cG9ydCB7VG9kbywgd2Vla2x5VG9kbywgbW9udGhseVRvZG8sIFByb2plY3R9IiwiaW1wb3J0IHsgVG9kbywgd2Vla2x5VG9kbywgUHJvamVjdCwgbW9udGhseVRvZG99IGZyb20gJy4vdG9kb2NsYXNzLmpzJztcbmltcG9ydCB7IGxvYWRQYWdlLCBhZGRMaXN0ZW5lcnMsIGxvYWRUb2RvQm94LCBhZGRUb2RvQ29udGFpbmVyLCBhZGRCYW5uZXIsIGFkZFNpZGViYXIgfSBmcm9tICcuL2luZGV4LmpzJztcbi8vIE1hbmFnZSBBZGRpbmcvVXBkYXRpbmcgVG9kb3MgaGVyZVxuXG4vLyBTdG9yYWdlXG5jb25zdCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlXG4vLyBjb25zdCBhbGxUb2RvcyA9IHtcbi8vICAgICAnZHVlJzogW10sXG4vLyAgICAgJ2RhaWx5JzogW10sXG4vLyAgICAgJ3dlZWtseSc6IFtdLFxuLy8gICAgICdtb250aGx5JzogW10sXG4vLyB9XG5cblxuLy8gY29uc3QgbmV3UHJvamVjdCA9IHtcbi8vICAgICAnZHVlJzogW10sXG4vLyAgICAgJ2RhaWx5JzogW10sXG4vLyAgICAgJ3dlZWtseSc6IFtdLFxuLy8gICAgICdtb250aGx5JzogW10sXG4vLyB9XG5cbi8vIHN0b3JhZ2Uuc2V0SXRlbSgnbmV3IHByb2plY3QnLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0KSlcbi8vIGNvbnNvbGUubG9nKHN0b3JhZ2UpXG5cblxuXG5cbmZ1bmN0aW9uIGFkZE1vZGFsKCkge1xuICAgIC8vIENyZWF0ZSBhIG1vZGFsIGZvciBhZGRpbmcgVG9kb3MgdG8gRGFpbHkvV2Vla2x5XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcbiAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSAnWCdcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICB9KVxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnRuKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJylcbiAgICAvLyBtb2RhbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0b2RvVHlwZSlcbiAgICBjb25zb2xlLmxvZyhcIkFkZGluZyBtb2RhbC4uLlwiKVxuXG5cbiAgICAvLyBBZGQgaW5wdXQgZm9yIGNyZWF0aW5nIGEgbmV3IFRvZG9cbiAgICAvLyBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgLy8gVGVzdGluZyBvbmx5XG4gICAgLy8gbW9kYWwuYXBwZW5kQ2hpbGQoYWRkVG9kb0Zvcm0oKSlcbiAgICByZXR1cm4gbW9kYWxcbn1cblxuXG5mdW5jdGlvbiBhZGRUb2RvRm9ybSgpIHtcbiAgICBjb25zdCB0b2RvQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0FkZC5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kbycpO1xuXG4gICAgY29uc3QgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7IC8vIFRvIGJlIGFkZGVkIGxhdGVyXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBsZXQgb3B0aW9ucyA9IFsnZGFpbHknLCAnd2Vla2x5JywgJ21vbnRobHknXVxuXG4gICAgdG9kb0hlYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG5cbiAgICB0b2RvSGVhZGVyLmlubmVyVGV4dCA9ICdTdWJtaXQgbmV3IFRvZG8nXG4gICAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdBZGQgVG9kbydcbiAgICB0b2RvLnBsYWNlaG9sZGVyID0gJ0FkZCBhIG5ldyB0b2RvJztcbiAgICB0b2RvRGVzYy5wbGFjZWhvbGRlciA9ICdCcmllZiBkZXNjcmlwdGlvbiBvZiB0b2RvJ1xuXG4gICAgdG9kb0FkZC5hcHBlbmRDaGlsZCh0b2RvSGVhZGVyKTtcbiAgICB0b2RvQWRkLmFwcGVuZENoaWxkKHRvZG8pO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCByYWRpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByYWRpb0Rpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuXG4gICAgICAgIGxldCBjaG9pY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgIGNob2ljZS50eXBlID0gJ2NoZWNrYm94JztcbiBcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICBsYWJlbC5mb3IgPSBjaG9pY2U7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IG9wdGlvbnNbaV1bMF0udG9VcHBlckNhc2UoKSArIG9wdGlvbnNbaV0uc2xpY2UoMSk7XG5cbiAgICAgICAgY2hvaWNlLnZhbHVlID0gb3B0aW9uc1tpXVxuXG4gICAgICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKGNob2ljZSk7XG4gICAgICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgICB0b2RvQWRkLmFwcGVuZENoaWxkKHJhZGlvRGl2KTtcbiAgICB9XG5cbiAgICB0b2RvQWRkLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgdG9kb0FkZC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgYWRkVG9kbyh0b2RvLnZhbHVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHRvZG9BZGQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmFkaW9CdG4oYnV0dG9uKSB7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbilcbiAgICAgICAgaWYoYnV0dG9uLmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBidXR0b24uY2hlY2tlZCA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmKGJ1dHRvbi5jaGVja2VkID09PSB0cnVlKXtcbiAgICAgICAgICAgIGJ1dHRvbi5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxubGV0IG1vbmRheVRvZG8gPSBuZXcgd2Vla2x5VG9kbygnd2Vla2x5JywgJ1Rlc3QnLCAnVGhpcyBpcyBhIG5ldyB0ZXN0JywgJ21vbmRheScpO1xuXG5mdW5jdGlvbiBhZGRUb2RvKHRvZG9UeXBlLCB0b2RvLCBwcm9qZWN0TmFtZSkge1xuICAgIC8vIEFkZCBhIHRvZG8gdG8gbG9jYWwgc3RvcmFnZVxuXG4gICAgbGV0IHRvZG9Qcm9qZWN0ID0gSlNPTi5wYXJzZShzdG9yYWdlW3Byb2plY3ROYW1lXSlcbiAgICBcbiAgICB0b2RvUHJvamVjdFsndG9kb3MnXVt0b2RvVHlwZV0ucHVzaCh0b2RvKVxuICAgIHRvZG9Qcm9qZWN0WydudW1Ub2RvcyddICs9IDE7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0b2RvUHJvamVjdCkpXG4gICAgLy8gbG9hZFRvZG9Cb3godG9kb1R5cGUsIHRvZG9UeXBlKVxufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvKHRvZG8sIHByb2plY3ROYW1lKSB7XG4gICAgLy9SZW1vdmUgYSB0b2RvIHdoZW4gaXQncyBkZWxldGVkL2NvbXBsZXRlZFxuICAgIC8vIEdldCAndHlwZScgb2YgdG9kb1xuICAgIGNvbnNvbGUubG9nKHRvZG8udHlwZSlcbiAgICBsZXQgdG9kb1Byb2plY3QgPSBKU09OLnBhcnNlKHN0b3JhZ2VbcHJvamVjdE5hbWVdKVxuICAgIGxldCBpbmRleE9mVG9kbyA9IHRvZG9Qcm9qZWN0LnRvZG9zW3RvZG8udHlwZV0uZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gdG9kby5pZCk7IC8vIENoYW5nZWQgdGl0bGUgdG8gaWRcbiAgICB0b2RvUHJvamVjdC50b2Rvc1t0b2RvLnR5cGVdLnNwbGljZShpbmRleE9mVG9kbywgMSlcbiAgICBzdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHRvZG9Qcm9qZWN0KSlcbiAgICBjb25zb2xlLmxvZyhcIlJlbW92aW5nIHRvZG9cIilcbiAgICBsb2FkUGFnZShwcm9qZWN0TmFtZSwgdG9kby50eXBlKVxuXG59XG5cblxuZnVuY3Rpb24gY2hlY2tGaW5pc2hlZCh0b2RvLCBwcm9qZWN0TmFtZSkge1xuICAgIC8vIE1hcmsgYSB0b2RvIGFzIGZpbmlzaGVkIG9yIHVuZmluaXNoZWRcbiAgICBsZXQgdG9kb1Byb2plY3QgPSBKU09OLnBhcnNlKHN0b3JhZ2VbcHJvamVjdE5hbWVdKVxuICAgIGxldCBpbmRleE9mVG9kbyA9IHRvZG9Qcm9qZWN0LnRvZG9zW3RvZG8udHlwZV0uZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gdG9kby5pZCk7XG4gICAgY29uc29sZS5sb2coaW5kZXhPZlRvZG8pXG4gICAgaWYodG9kby5maW5pc2hlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0b2RvLmZpbmlzaGVkID0gZmFsc2VcbiAgICAgICAgdG9kb1Byb2plY3QudG9kb3NbdG9kby50eXBlXVtpbmRleE9mVG9kb10gPSB0b2RvXG4gICAgICAgIFxuICAgIH0gZWxzZSBpZih0b2RvLmZpbmlzaGVkID09PSBmYWxzZSkge1xuICAgICAgICB0b2RvLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICB0b2RvUHJvamVjdC50b2Rvc1t0b2RvLnR5cGVdW2luZGV4T2ZUb2RvXSA9IHRvZG9cbiAgICB9XG4gICAgc3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0b2RvUHJvamVjdCkpXG59XG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIC8vIEFkZCBhIG5ldyBwcm9qZWN0IHRvIHRvZG8gbGlzdCwgcHJvamVjdCBpcyBKU09OIG9iamVjdCwgc2FtZSBhcyBhbGxUb2Rvc1xuICAgIC8vIHRoYXQgaXMgc3RvcmVkIHdpdGhpbiBhbGxUb2Rvc1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdCkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgaWYoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgcHJvamVjdD9cIikpIHtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3ROYW1lKVxuICAgICAgICBsb2FkUGFnZSgnZ2VuZXJhbCcsICd0b2RheScpO1xuICAgIH0gXG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICAvLyBPcGVuIHRoZSBtb2RhbCB3aGVuIHRoZSBhcHByZW9wcmlhdGUgZWxlbWVudCBpcyBjbGlja2VkIChpbiB0aGlzIGNhc2UgdGhlIEFkZCB0b2RvIGJ1dHRvbilcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuICAgIFxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnNvbGUubG9nKFwiT3BlbmluZyBtb2RhbFwiLCBtb2RhbClcblxufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIC8vIENsb3NlIGEgbW9kYWwgd2hlbiB1c2VyIGhpdHMgdGhlIFggaW4gdGhlIHRvcCBvZiB0aGUgc2NyZWVuIG9uIHRoZSBtb2RhbCAob3IgY2xpY2tzIG91dHNpZGUgbW9kYWwpXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gJyc7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cbmV4cG9ydCB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGFkZFRvZG8sIHJlbW92ZVRvZG8sIGFkZE1vZGFsLCBvcGVuTW9kYWwsIGNsb3NlTW9kYWwsIGNoZWNrRmluaXNoZWQgfSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcGFnZS1oZWlnaHQ6IDEwMHZoO1xcbiAgICAtLXNpZGViYXItd2lkdGg6IDI1JTtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5cXG4uYnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcbi5idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbn1cXG5cXG5cXG4uYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG59XFxuXFxuXFxuLmxpbmVicmVhayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4udGVzdCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4vKiBHZW5lcmFsIHNlbGVjdG9ycyAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIEJhbm5lciAqL1xcblxcbiNiYW5uZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG4jc2lkZWJhciB7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGhlaWdodDogdmFyKC0tcGFnZS1oZWlnaHQpO1xcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbn1cXG5cXG4jc2lkZWJhciA+IC5idG4ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYnRuLXNtIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYm94LWl0ZW0ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5ib3gtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxuICAgIGNvbG9yOiByZ2IoNTAsNTAsNTApO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3Qge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBUb2RvIGNvbnRlbnQgKi9cXG5cXG4jYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsMjMwLDIzMCk7XFxufVxcblxcbi50b2RvLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsMjMwLDIzMCk7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tYm94ID4gLmhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYigxMDAsMTAwLDEwMCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi50b2RvLWJveCA+IHVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG59XFxuXFxuLnRvZG8tYm94ID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxudWwgPiBsaSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcblxcbi50b2RvLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9kby1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi50b2RvLWRldGFpbHMgPiBwIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6MTAwcHg7XFxufVxcblxcblxcbi5maW5pc2hlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5yZW1vdmUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgNjYsIDY2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50b2RvLWNhcmQgPiBwIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4udG9kby1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuLmNhbGVuZGFyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLmNhbGVuZGFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDc3MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FsLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzUsIDc1LCA3NSk7XFxufVxcblxcbi5jYWwtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuXFxuLm1vbnRoLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1vbnRoLWhlYWRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5tb250aC1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDM4cHg7XFxufVxcblxcbi5jYWxlbmRhci1kYXkge1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG5cXG5cXG4vKiBNb2RhbHMgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjcpO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tc2lkZWJhci13aWR0aCkpOyAqL1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtaGVpZ2h0KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMCwyMDAsMjAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiBwIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IC5idG4ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gLmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gW3R5cGV+PSd0ZXh0J10ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5tb2RhbC1mb3JtID4gdGV4dGFyZWEge1xcblxcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5tb2RhbC1mb3JtLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwxMzUsMTM1KTtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGxlZnQ6IDBweDsgKi9cXG4gICAgcmlnaHQ6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCByZ2IoNTAsNTAsNTApO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IC5jbG9zZS1idG4ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7IFxcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LDEzNSwxMzUpO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjpyZ2IoNDAsNDAsNDApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9kby1mb3JtID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4udG9kby1mb3JtID4gLmNsb3NlLWJ0biB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweDsgXFxufVxcbi5mb3JtLWlucHV0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmFkZC10b2RvLWJ0biB7XFxuICAgIC8qICAqL1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsMTM1LDEzNSk7XFxuICAgIFxcbn1cXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwxMDAsMTAwKTtcXG59XFxuXFxuLmFkZC10b2RvLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsNzUsNzUpO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMwLDIzMCwyMzApO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDsgKi9cXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgICAvKiByaWdodDogMTBweDsgKi9cXG4gICAgLyogdG9wOiAxMHB4OyAqL1xcbn1cXG5cXG4uY2xvc2UtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuLyogQ2FsZW5kYXIgTW9kYWwgKi9cXG4ucGFkZGluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxufVxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICBcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLCAubmF2LWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDM2cHg7XFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuXFxuLnRlc3QtYm94IHtcXG4gICAgd2lkdGg6IDE1MDBweDtcXG4gICAgaGVpZ2h0OiAxNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxSEFBcUg7SUFDckgsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksa0NBQWtDO0FBQ3RDOzs7QUFHQTtJQUNJLG9DQUFvQztBQUN4Qzs7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7OztBQUdBLFlBQVk7O0FBRVo7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJ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QUVBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0EsbUJBQW1CO0FBQ25CO0lBQ0ksa0NBQWtDO0FBQ3RDOzs7O0FBSUE7O0lBRUk7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsWUFBWTtJQUNoQjs7O0FBR0o7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcGFnZS1oZWlnaHQ6IDEwMHZoO1xcbiAgICAtLXNpZGViYXItd2lkdGg6IDI1JTtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5cXG4uYnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcbi5idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbn1cXG5cXG5cXG4uYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG59XFxuXFxuXFxuLmxpbmVicmVhayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4udGVzdCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4vKiBHZW5lcmFsIHNlbGVjdG9ycyAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIEJhbm5lciAqL1xcblxcbiNiYW5uZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG4jc2lkZWJhciB7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGhlaWdodDogdmFyKC0tcGFnZS1oZWlnaHQpO1xcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbn1cXG5cXG4jc2lkZWJhciA+IC5idG4ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYnRuLXNtIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYm94LWl0ZW0ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5ib3gtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxuICAgIGNvbG9yOiByZ2IoNTAsNTAsNTApO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3Qge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBUb2RvIGNvbnRlbnQgKi9cXG5cXG4jYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsMjMwLDIzMCk7XFxufVxcblxcbi50b2RvLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsMjMwLDIzMCk7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tYm94ID4gLmhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYigxMDAsMTAwLDEwMCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi50b2RvLWJveCA+IHVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG59XFxuXFxuLnRvZG8tYm94ID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxudWwgPiBsaSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcblxcbi50b2RvLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9kby1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi50b2RvLWRldGFpbHMgPiBwIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6MTAwcHg7XFxufVxcblxcblxcbi5maW5pc2hlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5yZW1vdmUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgNjYsIDY2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50b2RvLWNhcmQgPiBwIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4udG9kby1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuLmNhbGVuZGFyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLmNhbGVuZGFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDc3MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FsLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzUsIDc1LCA3NSk7XFxufVxcblxcbi5jYWwtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuXFxuLm1vbnRoLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1vbnRoLWhlYWRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5tb250aC1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDM4cHg7XFxufVxcblxcbi5jYWxlbmRhci1kYXkge1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG5cXG5cXG4vKiBNb2RhbHMgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjcpO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tc2lkZWJhci13aWR0aCkpOyAqL1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtaGVpZ2h0KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMCwyMDAsMjAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiBwIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IC5idG4ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gLmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gW3R5cGV+PSd0ZXh0J10ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5tb2RhbC1mb3JtID4gdGV4dGFyZWEge1xcblxcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5tb2RhbC1mb3JtLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwxMzUsMTM1KTtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGxlZnQ6IDBweDsgKi9cXG4gICAgcmlnaHQ6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCByZ2IoNTAsNTAsNTApO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IC5jbG9zZS1idG4ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7IFxcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LDEzNSwxMzUpO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjpyZ2IoNDAsNDAsNDApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9kby1mb3JtID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4udG9kby1mb3JtID4gLmNsb3NlLWJ0biB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweDsgXFxufVxcbi5mb3JtLWlucHV0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmFkZC10b2RvLWJ0biB7XFxuICAgIC8qICAqL1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsMTM1LDEzNSk7XFxuICAgIFxcbn1cXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwxMDAsMTAwKTtcXG59XFxuXFxuLmFkZC10b2RvLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsNzUsNzUpO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMwLDIzMCwyMzApO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDsgKi9cXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgICAvKiByaWdodDogMTBweDsgKi9cXG4gICAgLyogdG9wOiAxMHB4OyAqL1xcbn1cXG5cXG4uY2xvc2UtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuLyogQ2FsZW5kYXIgTW9kYWwgKi9cXG4ucGFkZGluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxufVxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICBcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLCAubmF2LWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDM2cHg7XFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuXFxuLnRlc3QtYm94IHtcXG4gICAgd2lkdGg6IDE1MDBweDtcXG4gICAgaGVpZ2h0OiAxNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIndlZWtkYXlzIiwibW9udGhzIiwiZHQiLCJEYXRlIiwiY3VycmVudCIsIm1vbnRoVG9kbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJsb2FkQ2FsZW5kYXIiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5c0luTW9udGgiLCJnZXREYXRlIiwiZmlyc3REYXlPZk1vbnRoIiwibGFzdERheU9mTW9udGgiLCJkYXRlU3RyaW5nIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsImRheSIsImxhc3REYXRlU3RyaW5nIiwicGFkZGluZ0RheXMiLCJpbmRleE9mIiwic3BsaXQiLCJuZXh0UGFkZGluZ0RheXMiLCJsZW5ndGgiLCJtb250aGx5RGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiZGlzcGxheSIsInNldEF0dHJpYnV0ZSIsImNhbGVuZGFyQ29udGFpbmVyIiwiY2FsZW5kYXIiLCJtb250aEhlYWRlciIsImNhbGVuZGFySGVhZGVyIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJhZGRNb250aEhlYWRlciIsImFkZFdlZWtkYXlIZWFkZXIiLCJhZGREYXlTcXVhcmVzIiwibW9udGhUaXRsZSIsInByZXZpb3VzTW9udGgiLCJuZXh0TW9udGgiLCJhZGRNb250aE5hdmlnYXRpb24iLCJ3ZWVrZGF5SGVhZGVyIiwiaSIsImRheUhlYWRlciIsImJ1dHRvbiIsImRpcmVjdGlvbiIsIm1vbnRoQ2FsZW5kYXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrQ3VycmVudCIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciLCJjYWxlbmRhckRheSIsIm9wZW5Nb2RhbCIsImFkZE1vZGFsIiwidG9kb1R5cGUiLCJtb2RhbCIsInRvZG9Gb3JtIiwicGFzcyIsIm1vbnRoRGF0ZSIsInRvZG8iLCJ0b2RvRGVzYyIsInN1Ym1pdEJ0biIsImNsb3NlQnRuIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJjbG9zZU1vZGFsIiwibW9kYWxIZWFkZXIiLCJwcmludERhdGVJbmZvIiwiZGF0ZSIsImdldERheSIsImRhdGVQYXJhbXMiLCJmaXJzdERheSIsImdldFllYXIiLCJUb2RvIiwid2Vla2x5VG9kbyIsIm1vbnRobHlUb2RvIiwiUHJvamVjdCIsInRlc3QiLCJhZGRQcm9qZWN0IiwicmVtb3ZlUHJvamVjdCIsImFkZFRvZG8iLCJyZW1vdmVUb2RvIiwiY2hlY2tGaW5pc2hlZCIsInN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJsb2FkUGFnZSIsInByb2plY3ROYW1lIiwiYm9keSIsImdlbmVyYWxUb2RvcyIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudERpdiIsImJveENvbnRhaW5lciIsImlkIiwiYWRkQmFubmVyIiwiYWRkU2lkZWJhciIsImFkZFRvZG9Db250YWluZXIiLCJhZGRMaXN0ZW5lcnMiLCJiYW5uZXIiLCJiYW5uZXJIZWFkZXIiLCJzaWRlYmFyIiwiYWRkUHJvamVjdEJ0biIsImJveGVzIiwibGluZWJyZWFrIiwicHJvamVjdEhlYWRlciIsImFkZE5ld1Byb2plY3QiLCJuYXZIZWFkZXIiLCJwcm9qZWN0cyIsIk9iamVjdCIsImtleXMiLCJhcHBlbmQiLCJhZGRQcm9qZWN0c1RvU2lkZWJhciIsInByb2plY3QiLCJwcm9qZWN0RGl2IiwicHJvamVjdFNlbGVjdCIsInJlbW92ZVByb2plY3RCdG4iLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImJveERpdiIsImJveERpdkhlYWRlciIsImFkZEJ0biIsImFkZFRvZG9CdG4iLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidG9kb3MiLCJsb2FkVG9kb3MiLCJhZGRUb2RvcyIsImFkZFRvZG9Db250YWluZXJ4IiwidG9kb0JveGVzIiwicGFyc2VUb2RvcyIsInBhcnNlIiwiZGFpbHlUb2RvcyIsIndlZWtseVRvZG9zIiwidG9kYXlUb2RvcyIsIm5vVG9kb3MiLCJ0b2RvQ29udGFpbmVyIiwibmV3VG9kbyIsInRvZG9EZXRhaWxzIiwidG9kb05hbWUiLCJ0b2RvQm9vbCIsImZpbmlzaGVkIiwicmVtb3ZlQnRuIiwicmVtb3ZlIiwidGl0bGUiLCJkZXNjIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9qZWN0U3RvcmFnZSIsInRvZG9MaXN0IiwicHVzaCIsImFkZFRvZG9Gb3JtIiwidG9kb0hlYWRlciIsInRvZG9UeXBlcyIsIm9wdGlvbiIsIm51bVRvZG9zIiwidG9kb0lEIiwidG9kb0J0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZXdQcm9qZWN0Rm9ybSIsIm5ld1Byb2plY3RIZWFkZXIiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJ0b2RvT3B0aW9ucyIsImtleXdvcmQiLCJ0b0xvd2VyQ2FzZSIsInRvZG9ib3giLCJsb2FkVG9kb0JveCIsInRvZGF5Qm94IiwiZGFpbHlCb3giLCJ3ZWVrbHlCb3giLCJtb250aGx5Qm94IiwiYXNrTmFtZSIsIm5hbWUiLCJ0b2RvQWRkIiwib3B0aW9ucyIsInJhZGlvRGl2IiwiY2hvaWNlIiwibGFiZWwiLCJmb3IiLCJjaGVja1JhZGlvQnRuIiwiY2hlY2tlZCIsIm1vbmRheVRvZG8iLCJ0b2RvUHJvamVjdCIsImluZGV4T2ZUb2RvIiwiZmluZEluZGV4IiwiZSIsInNwbGljZSIsIm5ld1Byb2plY3QiLCJjb25maXJtIiwicmVtb3ZlSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=