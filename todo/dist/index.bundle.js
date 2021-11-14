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
  } else if (todoType === 'weekly') {
    boxDiv.appendChild(loadWeekly(projectName));
    boxDiv.style.display = 'flex';
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

function weeklyTodoForm() {
  // Variation of todoForm with days of week as options instead of todo type, supplemented to addTodoForm function
  var daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
}

function addTodoForm(projectName, todo) {
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

  if (todo === 'weekly') {
    var daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    for (var i = 0; i < daysOfWeek.length; i++) {
      var option = document.createElement('option');
      option.value = daysOfWeek[i];
      option.innerText = daysOfWeek[i][0].toUpperCase() + daysOfWeek[i].slice(1);
      todoType.appendChild(option);
    }
  } else {
    for (var _i2 = 0; _i2 < todoTypes.length; _i2++) {
      var _option = document.createElement('option');

      _option.value = todoTypes[_i2];
      _option.innerText = todoTypes[_i2][0].toUpperCase() + todoTypes[_i2].slice(1);
      todoType.appendChild(_option);
    }
  } // for (let i = 0; i < todoTypes.length;i++) {
  //     let option = document.createElement('option');
  //     option.value = todoTypes[i]
  //     option.innerText = todoTypes[i][0].toUpperCase() + todoTypes[i].slice(1)
  //     todoType.appendChild(option)
  // }


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
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.addProject)(projectName.value);
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
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

function loadWeekly(projectName) {
  // Create a weekly todo container where you can choose and add todos based on days of the week, 
  // returns a div with 7 boxes for each day of the week
  var daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  var weekdayDiv = document.createElement('div');
  weekdayDiv.classList.add('weekly');

  for (var i = 0; i < daysOfWeek.length; i++) {
    var day = document.createElement('div');
    day.classList.add('calendar-day');
    day.addEventListener('click', function () {
      var modal = document.querySelectorAll('.modal');
      modal[0].innerHTML = '';
      console.log("MODAL", modal);
      var todoForm = addTodoForm(projectName);
      modal[0].appendChild(todoForm);
      (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(modal);
    });
    day.innerText = daysOfWeek[i][0].toUpperCase() + daysOfWeek[i].slice(1);
    weekdayDiv.appendChild(day);
  }

  return weekdayDiv;
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0px;\n    padding: 0px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: rgb(200,200,200);\n}\n\n:root {\n    --page-height: 100vh;\n    --sidebar-width: 25%;\n}\n\np {\n    margin: 0px;\n}\n\n\n.btn {\n    border: none;\n    border-radius: 10px;\n    font-size: 24px;\n}\n\n\n.btn:hover {\n    background-color: rgb(200,200,200);\n}\n\n\n.btn:active {\n    background-color: rgb(150, 150, 150);\n}\n\n\n.linebreak {\n    width: 100%;\n}\n\n\n.test {\n    color: red;\n    background-color: green;\n}\n\n/* General selectors */\n\n.header {\n    font-size: 48px;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    display: flex;\n}\n\n/* Banner */\n\n#banner {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 100px;\n    border-bottom: 1px solid black;\n    background-color: rgb(90, 90, 90);\n    padding-left: 25px;\n}\n\n\n/* Sidebar */\n\n#sidebar {\n    /* height: 100vh; */\n    height: var(--page-height);\n    width: var(--sidebar-width);\n    border-right: 1px solid black;\n    padding: 10px;\n    background-color: rgb(150,150,150);\n}\n\n#sidebar > .btn {\n    margin-bottom: 10px;\n}\n\n.btn-sm {\n    font-size: 18px;\n}\n.box-item {\n    text-align: right;\n    font-size: 24px;\n    border-radius: 5px;\n    margin: 5px;\n    padding: 3px;\n}\n\n.box-item:hover {\n    background-color: rgb(200,200,200);\n    color: rgb(50,50,50);\n}\n\n.project-select {\n    display:flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n\n.remove-project-btn {\n    background-color: red;\n    color: white;\n}\n/* Todo content */\n\n#box-container {\n    display: flex;\n    justify-content: center;\n    /* flex-direction: column; */\n    width: 100vw;\n    background-color: rgb(230,230,230);\n}\n\n.todo-box {\n    background-color: rgb(230,230,230);\n    width: 75%;\n    height: 100vh;\n    display: none;\n    flex-direction: column;\n    position: relative;\n}\n\n.todo-box > .header {\n    text-align: center;\n    color: rgb(100,100,100);\n    margin-bottom: 20px;\n}\n\n.todo-box > ul {\n    background-color: white;\n    color: black;\n    /* padding: 10px; */\n}\n\n.todo-box > button {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    /* background-color: green; */\n    padding: 5px;\n}\nul > li {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    margin: 5px;\n}\n\n\n.todo-card {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    color: black;\n    font-size: 24px;\n    border-bottom: 1px solid black;\n    padding: 5px;\n}\n\n.todo-details {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.todo-details > p {\n    font-size: 18px;\n    margin-right:100px;\n}\n\n\n.finished {\n    text-decoration: line-through;\n    color: green;\n}\n\n.remove-btn {\n    background-color: rgb(170, 66, 66);\n    color: white;\n    font-size: 14px;\n}\n\n.todo-card > p {\n    margin-right: 10px;\n}\n.todo-card:hover {\n    background-color: rgb(150,150,150);\n}\n\n.calendar-container{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    /* width: 100%; */\n}\n\n.calendar {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 770px;\n    padding-top: 30px;\n    margin: auto;\n}\n\n.cal-header-container {\n    display: flex;\n    justify-content: center;\n    background-color:rgb(75, 75, 75);\n}\n\n.cal-header{\n    text-align: center;\n    background-color: rgb(90, 90, 90);\n    margin: 1px;\n    padding: 10px;\n    width: 100px;\n}\n\n\n.month-header-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    position: relative;\n}\n\n.month-header {\n    color: black;\n    text-align: center;\n    font-size: 48px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.month-nav {\n    background-color: rgb(150,150,150);\n    border-radius: 5px;\n    color: black;\n    width: 50px;\n    height: 25px;\n    position: relative;\n    top: 38px;\n}\n\n.calendar-day {\n    margin: 1px;\n    width: 100px;\n    height: 100px;\n    background-color: rgb(150,150,150);\n    padding: 2px;\n    /* border: 1px solid black; */\n}\n\n\n.weekly {\n    display: flex;\n\n}\n\n.weekly > .calendar-day {\n    width: 150px;\n    height: 150px;\n}\n/* Modals */\n\n.modal {\n    background-color: rgba(0,0,0, 0.7);\n    top: 100px;\n    /* width: calc(100% - var(--sidebar-width)); */\n    width: 80%;\n    height: var(--page-height);\n    display: none;\n    position: absolute;\n}\n\n.modal-header {\n    font-size: 28px;\n}\n\n.checkbox {\n    display: flex;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    position: relative;\n    background-color:rgb(200,200,200);\n    color: black;\n    width: 400px;\n    height: 200px;\n    text-align: center;\n    padding: 20px;\n    margin: auto;\n    margin-top: 200px;\n}\n\n.modal-form > p {\n    font-size: 24px;\n}\n\n.modal-form > .btn {\n    width: 50%;\n    margin: auto;\n    margin-top: 10px;\n}\n\n.modal-form > .btn:hover {\n    background-color: rgb(150,150,150);\n}\n\n.modal-form > [type~='text'] {\n    height: 2rem;\n}\n\n.modal-form > textarea {\n\n    height: 75px;\n}\n\n.modal-form-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-bottom: 5px;\n    font-size: 30px;\n    width: 75px;\n    height: 75px;\n    text-align: center;\n    border-radius: 40px;\n    background-color: rgb(135,135,135);\n    /* position: relative; */\n    position: absolute;\n    /* left: 0px; */\n    right: 50px;\n    align-items: right;\n    box-shadow: 2px 2px rgb(50,50,50);\n}\n\n.modal-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n\n.todo-form {\n    display: flex;\n    flex-direction:column;\n    width: 50%;\n    padding: 25px;\n    background-color: rgb(135,135,135);\n    margin: auto;\n    margin-top: 100px;\n}\n\n.todo-form > p {\n    text-align: center;\n    font-size: 24px;\n    color:rgb(40,40,40);\n    margin-bottom: 5px;\n}\n\n.todo-form > textarea {\n    height: 100px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 24px;\n}\n\n.todo-form > select{\n    height: 36px;\n    font-size: 24px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.todo-form > button {\n    width: 50%;\n    margin: auto;\n}\n\n.todo-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n.form-input {\n    margin: 5px;\n}\n\n.todo-form > input {\n    font-size: 24px;\n}\n\n.add-todo-btn {\n    /*  */\n    /* position: absolute; */\n    width: 20%;\n    background-color: rgb(135,135,135);\n    \n}\n.add-todo-btn:hover {\n    background-color: rgb(100,100,100);\n}\n\n.add-todo-btn:active {\n    background-color: rgb(75,75,75);\n}\n\n.close-btn {\n    /* background-color:rgb(230,230,230);\n    box-shadow: 1px 1px;\n    width: 20px;\n    height: 20px;\n    margin-right: 0px; */\n    /* position: absolute; */\n    /* right: 10px; */\n    /* top: 10px; */\n}\n\n.close-btn:hover {\n    background-color: rgb(150,150,150);\n}\n/* Calendar Modal */\n.padding {\n    background-color: rgb(200,200,200);\n}\n\n\n\n@media (max-width: 500px) {\n    \n    #sidebar {\n        display: flex;\n        flex-direction: row;\n        width: 100vw;\n        height: 15%;\n    }\n\n    .header, .nav-header {\n        font-size: 36px;\n        display:none;\n    }\n\n\n}\n\n\n.test-box {\n    width: 1500px;\n    height: 1500px;\n    background-color: green;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0px;\n    padding: 0px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: rgb(200,200,200);\n}\n\n:root {\n    --page-height: 100vh;\n    --sidebar-width: 25%;\n}\n\np {\n    margin: 0px;\n}\n\n\n.btn {\n    border: none;\n    border-radius: 10px;\n    font-size: 24px;\n}\n\n\n.btn:hover {\n    background-color: rgb(200,200,200);\n}\n\n\n.btn:active {\n    background-color: rgb(150, 150, 150);\n}\n\n\n.linebreak {\n    width: 100%;\n}\n\n\n.test {\n    color: red;\n    background-color: green;\n}\n\n/* General selectors */\n\n.header {\n    font-size: 48px;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    display: flex;\n}\n\n/* Banner */\n\n#banner {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 100px;\n    border-bottom: 1px solid black;\n    background-color: rgb(90, 90, 90);\n    padding-left: 25px;\n}\n\n\n/* Sidebar */\n\n#sidebar {\n    /* height: 100vh; */\n    height: var(--page-height);\n    width: var(--sidebar-width);\n    border-right: 1px solid black;\n    padding: 10px;\n    background-color: rgb(150,150,150);\n}\n\n#sidebar > .btn {\n    margin-bottom: 10px;\n}\n\n.btn-sm {\n    font-size: 18px;\n}\n.box-item {\n    text-align: right;\n    font-size: 24px;\n    border-radius: 5px;\n    margin: 5px;\n    padding: 3px;\n}\n\n.box-item:hover {\n    background-color: rgb(200,200,200);\n    color: rgb(50,50,50);\n}\n\n.project-select {\n    display:flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n\n.remove-project-btn {\n    background-color: red;\n    color: white;\n}\n/* Todo content */\n\n#box-container {\n    display: flex;\n    justify-content: center;\n    /* flex-direction: column; */\n    width: 100vw;\n    background-color: rgb(230,230,230);\n}\n\n.todo-box {\n    background-color: rgb(230,230,230);\n    width: 75%;\n    height: 100vh;\n    display: none;\n    flex-direction: column;\n    position: relative;\n}\n\n.todo-box > .header {\n    text-align: center;\n    color: rgb(100,100,100);\n    margin-bottom: 20px;\n}\n\n.todo-box > ul {\n    background-color: white;\n    color: black;\n    /* padding: 10px; */\n}\n\n.todo-box > button {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    /* background-color: green; */\n    padding: 5px;\n}\nul > li {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    margin: 5px;\n}\n\n\n.todo-card {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    color: black;\n    font-size: 24px;\n    border-bottom: 1px solid black;\n    padding: 5px;\n}\n\n.todo-details {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.todo-details > p {\n    font-size: 18px;\n    margin-right:100px;\n}\n\n\n.finished {\n    text-decoration: line-through;\n    color: green;\n}\n\n.remove-btn {\n    background-color: rgb(170, 66, 66);\n    color: white;\n    font-size: 14px;\n}\n\n.todo-card > p {\n    margin-right: 10px;\n}\n.todo-card:hover {\n    background-color: rgb(150,150,150);\n}\n\n.calendar-container{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    /* width: 100%; */\n}\n\n.calendar {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 770px;\n    padding-top: 30px;\n    margin: auto;\n}\n\n.cal-header-container {\n    display: flex;\n    justify-content: center;\n    background-color:rgb(75, 75, 75);\n}\n\n.cal-header{\n    text-align: center;\n    background-color: rgb(90, 90, 90);\n    margin: 1px;\n    padding: 10px;\n    width: 100px;\n}\n\n\n.month-header-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    position: relative;\n}\n\n.month-header {\n    color: black;\n    text-align: center;\n    font-size: 48px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.month-nav {\n    background-color: rgb(150,150,150);\n    border-radius: 5px;\n    color: black;\n    width: 50px;\n    height: 25px;\n    position: relative;\n    top: 38px;\n}\n\n.calendar-day {\n    margin: 1px;\n    width: 100px;\n    height: 100px;\n    background-color: rgb(150,150,150);\n    padding: 2px;\n    /* border: 1px solid black; */\n}\n\n\n.weekly {\n    display: flex;\n\n}\n\n.weekly > .calendar-day {\n    width: 150px;\n    height: 150px;\n}\n/* Modals */\n\n.modal {\n    background-color: rgba(0,0,0, 0.7);\n    top: 100px;\n    /* width: calc(100% - var(--sidebar-width)); */\n    width: 80%;\n    height: var(--page-height);\n    display: none;\n    position: absolute;\n}\n\n.modal-header {\n    font-size: 28px;\n}\n\n.checkbox {\n    display: flex;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    position: relative;\n    background-color:rgb(200,200,200);\n    color: black;\n    width: 400px;\n    height: 200px;\n    text-align: center;\n    padding: 20px;\n    margin: auto;\n    margin-top: 200px;\n}\n\n.modal-form > p {\n    font-size: 24px;\n}\n\n.modal-form > .btn {\n    width: 50%;\n    margin: auto;\n    margin-top: 10px;\n}\n\n.modal-form > .btn:hover {\n    background-color: rgb(150,150,150);\n}\n\n.modal-form > [type~='text'] {\n    height: 2rem;\n}\n\n.modal-form > textarea {\n\n    height: 75px;\n}\n\n.modal-form-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-bottom: 5px;\n    font-size: 30px;\n    width: 75px;\n    height: 75px;\n    text-align: center;\n    border-radius: 40px;\n    background-color: rgb(135,135,135);\n    /* position: relative; */\n    position: absolute;\n    /* left: 0px; */\n    right: 50px;\n    align-items: right;\n    box-shadow: 2px 2px rgb(50,50,50);\n}\n\n.modal-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n\n.todo-form {\n    display: flex;\n    flex-direction:column;\n    width: 50%;\n    padding: 25px;\n    background-color: rgb(135,135,135);\n    margin: auto;\n    margin-top: 100px;\n}\n\n.todo-form > p {\n    text-align: center;\n    font-size: 24px;\n    color:rgb(40,40,40);\n    margin-bottom: 5px;\n}\n\n.todo-form > textarea {\n    height: 100px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 24px;\n}\n\n.todo-form > select{\n    height: 36px;\n    font-size: 24px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.todo-form > button {\n    width: 50%;\n    margin: auto;\n}\n\n.todo-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n.form-input {\n    margin: 5px;\n}\n\n.todo-form > input {\n    font-size: 24px;\n}\n\n.add-todo-btn {\n    /*  */\n    /* position: absolute; */\n    width: 20%;\n    background-color: rgb(135,135,135);\n    \n}\n.add-todo-btn:hover {\n    background-color: rgb(100,100,100);\n}\n\n.add-todo-btn:active {\n    background-color: rgb(75,75,75);\n}\n\n.close-btn {\n    /* background-color:rgb(230,230,230);\n    box-shadow: 1px 1px;\n    width: 20px;\n    height: 20px;\n    margin-right: 0px; */\n    /* position: absolute; */\n    /* right: 10px; */\n    /* top: 10px; */\n}\n\n.close-btn:hover {\n    background-color: rgb(150,150,150);\n}\n/* Calendar Modal */\n.padding {\n    background-color: rgb(200,200,200);\n}\n\n\n\n@media (max-width: 500px) {\n    \n    #sidebar {\n        display: flex;\n        flex-direction: row;\n        width: 100vw;\n        height: 15%;\n    }\n\n    .header, .nav-header {\n        font-size: 36px;\n        display:none;\n    }\n\n\n}\n\n\n.test-box {\n    width: 1500px;\n    height: 1500px;\n    background-color: green;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsT0FBTyxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxZ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Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NhbGVuZGFyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgbW9udGhseSB0b2RvIGNhbGVuZGFyLi4uLlwiKVxuXG5cbmxldCB3ZWVrZGF5cyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxubGV0IG1vbnRocyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdXG5sZXQgZHQgPSBuZXcgRGF0ZSgpXG5sZXQgY3VycmVudCA9IDA7XG5sZXQgbW9udGhUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ21vbnRobHknKSAvLyBDb250YWluZXIgZm9yIHRoZSBjYWxlbmRhciwgd2hlbiBhIG1vbnRoIGlzIGNoYW5nZWQsIHRoaXMgZ2V0cyByZXNldCBhbmQgcmVwbGFjZWQgd2l0aCBjdXJyZW50bHkgc2VsZWN0ZWQgbW9udGhcblxuZnVuY3Rpb24gbG9hZENhbGVuZGFyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiTU9OVEggKyBDVVJSRU5UXCIsIGR0LmdldE1vbnRoKCksIGN1cnJlbnQpXG4gICAgLy8gbGV0IGRhdGUgPSBkdC5nZXREYXRlKCk7XG4gICAgLy8gbGV0IGRheSA9IGR0LmdldERheSgpXG4gICAgbGV0IHllYXIgPSBkdC5nZXRGdWxsWWVhcigpXG4gICAgbGV0IG1vbnRoID0gZHQuZ2V0TW9udGgoKSArIGN1cnJlbnQ7XG5cbiAgICBjb25zdCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKVxuICAgIGNvbnN0IGxhc3REYXlPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKVxuXG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGZpcnN0RGF5T2ZNb250aC50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLXVzJywge1xuICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgIHllYXI6J251bWVyaWMnLFxuICAgICAgICBtb250aDonbnVtZXJpYycsXG4gICAgICAgIGRheTonbnVtZXJpYycsXG4gICAgfSlcblxuICAgIGNvbnN0IGxhc3REYXRlU3RyaW5nID0gbGFzdERheU9mTW9udGgudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi11cycsIHtcbiAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgIH0pXG5cbiAgICBjb25zdCBwYWRkaW5nRGF5cyA9IHdlZWtkYXlzLmluZGV4T2YoZGF0ZVN0cmluZy5zcGxpdCgnLCAnKVswXSk7XG4gICAgY29uc3QgbmV4dFBhZGRpbmdEYXlzID0gd2Vla2RheXMubGVuZ3RoIC0gd2Vla2RheXMuaW5kZXhPZihsYXN0RGF0ZVN0cmluZy5zcGxpdCgnLCAnKVswXSk7XG5cbiAgICAvLyBDcmVhdGUgZWxlbWVudHMgYW5kIHNldCBhdHRyaWJ1dGVzXG4gICAgY29uc3QgbW9udGhseURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbW9udGhseURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWJveCcpXG4gICAgbW9udGhseURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1vbnRobHlEaXYuc2V0QXR0cmlidXRlKCduYW1lJywgJ21vbnRobHknKVxuXG4gICAgY29uc3QgY2FsZW5kYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1vbnRoSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgY2FsZW5kYXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNhbGVuZGFyLmNsYXNzTGlzdC5hZGQoJ2NhbGVuZGFyJylcbiAgICBjYWxlbmRhckhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYWwtaGVhZGVyLWNvbnRhaW5lcicpO1xuICAgIG1vbnRoSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vbnRoLWhlYWRlcicpO1xuICAgIG1vbnRoSGVhZGVyLmlubmVyVGV4dCA9IG1vbnRoc1ttb250aF07XG5cbiAgICAvLyBjYWxlbmRhckNvbnRhaW5lci5hcHBlbmRDaGlsZChtb250aEhlYWRlcik7XG4gICAgY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTW9udGhIZWFkZXIobW9udGgpKTtcbiAgICBjYWxlbmRhckNvbnRhaW5lci5hcHBlbmRDaGlsZChjYWxlbmRhcik7XG5cbiAgICAvLyBBZGQgd2Vla2RheSBoZWFkZXJzXG4gICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoYWRkV2Vla2RheUhlYWRlcigpKVxuXG4gICAgLy8gQWRkIGRheSBzcXVhcmVzIHRvIGNhbGVuZGFyXG4gICAgYWRkRGF5U3F1YXJlcyhjYWxlbmRhciwgcGFkZGluZ0RheXMsIGRheXNJbk1vbnRoLCBuZXh0UGFkZGluZ0RheXMpXG5cbiAgICBtb250aGx5RGl2LmFwcGVuZENoaWxkKGNhbGVuZGFyQ29udGFpbmVyKVxuICAgIC8vIHJldHVybiBtb250aGx5RGl2XG4gICAgLy8gY2FsZW5kYXJDb250YWluZXIuYXBwZW5kKGFkZE1vZGFsKCdtb250aGx5JykpXG4gICAgcmV0dXJuIGNhbGVuZGFyQ29udGFpbmVyO1xufVxuXG5cbmZ1bmN0aW9uIGFkZE1vbnRoSGVhZGVyKG1vbnRoKSB7XG4gICAgLy8gQWRkIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IG1vbnRoIGF0IHRoZSB0b3Agb2YgdGhlIGNhbGVuZGFyLCBhcyB3ZWxsIGFzIHRoZSBhYmlsaXR5IHRvIHN3aXRjaCBtb250aHNcblxuICAgIC8vICdDdXJyZW50JyBkZWZhdWx0cyB0byB0aGUgZ2l2ZW4gbW9udGggcGFyYW1ldGVyIChjdXJyZW50IG1vbnRoKSwgYWRkaW5nL3N1YnRyYWN0aW5nIGZvcm0gY3VycmVudCB3aWxsIHN3aXRjaCBtb250aHNcbiAgICAvLyBsZXQgY3VycmVudCA9IDA7XG4gICAgY29uc3QgbW9udGhIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb250aEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb250aC1oZWFkZXItY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtb250aFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbW9udGhUaXRsZS5jbGFzc0xpc3QuYWRkKCdtb250aC1oZWFkZXInKTtcbiAgICBtb250aFRpdGxlLmlubmVyVGV4dCA9IG1vbnRoc1ttb250aF07XG4gICAgY29uc3QgcHJldmlvdXNNb250aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG5leHRNb250aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgYWRkTW9udGhOYXZpZ2F0aW9uKHByZXZpb3VzTW9udGgsICdwcmV2aW91cycpO1xuICAgIGFkZE1vbnRoTmF2aWdhdGlvbihuZXh0TW9udGgsICduZXh0Jyk7XG5cbiAgICBwcmV2aW91c01vbnRoLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIHByZXZpb3VzTW9udGguY2xhc3NMaXN0LmFkZCgnbW9udGgtbmF2JylcbiAgICBuZXh0TW9udGguY2xhc3NMaXN0LmFkZCgnbW9udGgtbmF2Jyk7XG4gICAgbmV4dE1vbnRoLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG5cbiAgICBwcmV2aW91c01vbnRoLmlubmVyVGV4dCA9ICc8J1xuICAgIG5leHRNb250aC5pbm5lclRleHQgPSAnPidcblxuICAgIG1vbnRoSGVhZGVyLmFwcGVuZENoaWxkKHByZXZpb3VzTW9udGgpO1xuICAgIG1vbnRoSGVhZGVyLmFwcGVuZENoaWxkKG1vbnRoVGl0bGUpO1xuICAgIG1vbnRoSGVhZGVyLmFwcGVuZENoaWxkKG5leHRNb250aCk7XG5cbiAgICByZXR1cm4gbW9udGhIZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGFkZFdlZWtkYXlIZWFkZXIoKSB7XG4gICAgLy8gQWRkIHdlZWtkYXkgaGVhZGVycyB0byB0aGUgY2FsZW5kYXIoJ01vbmRheScsICdUdWVzZGF5JywgJ2V0YylcbiAgICBjb25zdCB3ZWVrZGF5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vla2RheUhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYWwtaGVhZGVyLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2Vla2RheXMubGVuZ3RoO2krKykge1xuICAgICAgICBjb25zdCBkYXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhbC1oZWFkZXInKTtcbiAgICAgICAgZGF5SGVhZGVyLmlubmVyVGV4dCA9IHdlZWtkYXlzW2ldO1xuICAgICAgICB3ZWVrZGF5SGVhZGVyLmFwcGVuZENoaWxkKGRheUhlYWRlcilcbiAgICB9XG4gICAgcmV0dXJuIHdlZWtkYXlIZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGFkZE1vbnRoTmF2aWdhdGlvbihidXR0b24sIGRpcmVjdGlvbikge1xuICAgIC8vIEFkZCBjbGljayBsaXN0ZW5lcnMgdG8gcHJldmlvdXMvbmV4dCBtb250aCBCdXR0b25zIHRvIHN3aXRjaCBtb250aHMgaW4gdGhlIGNhbGVuZGFyXG4gICAgbGV0IG1vbnRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ21vbnRobHknKVxuICAgIGxldCBtb250aENhbGVuZGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FsZW5kYXInKVxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gTmF2IG1vdmVzIGxlZnQgb3IgcmlnaHRcbiAgICAgICAgaWYoZGlyZWN0aW9uID09PSAncHJldmlvdXMnKSB7XG4gICAgICAgICAgICBjdXJyZW50IC09IDFcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjaGVja0N1cnJlbnQoY3VycmVudCk7XG4gICAgICAgICAgICBtb250aFRvZG9bMF0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBtb250aFRvZG9bMF0uYXBwZW5kQ2hpbGQobG9hZENhbGVuZGFyKCkpXG4gICAgICAgIH0gZWxzZSBpZihkaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgICAgY3VycmVudCArPSAxXG4gICAgICAgICAgICBjdXJyZW50ID0gY2hlY2tDdXJyZW50KGN1cnJlbnQpXG4gICAgICAgICAgICBtb250aFRvZG9bMF0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBtb250aFRvZG9bMF0uYXBwZW5kQ2hpbGQobG9hZENhbGVuZGFyKCkpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjaGVja0N1cnJlbnQoY3VycmVudCkge1xuICAgIC8vIFJlc2V0cyAnY3VycmVudCcgdG8gMCBpZiBncmVhdGVyIHRoYW4gMTIsIHNpbmNlIG51bWJlcnMgaGlnaGVyIHRoYW4gdGhhdCBhcmUgb3V0IG9mIGluZGV4IGZvciBtb250aHNcbiAgICBpZihjdXJyZW50ICsgZHQuZ2V0TW9udGgoKSA+IDExKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBjdXJyZW50XCIsIGN1cnJlbnQgKyBkdC5nZXRNb250aCgpKVxuICAgICAgICByZXR1cm4gLWR0LmdldE1vbnRoKClcbiAgICB9IGVsc2UgaWYoZHQuZ2V0TW9udGgoKSArIGN1cnJlbnQgPCAwKSB7XG4gICAgICAgIC8vIFJvbGwgb3ZlciBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGluZGV4IDEyIGZvciBEZWNlbWJlciwgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gMTIgYW5kIGR0LmdldE1vbnRoKClcbiAgICAgICAgY29uc29sZS5sb2coXCJQcmV2aW91cyB5ZWFyXCIpXG4gICAgICAgIHJldHVybiAxMSAtIGR0LmdldE1vbnRoKClcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJWYWxpZCBjdXJyZW50XCIsIGN1cnJlbnQpXG4gICAgcmV0dXJuIGN1cnJlbnRcblxufVxuXG5cbmZ1bmN0aW9uIGFkZERheVNxdWFyZXMoY2FsZW5kYXIsIHBhZGRpbmdEYXlzLCBkYXlzSW5Nb250aCwgbmV4dFBhZGRpbmdEYXlzKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBhZGRpbmdEYXlzICsgZGF5c0luTW9udGggKyBuZXh0UGFkZGluZ0RheXMgLSAxOyBpKyspIHtcbiAgICAgICAgbGV0IGNhbGVuZGFyRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhbGVuZGFyRGF5LmNsYXNzTGlzdC5hZGQoJ2NhbGVuZGFyLWRheScpO1xuXG4gICAgICAgIGlmIChpIDwgcGFkZGluZ0RheXMgfHwgaSA+PSBwYWRkaW5nRGF5cyArIGRheXNJbk1vbnRoKSB7XG4gICAgICAgICAgICBjYWxlbmRhckRheS5jbGFzc0xpc3QuYWRkKCdwYWRkaW5nJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGVuZGFyRGF5LmlubmVyVGV4dCA9IChpIC0gcGFkZGluZ0RheXMpICsgMVxuICAgICAgICAgICAgY2FsZW5kYXJEYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3Blbk1vZGFsKGNhbGVuZGFyRGF5KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxlbmRhckRheSk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGFkZE1vZGFsKHRvZG9UeXBlKSB7XG4gICAgLy8gQWRkIGEgbW9kYWwgdG8gdGhlIGNhbGVuZGFyIGZvciBhZGRpbmcgbmV3IFRvZG9zLCBwb3RlbnRpYWxseSBub3QgdW5pcXVlIHRvIGNhbGVuZGFyLCBzbyBtYXliZSBtb3ZlIHRvIGFub3RoZXIgZmlsZSBhbmQgZXhwb3J0XG4gICAgLy8gNCB0eXBlcyBvZiB0b2RvczogVG9kYXkoVW5pcXVlKSwgRGFpbHksIFdlZWtseSwgTW9udGhseSwgYWRqdXN0IHRoZSBmb3JtIGFjY29yZGluZ2x5XG4gICAgXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kbycpO1xuXG5cblxuICAgIC8vIENyZWF0ZSBhIGZvcm0gZm9yIGFkZGluZyBuZXcgVG9kb3MsIGFuZCBhZGQgaXQgdG8gdGhlIHRvZG8gZm9ybSBkaXZcbiAgICBpZih0b2RvVHlwZSA9PT0gJ2RhaWx5Jykge1xuICAgICAgICBwYXNzXG4gICAgfSBlbHNlIGlmKHRvZG9UeXBlID09PSAndG9kYXknKSB7XG4gICAgICAgIHBhc3NcbiAgICB9IGVsc2UgaWYodG9kb1R5cGUgPT09ICd3ZWVrbHknKSB7XG4gICAgICAgIHBhc3NcbiAgICB9IGVsc2UgaWYodG9kb1R5cGUgPT09ICdtb250aGx5Jykge1xuICAgICAgICAvLyBIZXJlJ3Mgd2hlcmUgSSBhZGQgc3R1ZmYgZm9yIG5vd1xuXG4gICAgICAgIGNvbnN0IG1vbnRoRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgbW9udGhEYXRlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBtb250aERhdGUuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJylcbiAgICAgICAgLy8gbW9udGhEYXRlLmlubmVyVGV4dCA9IG1vbnRoc1tkdC5nZXRNb250aCgpXVxuICAgICAgICB0b2RvLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRvZG8ucGxhY2Vob2xkZXIgPSAnQWRkIHRvZG8nXG4gICAgICAgIHRvZG9EZXNjLnBsYWNlaG9sZGVyID0gJ0FkZCBhIGRlc2NyaXB0aW9uIG9mIHRoZSB0b2RvIGhlcmUnXG4gICAgICAgIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgIHN1Ym1pdEJ0bi52YWx1ZSA9ICdBZGQgVG9kbydcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ0bicpO1xuICAgICAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSAnWCc7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgfSlcblxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChtb250aERhdGUpXG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EZXNjKVxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICB9XG5cbiAgICAvLyB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvKVxuICAgIC8vIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG4gICAgcmV0dXJuIG1vZGFsXG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICAvLyBCeSBjbGlja2luZyBhIGNsb3NlIGJ1dHRvbiBjbG9zZSBhbnkgb3BlbiBtb2RhbFxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChkYXkpIHtcbiAgICAvLyBBZGQgYW4gZXZlbnQgbHNpdGVuZXIgdG8gb3BlbiB1cCB0aGUgYWRkIHRvZG8gbW9kYWxcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbCcpO1xuICAgIGxldCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsLWhlYWRlcicpWzBdO1xuICAgIGxldCBtb250aERhdGUgPSBtb250aHNbZHQuZ2V0TW9udGgoKSArIGN1cnJlbnRdICsgXCIgXCIgKyBkYXkuaW5uZXJUZXh0XG5cbiAgICBtb2RhbEhlYWRlci5pbm5lclRleHQgPSAnJ1xuICAgIG1vZGFsSGVhZGVyLmlubmVyVGV4dCA9IG1vbnRoc1tkdC5nZXRNb250aCgpICsgY3VycmVudF0gKyBcIiBcIiArIGRheS5pbm5lclRleHRcbiAgICBtb2RhbFswXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gcHJpbnREYXRlSW5mbyhkYXRlKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcIkRhdGU6IFwiLCBkYXRlLmdldERhdGUoKSlcbiAgICBjb25zb2xlLmxvZyhcIkRheTogXCIsIHdlZWtkYXlzW2RhdGUuZ2V0RGF5KCldKVxuICAgIGNvbnNvbGUubG9nKFwiWWVhcjogXCIsIGRhdGUuZ2V0RnVsbFllYXIoKSlcbiAgICBjb25zb2xlLmxvZyhcIk1vbnRoOiBcIiwgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0pXG5cbiAgICBsZXQgZGF0ZVBhcmFtcyA9IHtcbiAgICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIkZvcm1hdGVkIGRhdGUgc3RyaW5nXCIsIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIGRhdGVQYXJhbXMpKVxuXG4gICAgLy8gQ2FuIGdldCBkYXlzIGluIG1vbnRoIGJ5IGdldHRpbmcgdGhlIGRhdGUgb2YgdGhlIGxhc3QgZGF5IGluIGEgbW9udGguXG4gICAgbGV0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKClcbiAgICBsZXQgZmlyc3REYXkgPSBuZXcgRGF0ZShkYXRlLmdldFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXREYXkoKVxuICAgIGNvbnNvbGUubG9nKFwiRGF5cyBpbiBtb250aDogXCIsIGRheXNJbk1vbnRoLCBmaXJzdERheSlcblxuXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxufSlcblxuXG4vLyBwcmludERhdGVJbmZvKGR0KVxuZXhwb3J0IHsgbG9hZENhbGVuZGFyIH0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCB7IHRlc3RKU09OIH0gZnJvbSAnLi90ZXN0cy5qcyc7XG5pbXBvcnQgeyBUb2RvLCB3ZWVrbHlUb2RvLCBtb250aGx5VG9kbywgUHJvamVjdCB9IGZyb20gJy4vdG9kb2NsYXNzLmpzJztcbmltcG9ydCB7IHRlc3QsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGFkZFRvZG8sIHJlbW92ZVRvZG8sIGFkZE1vZGFsLCBvcGVuTW9kYWwsIGNsb3NlTW9kYWwsIGNoZWNrRmluaXNoZWQgfSBmcm9tICcuL3RvZG9zLmpzJztcbmltcG9ydCB7IGxvYWRDYWxlbmRhciB9IGZyb20gJy4vY2FsZW5kYXIuanMnO1xuXG5cblxuY29uc29sZS5sb2coXCJTY3JpcHRzIGxvYWRpbmcuLi4uXCIpXG5jb25zdCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xuLy8gY29uc3QgZ2VuZXJhbFRvZG9zID0gbmV3IFByb2plY3QoJ2dlbmVyYWwnKTtcbi8vIHN0b3JhZ2Uuc2V0SXRlbSgnZ2VuZXJhbCcsIEpTT04uc3RyaW5naWZ5KGdlbmVyYWxUb2RvcykpXG4vLyBzdG9yYWdlLmNsZWFyKClcbi8vIGNvbnNvbGUubG9nKHN0b3JhZ2UpXG5cbmZ1bmN0aW9uIGxvYWRQYWdlKHByb2plY3ROYW1lLCB0b2RvVHlwZSkge1xuICAgIC8vIE1haW4gZnVuY3Rpb24gZm9yIGFkZGluZyBlbGVtZW50cyB0byB0aGUgRE9NXG5cbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgIC8vIGluaXRpYWxpemUgc3RvcmFnZSBpZiBub25lXG4gICAgaWYoc3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IGdlbmVyYWxUb2RvcyA9IG5ldyBQcm9qZWN0KCdnZW5lcmFsJyk7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSgnZ2VuZXJhbCcsIEpTT04uc3RyaW5naWZ5KGdlbmVyYWxUb2RvcykpXG4gICAgICAgIC8vIHN0b3JhZ2UuY2xlYXIoKVxuICAgIH1cblxuICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgLy8gQ29udGVudCBkaXYgaXMgYWxsIGVsZW1lbnRzIG9mIHRoZSB0aGUgYm9keSBhZnRlciB0aGUgYmFubmVyXG4gICAgbGV0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBBZGRlZCBCb3ggY29udGFpbmVyIGhlcmUgaW5zdGVhZCBvZiBpbiBhZGQgY29udGFpbmVyXG4gICAgYm94Q29udGFpbmVyLmlkID0gJ2JveC1jb250YWluZXInO1xuICAgIGNvbnRlbnREaXYuaWQgPSAnY29udGVudCdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZEJhbm5lcihwcm9qZWN0TmFtZSkpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkU2lkZWJhcigpKVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYm94Q29udGFpbmVyKTtcblxuICAgIGFkZFRvZG9Db250YWluZXIocHJvamVjdE5hbWUsIHRvZG9UeXBlKTtcbiAgICBhZGRMaXN0ZW5lcnMocHJvamVjdE5hbWUpO1xufVxuXG5cbmZ1bmN0aW9uIGFkZEJhbm5lcihwcm9qZWN0TmFtZSkge1xuICAgIC8vIEFkZCBhIGhlYWRlciBiYW5uZXIgZm9yIHRoZSB3ZWJwYWdlXG4gICAgbGV0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IGJhbm5lckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGJhbm5lci5pZCA9ICdiYW5uZXInO1xuICAgIGJhbm5lckhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuXG4gICAgYmFubmVySGVhZGVyLmlubmVyVGV4dCA9IGBVc2VyJ3MgVG9kbyBMaXN0IGZvciAke3Byb2plY3ROYW1lfWA7XG5cbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoYmFubmVySGVhZGVyKTtcblxuICAgIHJldHVybiBiYW5uZXJcbn1cblxuXG5mdW5jdGlvbiBhZGRTaWRlYmFyKCkge1xuICAgIC8vIEFkZCB0aGUgc2lkZWJhciB0byB0aGUgRE9NXG4gICAgY29uc29sZS5sb2coXCJzdG9yYWdlIGluIGFkZFNpZGViYXIoKVwiLCBzdG9yYWdlKVxuICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgYm94ZXMgPSBbJ1RvZGF5JywgJ0RhaWx5JywgJ1dlZWtseScsICdNb250aGx5J11cbiAgICBsZXQgbGluZWJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBsZXQgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuXG4gICAgc2lkZWJhci5pZCA9ICdzaWRlYmFyJztcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgbGluZWJyZWFrLmNsYXNzTGlzdC5hZGQoJ2xpbmVicmVhaycpO1xuICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgcHJvamVjdEhlYWRlci5pbm5lclRleHQgPSAnUHJvamVjdHMnO1xuICAgIGFkZFByb2plY3RCdG4uaW5uZXJUZXh0ID0gJysgUHJvamVjdCc7XG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkTmV3UHJvamVjdCgpXG4gICAgfSlcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmF2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIG5hdkhlYWRlci5jbGFzc0xpc3QuYWRkKCdib3gtaXRlbScpO1xuICAgICAgICBuYXZIZWFkZXIuaW5uZXJUZXh0ID0gYm94ZXNbaV07XG5cbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChuYXZIZWFkZXIpXG4gICAgfVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGluZWJyZWFrKTtcbiAgICAvLyBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG5cbiAgICBsZXQgcHJvamVjdHMgPSBPYmplY3Qua2V5cyhzdG9yYWdlKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gLy8gQWRkIGFuIG9wdGlvbnQgdG8gbG9hZCBwcm9qZWN0IGludG8gbWFpbiB3aW5kb3dcbiAgICAgICAgLy8gbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gbGV0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgLy8gbGV0IHJlbW92ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAvLyBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc2VsZWN0Jyk7XG4gICAgICAgIC8vIHByb2plY3RTZWxlY3QuaW5uZXJUZXh0ID0gcHJvamVjdHNbaV07XG4gICAgICAgIC8vIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgIC8vIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJyk7XG4gICAgICAgIC8vIHJlbW92ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgIC8vIHJlbW92ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXByb2plY3QtYnRuJyk7XG4gICAgICAgIC8vIHJlbW92ZVByb2plY3QuaW5uZXJUZXh0ID0gJ1gnO1xuXG4gICAgICAgIC8vIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdCk7XG4gICAgICAgIC8vIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdCk7XG4gICAgICAgIC8vIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG5cbiAgICAgICAgLy8gcHJvamVjdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgIGxvYWRQYWdlKHByb2plY3RzW2ldLCAndG9kYXknKTtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgc2lkZWJhci5hcHBlbmQoYWRkUHJvamVjdHNUb1NpZGViYXIocHJvamVjdHNbaV0pKVxuICAgIH1cblxuICAgIHJldHVybiBzaWRlYmFyO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0c1RvU2lkZWJhcihwcm9qZWN0KSB7XG4gICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCByZW1vdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc2VsZWN0Jyk7XG4gICAgcHJvamVjdFNlbGVjdC5pbm5lclRleHQgPSBwcm9qZWN0O1xuICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKTtcbiAgICByZW1vdmVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIHJlbW92ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXByb2plY3QtYnRuJyk7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5pbm5lclRleHQgPSAnWCc7XG5cbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ0bik7XG4gICAgLy8gc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICAgIHByb2plY3RTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvYWRQYWdlKHByb2plY3QsICd0b2RheScpO1xuICAgIH0pXG5cbiAgICByZW1vdmVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pXG4gICAgcmV0dXJuIHByb2plY3REaXZcbn1cblxuZnVuY3Rpb24gYWRkVG9kb0NvbnRhaW5lcihwcm9qZWN0TmFtZSwgdG9kb1R5cGUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIC8vIGNvbnN0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBBZGRlZCBib3hDb250YWluZXIgdG8gbG9hZFBhZ2UoKSBpbnN0ZWFkIG9mIGNyZWF0aW5nIGl0IGhlcmVcbiAgICAvLyBib3hDb250YWluZXIuaWQgPSAnYm94LWNvbnRhaW5lcic7XG4gICAgY29uc3QgYm94Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JveC1jb250YWluZXInKTtcbiAgICBib3hDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsZXQgYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJveERpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZEJ0biA9IGFkZFRvZG9CdG4ocHJvamVjdE5hbWUpO1xuXG4gICAgYm94RGl2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWJveCcpXG4gICAgYm94RGl2LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRvZG9UeXBlKTtcbiAgICBhZGRCdG4uaW5uZXJUZXh0ID0gJ0FkZCBUb2RvJztcbiAgICBjb25zb2xlLmxvZyhcIkJPWCBIRUFERVJcIiwgYm94RGl2SGVhZGVyLCB0b2RvVHlwZSlcbiAgICBib3hEaXZIZWFkZXIuaW5uZXJUZXh0ID0gdG9kb1R5cGVbMF0udG9VcHBlckNhc2UoKSArIHRvZG9UeXBlLnNsaWNlKDEpICsgJyBUb2Rvcyc7XG4gICAgYm94RGl2LmFwcGVuZENoaWxkKGJveERpdkhlYWRlcik7XG4gICAgYm94RGl2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICBpZih0b2RvVHlwZSA9PT0gJ21vbnRobHknKSB7XG4gICAgICAgIGJveERpdi5hcHBlbmRDaGlsZChsb2FkQ2FsZW5kYXIoKSk7XG4gICAgICAgIGJveERpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYm94RGl2KTtcbiAgICB9IGVsc2UgaWYodG9kb1R5cGUgPT09ICd3ZWVrbHknKXtcbiAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGxvYWRXZWVrbHkocHJvamVjdE5hbWUpKTtcbiAgICAgICAgYm94RGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRvZG9zID0gbG9hZFRvZG9zKHRvZG9UeXBlLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIGJveERpdi5hcHBlbmRDaGlsZChhZGRUb2Rvcyh0b2RvcywgcHJvamVjdE5hbWUpKVxuICAgICAgICBib3hEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG5cbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYm94RGl2KTtcbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTW9kYWwoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib3hDb250YWluZXIpO1xufVxuXG5cbmZ1bmN0aW9uIGFkZFRvZG9Db250YWluZXJ4KHByb2plY3ROYW1lKSB7XG4gICAgLy8gQWRkIGNvbnRhaW5lcnMgZm9yIGVhY2ggdG9kbyBjYXRlZ29yeSB0byBiZSBkaXNwbGF5ZWQgaW4gJ21haWxib3gnIHN0eWxlXG4gICAgLy8gTG9hZCAnZ2VuZXJhbCcgYnkgZGVmYXVsdFxuICAgIGNvbnN0IHRvZG9Cb3hlcyA9IFsndG9kYXknLCAnZGFpbHknLCAnd2Vla2x5JywgJ21vbnRobHknXTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgcGFyc2VUb2RvcyA9IEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pXG5cbiAgICBib3hDb250YWluZXIuaWQgPSAnYm94LWNvbnRhaW5lcic7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9Cb3hlcy5sZW5ndGg7aSsrKSB7XG5cbiAgICAgICAgbGV0IGJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgYm94RGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBhZGRCdG4gPSBhZGRUb2RvQnRuKHByb2plY3ROYW1lKTtcblxuICAgICAgICBib3hEaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWJveCcpO1xuICAgICAgICBib3hEaXYuc2V0QXR0cmlidXRlKCduYW1lJywgdG9kb0JveGVzW2ldKVxuICAgICAgICBhZGRCdG4uaW5uZXJUZXh0ID0gJ0FkZCBUb2RvJztcblxuXG4gICAgICAgIGJveERpdkhlYWRlci5pbm5lclRleHQgPSB0b2RvQm94ZXNbaV1bMF0udG9VcHBlckNhc2UoKSArIHRvZG9Cb3hlc1tpXS5zbGljZSgxKSArICcgVG9kb3MnO1xuICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYm94RGl2SGVhZGVyKTtcbiAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICAgICAgaWYodG9kb0JveGVzW2ldID09PSAnbW9udGhseScpIHtcbiAgICAgICAgICAgIC8vIENhbGVuZGFyIGZ1bmN0aW9ucyBpbiBhIGRpZmZlcmVudCB3YXksIHNvIGFkZCBsYXRlclxuICAgICAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGxvYWRDYWxlbmRhcigpKTtcbiAgICAgICAgICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChib3hEaXYpXG4gICAgICAgIH1cbiAgICAgICAgaWYodG9kb0JveGVzW2ldID09PSAnZGFpbHknKSB7XG4gICAgICAgICAgICBsZXQgZGFpbHlUb2RvcyA9IGxvYWRUb2RvcygnZGFpbHknLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYWRkVG9kb3MoZGFpbHlUb2RvcywgcHJvamVjdE5hbWUpKVxuICAgICAgICAgICAgYm94RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gXG4gICAgICAgIGlmKHRvZG9Cb3hlc1tpXSA9PT0gJ3dlZWtseScpIHtcbiAgICAgICAgICAgIGxldCB3ZWVrbHlUb2RvcyA9IGxvYWRUb2Rvcygnd2Vla2x5JywgcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGFkZFRvZG9zKHdlZWtseVRvZG9zLCBwcm9qZWN0TmFtZSkpXG4gICAgICAgICAgICBib3hEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9XG4gICAgICAgIGlmKHRvZG9Cb3hlc1tpXSA9PT0gJ3RvZGF5JykgeyAvLyBUaGlzIGp1c3Qgc2V0cyB0b2RheSB0byBkaXNwbGF5IGJ5IGRlZmF1bHQsIGV2ZXJ5dGhpbmcgZWxzZSBpcyBzZXQgdG8gJ25vbmUnXG4gICAgICAgICAgICBsZXQgdG9kYXlUb2RvcyA9IGxvYWRUb2RvcygndG9kYXknLCBwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIGJveERpdi5hcHBlbmRDaGlsZChhZGRUb2Rvcyh0b2RheVRvZG9zLCBwcm9qZWN0TmFtZSkpXG4gICAgICAgICAgICBib3hEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChib3hEaXYpO1xuICAgIH1cbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTW9kYWwoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJveENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9zKHRvZG9zLCBwcm9qZWN0TmFtZSkge1xuICAgIC8vIFBhcnNlIHRvZG9zIGFuZCBhZGQgdG8gY29udGFpbmVyLCB0b2RvcyBpcyBhbiBhcnJheSBvZiB0b2Rvc1xuXG4gICAgaWYodG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IG5vVG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBub1RvZG9zLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gICAgICAgIG5vVG9kb3MuaW5uZXJUZXh0ID0gJ1lvdSBoYXZlIG5vIFRvZG9zISdcbiAgICAgICAgcmV0dXJuIG5vVG9kb3NcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBMb2FkIGFuZCBhZGQgdGhlIHRvZG9zIFxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVE9ET1NcIiwgdG9kb3NbaV0pXG4gICAgICAgICAgICBsZXQgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgLy8gbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgbGV0IHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgdG9kb0Jvb2wgPSB0b2Rvc1tpXS5maW5pc2hlZFxuICAgICAgICAgICAgbGV0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBpZih0b2RvQm9vbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgdG9kb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKVxuICAgICAgICAgICAgfSBlbHNlIGlmKHRvZG9Cb29sID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbmlzaGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZG9OYW1lLmlubmVyVGV4dCA9IHRvZG9zW2ldLnRpdGxlXG4gICAgICAgICAgICB0b2RvRGVzYy5pbm5lclRleHQgPSB0b2Rvc1tpXS5kZXNjO1xuICAgICAgICAgICAgcmVtb3ZlQnRuLmlubmVyVGV4dCA9ICdSZW1vdmUnO1xuICAgICAgICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1idG4nKTtcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGV0YWlscycpO1xuXG4gICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZW1vdmVUb2RvKHRvZG9zW2ldLCBwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvZG9EZXNjKVxuICAgICAgICAgICAgbmV3VG9kby5hcHBlbmRDaGlsZCh0b2RvRGV0YWlscyk7XG4gICAgICAgICAgICBuZXdUb2RvLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG5cbiAgICAgICAgICAgIG5ld1RvZG8uY2xhc3NMaXN0LmFkZCgndG9kby1jYXJkJyk7XG5cbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG5cbiAgICAgICAgICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZih0b2RvQm9vbCA9PT0gZmFsc2Upe1xuXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRmluaXNoZWQodG9kb3NbaV0sIHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgICAgICB0b2RvRGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRQYWdlKHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0b2RvQm9vbCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRmluaXNoZWQodG9kb3NbaV0sIHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgICAgICB0b2RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRQYWdlKHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kb0NvbnRhaW5lclxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBsb2FkVG9kb3ModG9kbywgcHJvamVjdE5hbWUpIHtcbiAgICAvLyBMb2FkIHRvZG9zIGJhc2VkIG9uIHByb2plY3QgbmFtZSwgb3IgYnkgYWxsIGFzIGRlZmF1bHRcblxuICAgIGNvbnN0IHByb2plY3RTdG9yYWdlID0gSlNPTi5wYXJzZShzdG9yYWdlW3Byb2plY3ROYW1lXSk7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0U3RvcmFnZS50b2Rvc1t0b2RvXS5sZW5ndGg7aSsrKSB7XG5cbiAgICAgICAgdG9kb0xpc3QucHVzaChwcm9qZWN0U3RvcmFnZS50b2Rvc1t0b2RvXVtpXSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJTkRFWCBPRlwiLCBwcm9qZWN0U3RvcmFnZS50b2Rvc1t0b2RvXS5pbmRleE9mKHByb2plY3RTdG9yYWdlLnRvZG9zW3RvZG9dW2ldKSlcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJsb2FkaW5nIHRvZG9zIGZ1bmN0aW9uXCIsIHRvZG9MaXN0KVxuXG4gICAgcmV0dXJuIHRvZG9MaXN0XG59XG5cbmZ1bmN0aW9uIHdlZWtseVRvZG9Gb3JtKCkge1xuICAgIC8vIFZhcmlhdGlvbiBvZiB0b2RvRm9ybSB3aXRoIGRheXMgb2Ygd2VlayBhcyBvcHRpb25zIGluc3RlYWQgb2YgdG9kbyB0eXBlLCBzdXBwbGVtZW50ZWQgdG8gYWRkVG9kb0Zvcm0gZnVuY3Rpb25cblxuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbXG4gICAgICAgICdzdW5kYXknLFxuICAgICAgICAnbW9uZGF5JyxcbiAgICAgICAgJ3R1ZXNkYXknLFxuICAgICAgICAnd2VkbmVzZGF5JyxcbiAgICAgICAgJ3RodXJzZGF5JyxcbiAgICAgICAgJ2ZyaWRheScsXG4gICAgICAgICdzYXR1cmRheSdcbiAgICBdXG5cblxufVxuXG5mdW5jdGlvbiBhZGRUb2RvRm9ybShwcm9qZWN0TmFtZSwgdG9kbykge1xuICAgIC8vIENyZWF0ZSBhIGZvcm0gYW5kIGFkZCB0byBtb2RhbFxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgndG9kby1mb3JtJyk7XG5cbiAgICBjb25zdCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgdG9kb1R5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gYWRkVG9kb0J0bigpXG5cbiAgICB0b2RvTmFtZS5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgdG9kb0Rlc2MuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgIHRvZG9UeXBlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcblxuICAgIHRvZG9IZWFkZXIuaW5uZXJUZXh0ID0gJ0FkZCBuZXcgVG9kbyc7XG4gICAgdG9kb05hbWUucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBuYW1lIGZvciB5b3VyIHRvZG8nO1xuICAgIHRvZG9EZXNjLnBsYWNlaG9sZGVyID0gJ0VudGVyIGEgYnJpZWYgZGVzY3JpcHRpb24gb2YgeW91ciB0b2RvJztcbiAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSAnWCc7XG4gICAgc3VibWl0QnRuLnZhbHVlID0gJ0FkZCBUb2RvJ1xuXG4gICAgY29uc3QgdG9kb1R5cGVzID0gWyd0b2RheScsICdkYWlseScsICd3ZWVrbHknLCAnbW9udGhseSddO1xuXG4gICAgaWYodG9kbyA9PT0gJ3dlZWtseScpIHtcbiAgICAgICAgY29uc3QgZGF5c09mV2VlayA9IFtcbiAgICAgICAgICAgICdzdW5kYXknLFxuICAgICAgICAgICAgJ21vbmRheScsXG4gICAgICAgICAgICAndHVlc2RheScsXG4gICAgICAgICAgICAnd2VkbmVzZGF5JyxcbiAgICAgICAgICAgICd0aHVyc2RheScsXG4gICAgICAgICAgICAnZnJpZGF5JyxcbiAgICAgICAgICAgICdzYXR1cmRheSdcbiAgICAgICAgXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRheXNPZldlZWsubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZGF5c09mV2Vla1tpXVxuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGRheXNPZldlZWtbaV1bMF0udG9VcHBlckNhc2UoKSArIGRheXNPZldlZWtbaV0uc2xpY2UoMSlcbiAgICAgICAgICAgIHRvZG9UeXBlLmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb1R5cGVzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHRvZG9UeXBlc1tpXVxuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHRvZG9UeXBlc1tpXVswXS50b1VwcGVyQ2FzZSgpICsgdG9kb1R5cGVzW2ldLnNsaWNlKDEpXG4gICAgICAgICAgICB0b2RvVHlwZS5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvVHlwZXMubGVuZ3RoO2krKykge1xuICAgIC8vICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgLy8gICAgIG9wdGlvbi52YWx1ZSA9IHRvZG9UeXBlc1tpXVxuICAgIC8vICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdG9kb1R5cGVzW2ldWzBdLnRvVXBwZXJDYXNlKCkgKyB0b2RvVHlwZXNbaV0uc2xpY2UoMSlcbiAgICAvLyAgICAgdG9kb1R5cGUuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIC8vIH1cblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZU1vZGFsKClcbiAgICB9KVxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHN0b3JhZ2VbcHJvamVjdE5hbWVdKS5udW1Ub2RvcylcbiAgICAgICAgbGV0IHRvZG9JRCA9IEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pLm51bVRvZG9zO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklEOiBcIiwgdG9kb0lEKVxuICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvICh0b2RvVHlwZS52YWx1ZSwgdG9kb05hbWUudmFsdWUsIHRvZG9EZXNjLnZhbHVlLHRvZG9JRClcbiAgICAgICAgYWRkVG9kbyh0b2RvVHlwZS52YWx1ZSwgbmV3VG9kbywgcHJvamVjdE5hbWUpXG5cbiAgICAgICAgY2xvc2VNb2RhbCgpXG4gICAgICAgIGxvYWRQYWdlKHByb2plY3ROYW1lLCB0b2RvVHlwZS52YWx1ZSk7XG5cbiAgICB9KVxuICAgIFxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvSGVhZGVyKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9UeXBlKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgXG4gICAgcmV0dXJuIHRvZG9Gb3JtXG59XG5cblxuZnVuY3Rpb24gYWRkVG9kb0J0bihwcm9qZWN0TmFtZSkge1xuICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uIGFuZCBsaXN0ZW5lciBmb3IgYWRkaW5nIHRvZG9zXG4gICAgY29uc3QgdG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvLyBVc2UgYSBzcGFuP1xuICAgIHRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tYnRuJyk7XG4gICAgdG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAvLyB0b2RvQnRuLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRvZG9UeXBlKVxuXG4gICAgdG9kb0J0bi5pbm5lclRleHQgPSAnQWRkIFRvZG8nO1xuICAgIHRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpXG4gICAgICAgIG1vZGFsWzBdLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1PREFMXCIsIG1vZGFsKVxuICAgICAgICBsZXQgdG9kb0Zvcm0gPSBhZGRUb2RvRm9ybShwcm9qZWN0TmFtZSk7XG4gICAgICAgIG1vZGFsWzBdLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICAgICAgb3Blbk1vZGFsKG1vZGFsKTtcbiAgICB9KVxuICAgIHJldHVybiB0b2RvQnRuO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuICAgIC8vIEFkZCB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgcHJvamVjdFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3QgYm94Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JveC1jb250YWluZXInKTtcblxuICAgIC8vIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJylcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1mb3JtJyk7XG4gICAgbmV3UHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcbiAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSAnWCdcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdBZGQgUHJvamVjdCc7XG5cblxuICAgIG5ld1Byb2plY3RIZWFkZXIuaW5uZXJUZXh0ID0gJ0FkZCBOZXcgUHJvamVjdCc7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RIZWFkZXIpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgIC8vIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KVxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKVxuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIGxvYWRQYWdlKHByb2plY3ROYW1lLnZhbHVlLCAndG9kYXknKTtcbiAgICB9KVxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG59XG5cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXJzKHByb2plY3ROYW1lKSB7XG4gICAgLy8gQWRkIGxpc3RlbmVycyB0byBET00gZWxlbWVudHNcbiAgICBsZXQgdG9kb09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gtaXRlbScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb09wdGlvbnMubGVuZ3RoO2krKykge1xuICAgICAgICB0b2RvT3B0aW9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBrZXl3b3JkID0gdG9kb09wdGlvbnNbaV0uaW5uZXJUZXh0WzBdLnRvTG93ZXJDYXNlKCkgKyB0b2RvT3B0aW9uc1tpXS5pbm5lclRleHQuc2xpY2UoMSk7XG4gICAgICAgICAgICBsZXQgdG9kb2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGtleXdvcmQpWzBdO1xuXG4gICAgICAgICAgICAvLyBsb2FkVG9kb0JveChrZXl3b3JkKTtcbiAgICAgICAgICAgIGFkZFRvZG9Db250YWluZXIocHJvamVjdE5hbWUsIGtleXdvcmQpO1xuXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGxvYWRUb2RvQm94KHRvZG8pIHtcbiAgICAvLyBEaXNwbGF5IGdpdmVuIHRvZG9ib3hcblxuICAgIGNvbnN0IHRvZGF5Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RvZGF5JylbMF07XG4gICAgY29uc3QgZGFpbHlCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnZGFpbHknKVswXTtcbiAgICBjb25zdCB3ZWVrbHlCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnd2Vla2x5JylbMF07XG4gICAgY29uc3QgbW9udGhseUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdtb250aGx5JylbMF07XG4gICAgaWYodG9kbyA9PT0gJ3RvZGF5Jykge1xuICAgICAgICB0b2RheUJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBkYWlseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB3ZWVrbHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbW9udGhseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZih0b2RvID09PSAnZGFpbHknKSB7XG4gICAgICAgIHRvZGF5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRhaWx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHdlZWtseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBtb250aGx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIGlmKHRvZG8gPT09ICd3ZWVrbHknKSB7XG4gICAgICAgIHRvZGF5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRhaWx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHdlZWtseUJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBtb250aGx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIGlmICh0b2RvID09PSAnbW9udGhseScpIHtcbiAgICAgICAgdG9kYXlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZGFpbHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgd2Vla2x5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG1vbnRobHlCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRXZWVrbHkocHJvamVjdE5hbWUpIHtcbiAgICAvLyBDcmVhdGUgYSB3ZWVrbHkgdG9kbyBjb250YWluZXIgd2hlcmUgeW91IGNhbiBjaG9vc2UgYW5kIGFkZCB0b2RvcyBiYXNlZCBvbiBkYXlzIG9mIHRoZSB3ZWVrLCBcbiAgICAvLyByZXR1cm5zIGEgZGl2IHdpdGggNyBib3hlcyBmb3IgZWFjaCBkYXkgb2YgdGhlIHdlZWtcbiAgICBsZXQgZGF5c09mV2VlayA9IFtcbiAgICAgICAgJ3N1bmRheScsXG4gICAgICAgICdtb25kYXknLFxuICAgICAgICAndHVlc2RheScsXG4gICAgICAgICd3ZWRuZXNkYXknLFxuICAgICAgICAndGh1cnNkYXknLFxuICAgICAgICAnZnJpZGF5JyxcbiAgICAgICAgJ3NhdHVyZGF5J1xuICAgIF1cblxuICAgIGxldCB3ZWVrZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vla2RheURpdi5jbGFzc0xpc3QuYWRkKCd3ZWVrbHknKVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRheXNPZldlZWsubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2NhbGVuZGFyLWRheScpXG5cbiAgICAgICAgZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJylcbiAgICAgICAgICAgIG1vZGFsWzBdLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNT0RBTFwiLCBtb2RhbClcbiAgICAgICAgICAgIGxldCB0b2RvRm9ybSA9IGFkZFRvZG9Gb3JtKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIG1vZGFsWzBdLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbCk7XG4gICAgICAgIH0pXG4gICAgICAgIGRheS5pbm5lclRleHQgPSBkYXlzT2ZXZWVrW2ldWzBdLnRvVXBwZXJDYXNlKCkgKyBkYXlzT2ZXZWVrW2ldLnNsaWNlKDEpO1xuICAgICAgICB3ZWVrZGF5RGl2LmFwcGVuZENoaWxkKGRheSk7XG4gICAgfVxuICAgIHJldHVybiB3ZWVrZGF5RGl2O1xufVxuXG5cbmZ1bmN0aW9uIGFza05hbWUoKSB7XG4gICAgLy9wYXNzXG59XG4vLyBCeSBkZWZhdWx0LCBsb2FkICdHZW5lcmFsJyB0b2RvcyB3aGVuIHZpc2l0bmcgdGhlIHBhZ2VcbmxvYWRQYWdlKCdnZW5lcmFsJywgJ3RvZGF5Jyk7XG4vLyBhZGRMaXN0ZW5lcnMoKTtcblxuZXhwb3J0IHsgbG9hZFBhZ2UsIGFkZExpc3RlbmVycywgbG9hZFRvZG9Cb3gsIGFkZFRvZG9Db250YWluZXIsIGFkZEJhbm5lciwgYWRkU2lkZWJhciB9IiwiLy8gQ2xhc3NlcyBmb3IgdG9kbyBvYmplY3RzXG5jb25zb2xlLmxvZygnbG9hZGluZyB0b2RvIG9iamVjdHMuLi4nKVxuXG5sZXQgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZVxuXG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxuXG5cbmNsYXNzIFRvZG8ge1xuICAgIC8vIFR5cGU6IER1ZSwgRGFpbHksIFdlZWtseSwgTW9udGhseVxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHRpdGxlLCBkZXNjLCBpZCwgZmluaXNoZWQ9ZmFsc2UpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmluaXNoZWRcbiAgICAgICAgdGhpcy5pZCA9IGlkXG4gICAgfVxufVxuXG5jbGFzcyB3ZWVrbHlUb2RvIGV4dGVuZHMgVG9kbyB7XG4gICAgLy8gV2Vla2x5IHRvZG9zLCBkYXk6IERheSBvZiB0aGUgd2Vla1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHRpdGxlLCBkZXNjLCBkYXkpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgdGl0bGUsIGRlc2MpO1xuICAgICAgICB0aGlzLmRheSA9IGRheVxuICAgIH1cbn1cblxuXG5jbGFzcyBtb250aGx5VG9kbyBleHRlbmRzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHRpdGxlLCBkZXNjLCBkYXRlKSB7XG4gICAgICAgIHN1cGVyKHR5cGUsIHRpdGxlLCBkZXNjKTtcbiAgICAgICAgdGhpcy5kYXRlO1xuICAgIH1cbn1cblxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb3MgPSB7XG4gICAgICAgICAgICAndG9kYXknOiBbXSxcbiAgICAgICAgICAgICdkYWlseSc6IFtdLFxuICAgICAgICAgICAgJ3dlZWtseSc6IFtdLFxuICAgICAgICAgICAgJ21vbnRobHknOiBbXSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm51bVRvZG9zID0gMCAvLyBudW1Ub2RvIGluY3JlbWVudHMgd2l0aCBlYWNoIG5ldyB0b2RvLCBhbmQgZnVuY3Rpb25zIGFzIGEgdW5pcXVlIElEIGZvciBlYWNoIHRvZG9cbiAgICB9XG5cbn1cblxuXG4vLyBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdkZWZhdWx0JylcblxuXG4vLyBmdW5jdGlvbiBhZGRUb2RvKCkge1xuXG4vLyB9XG5leHBvcnQge1RvZG8sIHdlZWtseVRvZG8sIG1vbnRobHlUb2RvLCBQcm9qZWN0fSIsImltcG9ydCB7IFRvZG8sIHdlZWtseVRvZG8sIFByb2plY3QsIG1vbnRobHlUb2RvfSBmcm9tICcuL3RvZG9jbGFzcy5qcyc7XG5pbXBvcnQgeyBsb2FkUGFnZSwgYWRkTGlzdGVuZXJzLCBsb2FkVG9kb0JveCwgYWRkVG9kb0NvbnRhaW5lciwgYWRkQmFubmVyLCBhZGRTaWRlYmFyIH0gZnJvbSAnLi9pbmRleC5qcyc7XG4vLyBNYW5hZ2UgQWRkaW5nL1VwZGF0aW5nIFRvZG9zIGhlcmVcblxuLy8gU3RvcmFnZVxuY29uc3Qgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZVxuLy8gY29uc3QgYWxsVG9kb3MgPSB7XG4vLyAgICAgJ2R1ZSc6IFtdLFxuLy8gICAgICdkYWlseSc6IFtdLFxuLy8gICAgICd3ZWVrbHknOiBbXSxcbi8vICAgICAnbW9udGhseSc6IFtdLFxuLy8gfVxuXG5cbi8vIGNvbnN0IG5ld1Byb2plY3QgPSB7XG4vLyAgICAgJ2R1ZSc6IFtdLFxuLy8gICAgICdkYWlseSc6IFtdLFxuLy8gICAgICd3ZWVrbHknOiBbXSxcbi8vICAgICAnbW9udGhseSc6IFtdLFxuLy8gfVxuXG4vLyBzdG9yYWdlLnNldEl0ZW0oJ25ldyBwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdCkpXG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxuXG5cblxuXG5mdW5jdGlvbiBhZGRNb2RhbCgpIHtcbiAgICAvLyBDcmVhdGUgYSBtb2RhbCBmb3IgYWRkaW5nIFRvZG9zIHRvIERhaWx5L1dlZWtseVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnRuJyk7XG4gICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gJ1gnXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgfSlcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bilcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpXG4gICAgLy8gbW9kYWwuc2V0QXR0cmlidXRlKCduYW1lJywgdG9kb1R5cGUpXG4gICAgY29uc29sZS5sb2coXCJBZGRpbmcgbW9kYWwuLi5cIilcblxuXG4gICAgLy8gQWRkIGlucHV0IGZvciBjcmVhdGluZyBhIG5ldyBUb2RvXG4gICAgLy8gbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IC8vIFRlc3Rpbmcgb25seVxuICAgIC8vIG1vZGFsLmFwcGVuZENoaWxkKGFkZFRvZG9Gb3JtKCkpXG4gICAgcmV0dXJuIG1vZGFsXG59XG5cblxuZnVuY3Rpb24gYWRkVG9kb0Zvcm0oKSB7XG4gICAgY29uc3QgdG9kb0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9BZGQuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8nKTtcblxuICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpOyAvLyBUbyBiZSBhZGRlZCBsYXRlclxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ2RhaWx5JywgJ3dlZWtseScsICdtb250aGx5J11cblxuICAgIHRvZG9IZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuXG4gICAgdG9kb0hlYWRlci5pbm5lclRleHQgPSAnU3VibWl0IG5ldyBUb2RvJ1xuICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnQWRkIFRvZG8nXG4gICAgdG9kby5wbGFjZWhvbGRlciA9ICdBZGQgYSBuZXcgdG9kbyc7XG4gICAgdG9kb0Rlc2MucGxhY2Vob2xkZXIgPSAnQnJpZWYgZGVzY3JpcHRpb24gb2YgdG9kbydcblxuICAgIHRvZG9BZGQuYXBwZW5kQ2hpbGQodG9kb0hlYWRlcik7XG4gICAgdG9kb0FkZC5hcHBlbmRDaGlsZCh0b2RvKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgcmFkaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmFkaW9EaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcblxuICAgICAgICBsZXQgY2hvaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICBjaG9pY2UudHlwZSA9ICdjaGVja2JveCc7XG4gXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgbGFiZWwuZm9yID0gY2hvaWNlO1xuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBvcHRpb25zW2ldWzBdLnRvVXBwZXJDYXNlKCkgKyBvcHRpb25zW2ldLnNsaWNlKDEpO1xuXG4gICAgICAgIGNob2ljZS52YWx1ZSA9IG9wdGlvbnNbaV1cblxuICAgICAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChjaG9pY2UpO1xuICAgICAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgICAgdG9kb0FkZC5hcHBlbmRDaGlsZChyYWRpb0Rpdik7XG4gICAgfVxuXG4gICAgdG9kb0FkZC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIHRvZG9BZGQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIGFkZFRvZG8odG9kby52YWx1ZSlcbiAgICB9KVxuICAgIHJldHVybiB0b2RvQWRkO1xufVxuXG5mdW5jdGlvbiBjaGVja1JhZGlvQnRuKGJ1dHRvbikge1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhidXR0b24pXG4gICAgICAgIGlmKGJ1dHRvbi5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnV0dG9uLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZihidXR0b24uY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBidXR0b24uY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmxldCBtb25kYXlUb2RvID0gbmV3IHdlZWtseVRvZG8oJ3dlZWtseScsICdUZXN0JywgJ1RoaXMgaXMgYSBuZXcgdGVzdCcsICdtb25kYXknKTtcblxuZnVuY3Rpb24gYWRkVG9kbyh0b2RvVHlwZSwgdG9kbywgcHJvamVjdE5hbWUpIHtcbiAgICAvLyBBZGQgYSB0b2RvIHRvIGxvY2FsIHN0b3JhZ2VcblxuICAgIGxldCB0b2RvUHJvamVjdCA9IEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pXG4gICAgXG4gICAgdG9kb1Byb2plY3RbJ3RvZG9zJ11bdG9kb1R5cGVdLnB1c2godG9kbylcbiAgICB0b2RvUHJvamVjdFsnbnVtVG9kb3MnXSArPSAxO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodG9kb1Byb2plY3QpKVxuICAgIC8vIGxvYWRUb2RvQm94KHRvZG9UeXBlLCB0b2RvVHlwZSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvLCBwcm9qZWN0TmFtZSkge1xuICAgIC8vUmVtb3ZlIGEgdG9kbyB3aGVuIGl0J3MgZGVsZXRlZC9jb21wbGV0ZWRcbiAgICAvLyBHZXQgJ3R5cGUnIG9mIHRvZG9cbiAgICBjb25zb2xlLmxvZyh0b2RvLnR5cGUpXG4gICAgbGV0IHRvZG9Qcm9qZWN0ID0gSlNPTi5wYXJzZShzdG9yYWdlW3Byb2plY3ROYW1lXSlcbiAgICBsZXQgaW5kZXhPZlRvZG8gPSB0b2RvUHJvamVjdC50b2Rvc1t0b2RvLnR5cGVdLmZpbmRJbmRleChlID0+IGUuaWQgPT09IHRvZG8uaWQpOyAvLyBDaGFuZ2VkIHRpdGxlIHRvIGlkXG4gICAgdG9kb1Byb2plY3QudG9kb3NbdG9kby50eXBlXS5zcGxpY2UoaW5kZXhPZlRvZG8sIDEpXG4gICAgc3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0b2RvUHJvamVjdCkpXG4gICAgY29uc29sZS5sb2coXCJSZW1vdmluZyB0b2RvXCIpXG4gICAgbG9hZFBhZ2UocHJvamVjdE5hbWUsIHRvZG8udHlwZSlcblxufVxuXG5cbmZ1bmN0aW9uIGNoZWNrRmluaXNoZWQodG9kbywgcHJvamVjdE5hbWUpIHtcbiAgICAvLyBNYXJrIGEgdG9kbyBhcyBmaW5pc2hlZCBvciB1bmZpbmlzaGVkXG4gICAgbGV0IHRvZG9Qcm9qZWN0ID0gSlNPTi5wYXJzZShzdG9yYWdlW3Byb2plY3ROYW1lXSlcbiAgICBsZXQgaW5kZXhPZlRvZG8gPSB0b2RvUHJvamVjdC50b2Rvc1t0b2RvLnR5cGVdLmZpbmRJbmRleChlID0+IGUuaWQgPT09IHRvZG8uaWQpO1xuICAgIGNvbnNvbGUubG9nKGluZGV4T2ZUb2RvKVxuICAgIGlmKHRvZG8uZmluaXNoZWQgPT09IHRydWUpIHtcbiAgICAgICAgdG9kby5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAgIHRvZG9Qcm9qZWN0LnRvZG9zW3RvZG8udHlwZV1baW5kZXhPZlRvZG9dID0gdG9kb1xuICAgICAgICBcbiAgICB9IGVsc2UgaWYodG9kby5maW5pc2hlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdG9kby5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgdG9kb1Byb2plY3QudG9kb3NbdG9kby50eXBlXVtpbmRleE9mVG9kb10gPSB0b2RvXG4gICAgfVxuICAgIHN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodG9kb1Byb2plY3QpKVxufVxuXG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAvLyBBZGQgYSBuZXcgcHJvamVjdCB0byB0b2RvIGxpc3QsIHByb2plY3QgaXMgSlNPTiBvYmplY3QsIHNhbWUgYXMgYWxsVG9kb3NcbiAgICAvLyB0aGF0IGlzIHN0b3JlZCB3aXRoaW4gYWxsVG9kb3NcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBzdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGlmKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHByb2plY3Q/XCIpKSB7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0TmFtZSlcbiAgICAgICAgbG9hZFBhZ2UoJ2dlbmVyYWwnLCAndG9kYXknKTtcbiAgICB9IFxufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgLy8gT3BlbiB0aGUgbW9kYWwgd2hlbiB0aGUgYXBwcmVvcHJpYXRlIGVsZW1lbnQgaXMgY2xpY2tlZCAoaW4gdGhpcyBjYXNlIHRoZSBBZGQgdG9kbyBidXR0b24pXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcbiAgICBcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb25zb2xlLmxvZyhcIk9wZW5pbmcgbW9kYWxcIiwgbW9kYWwpXG5cbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICAvLyBDbG9zZSBhIG1vZGFsIHdoZW4gdXNlciBoaXRzIHRoZSBYIGluIHRoZSB0b3Agb2YgdGhlIHNjcmVlbiBvbiB0aGUgbW9kYWwgKG9yIGNsaWNrcyBvdXRzaWRlIG1vZGFsKVxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5leHBvcnQgeyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBhZGRUb2RvLCByZW1vdmVUb2RvLCBhZGRNb2RhbCwgb3Blbk1vZGFsLCBjbG9zZU1vZGFsLCBjaGVja0ZpbmlzaGVkIH0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXBhZ2UtaGVpZ2h0OiAxMDB2aDtcXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAyNSU7XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuXFxuLmJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG59XFxuXFxuXFxuLmJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcblxcblxcbi5saW5lYnJlYWsge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLnRlc3Qge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLyogR2VuZXJhbCBzZWxlY3RvcnMgKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBCYW5uZXIgKi9cXG5cXG4jYmFubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuI3NpZGViYXIge1xcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtaGVpZ2h0KTtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuI3NpZGViYXIgPiAuYnRuIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmJ0bi1zbSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJveC1pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uYm94LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbiAgICBjb2xvcjogcmdiKDUwLDUwLDUwKTtcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5yZW1vdmUtcHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogVG9kbyBjb250ZW50ICovXFxuXFxuI2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLDIzMCwyMzApO1xcbn1cXG5cXG4udG9kby1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLDIzMCwyMzApO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWJveCA+IC5oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMTAwLDEwMCwxMDApO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udG9kby1ib3ggPiB1bCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcblxcbi50b2RvLWJveCA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbnVsID4gbGkge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5cXG4udG9kby1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4udG9kby1kZXRhaWxzID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLXJpZ2h0OjEwMHB4O1xcbn1cXG5cXG5cXG4uZmluaXNoZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucmVtb3ZlLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDY2LCA2Nik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udG9kby1jYXJkID4gcCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLnRvZG8tY2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxufVxcblxcbi5jYWxlbmRhci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcblxcbi5jYWxlbmRhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA3NzBweDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNhbC1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDc1LCA3NSwgNzUpO1xcbn1cXG5cXG4uY2FsLWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIG1hcmdpbjogMXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcblxcbi5tb250aC1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tb250aC1oZWFkZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ubW9udGgtbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzOHB4O1xcbn1cXG5cXG4uY2FsZW5kYXItZGF5IHtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG59XFxuXFxuXFxuLndlZWtseSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi53ZWVrbHkgPiAuY2FsZW5kYXItZGF5IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4vKiBNb2RhbHMgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjcpO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tc2lkZWJhci13aWR0aCkpOyAqL1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtaGVpZ2h0KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMCwyMDAsMjAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiBwIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IC5idG4ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gLmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gW3R5cGV+PSd0ZXh0J10ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5tb2RhbC1mb3JtID4gdGV4dGFyZWEge1xcblxcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5tb2RhbC1mb3JtLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwxMzUsMTM1KTtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGxlZnQ6IDBweDsgKi9cXG4gICAgcmlnaHQ6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCByZ2IoNTAsNTAsNTApO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IC5jbG9zZS1idG4ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7IFxcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LDEzNSwxMzUpO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjpyZ2IoNDAsNDAsNDApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9kby1mb3JtID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4udG9kby1mb3JtID4gLmNsb3NlLWJ0biB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweDsgXFxufVxcbi5mb3JtLWlucHV0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmFkZC10b2RvLWJ0biB7XFxuICAgIC8qICAqL1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsMTM1LDEzNSk7XFxuICAgIFxcbn1cXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwxMDAsMTAwKTtcXG59XFxuXFxuLmFkZC10b2RvLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsNzUsNzUpO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMwLDIzMCwyMzApO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDsgKi9cXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgICAvKiByaWdodDogMTBweDsgKi9cXG4gICAgLyogdG9wOiAxMHB4OyAqL1xcbn1cXG5cXG4uY2xvc2UtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuLyogQ2FsZW5kYXIgTW9kYWwgKi9cXG4ucGFkZGluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxufVxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICBcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLCAubmF2LWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDM2cHg7XFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuXFxuLnRlc3QtYm94IHtcXG4gICAgd2lkdGg6IDE1MDBweDtcXG4gICAgaGVpZ2h0OiAxNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxSEFBcUg7SUFDckgsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksa0NBQWtDO0FBQ3RDOzs7QUFHQTtJQUNJLG9DQUFvQztBQUN4Qzs7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7OztBQUdBLFlBQVk7O0FBRVo7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJ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UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsWUFBWTtJQUNoQjs7O0FBR0o7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcGFnZS1oZWlnaHQ6IDEwMHZoO1xcbiAgICAtLXNpZGViYXItd2lkdGg6IDI1JTtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5cXG4uYnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcbi5idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbn1cXG5cXG5cXG4uYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG59XFxuXFxuXFxuLmxpbmVicmVhayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4udGVzdCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4vKiBHZW5lcmFsIHNlbGVjdG9ycyAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIEJhbm5lciAqL1xcblxcbiNiYW5uZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG4jc2lkZWJhciB7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGhlaWdodDogdmFyKC0tcGFnZS1oZWlnaHQpO1xcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbn1cXG5cXG4jc2lkZWJhciA+IC5idG4ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYnRuLXNtIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYm94LWl0ZW0ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5ib3gtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxuICAgIGNvbG9yOiByZ2IoNTAsNTAsNTApO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3Qge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBUb2RvIGNvbnRlbnQgKi9cXG5cXG4jYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsMjMwLDIzMCk7XFxufVxcblxcbi50b2RvLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsMjMwLDIzMCk7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tYm94ID4gLmhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYigxMDAsMTAwLDEwMCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi50b2RvLWJveCA+IHVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG59XFxuXFxuLnRvZG8tYm94ID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxudWwgPiBsaSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcblxcbi50b2RvLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9kby1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi50b2RvLWRldGFpbHMgPiBwIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6MTAwcHg7XFxufVxcblxcblxcbi5maW5pc2hlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5yZW1vdmUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgNjYsIDY2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50b2RvLWNhcmQgPiBwIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4udG9kby1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuLmNhbGVuZGFyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLmNhbGVuZGFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDc3MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FsLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzUsIDc1LCA3NSk7XFxufVxcblxcbi5jYWwtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuXFxuLm1vbnRoLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1vbnRoLWhlYWRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5tb250aC1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDM4cHg7XFxufVxcblxcbi5jYWxlbmRhci1kYXkge1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG5cXG5cXG4ud2Vla2x5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLndlZWtseSA+IC5jYWxlbmRhci1kYXkge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcbi8qIE1vZGFscyAqL1xcblxcbi5tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNyk7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7ICovXFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogdmFyKC0tcGFnZS1oZWlnaHQpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAwLDIwMCwyMDApO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IHAge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gLmJ0biB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiAuYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiBbdHlwZX49J3RleHQnXSB7XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiB0ZXh0YXJlYSB7XFxuXFxuICAgIGhlaWdodDogNzVweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0tYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LDEzNSwxMzUpO1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLyogbGVmdDogMHB4OyAqL1xcbiAgICByaWdodDogNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IHJpZ2h0O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IHJnYig1MCw1MCw1MCk7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gLmNsb3NlLWJ0biB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweDsgXFxufVxcblxcbi50b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsMTM1LDEzNSk7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOnJnYig0MCw0MCw0MCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRvZG8tZm9ybSA+IHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiBzZWxlY3R7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b2RvLWZvcm0gPiBidXR0b24ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi50b2RvLWZvcm0gPiAuY2xvc2UtYnRuIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogNXB4OyBcXG59XFxuLmZvcm0taW5wdXQge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRvZG8tZm9ybSA+IGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuIHtcXG4gICAgLyogICovXFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwxMzUsMTM1KTtcXG4gICAgXFxufVxcbi5hZGQtdG9kby1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLDEwMCwxMDApO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSw3NSw3NSk7XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMzAsMjMwLDIzMCk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4OyAqL1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAgIC8qIHJpZ2h0OiAxMHB4OyAqL1xcbiAgICAvKiB0b3A6IDEwcHg7ICovXFxufVxcblxcbi5jbG9zZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbn1cXG4vKiBDYWxlbmRhciBNb2RhbCAqL1xcbi5wYWRkaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIFxcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTUlO1xcbiAgICB9XFxuXFxuICAgIC5oZWFkZXIsIC5uYXYtaGVhZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcblxcbn1cXG5cXG5cXG4udGVzdC1ib3gge1xcbiAgICB3aWR0aDogMTUwMHB4O1xcbiAgICBoZWlnaHQ6IDE1MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsid2Vla2RheXMiLCJtb250aHMiLCJkdCIsIkRhdGUiLCJjdXJyZW50IiwibW9udGhUb2RvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImxvYWRDYWxlbmRhciIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXlzSW5Nb250aCIsImdldERhdGUiLCJmaXJzdERheU9mTW9udGgiLCJsYXN0RGF5T2ZNb250aCIsImRhdGVTdHJpbmciLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwiZGF5IiwibGFzdERhdGVTdHJpbmciLCJwYWRkaW5nRGF5cyIsImluZGV4T2YiLCJzcGxpdCIsIm5leHRQYWRkaW5nRGF5cyIsImxlbmd0aCIsIm1vbnRobHlEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0QXR0cmlidXRlIiwiY2FsZW5kYXJDb250YWluZXIiLCJjYWxlbmRhciIsIm1vbnRoSGVhZGVyIiwiY2FsZW5kYXJIZWFkZXIiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsImFkZE1vbnRoSGVhZGVyIiwiYWRkV2Vla2RheUhlYWRlciIsImFkZERheVNxdWFyZXMiLCJtb250aFRpdGxlIiwicHJldmlvdXNNb250aCIsIm5leHRNb250aCIsImFkZE1vbnRoTmF2aWdhdGlvbiIsIndlZWtkYXlIZWFkZXIiLCJpIiwiZGF5SGVhZGVyIiwiYnV0dG9uIiwiZGlyZWN0aW9uIiwibW9udGhDYWxlbmRhciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tDdXJyZW50IiwiaW5uZXJIVE1MIiwiY29uc29sZSIsImxvZyIsImNhbGVuZGFyRGF5Iiwib3Blbk1vZGFsIiwiYWRkTW9kYWwiLCJ0b2RvVHlwZSIsIm1vZGFsIiwidG9kb0Zvcm0iLCJwYXNzIiwibW9udGhEYXRlIiwidG9kbyIsInRvZG9EZXNjIiwic3VibWl0QnRuIiwiY2xvc2VCdG4iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImNsb3NlTW9kYWwiLCJtb2RhbEhlYWRlciIsInByaW50RGF0ZUluZm8iLCJkYXRlIiwiZ2V0RGF5IiwiZGF0ZVBhcmFtcyIsImZpcnN0RGF5IiwiZ2V0WWVhciIsIlRvZG8iLCJ3ZWVrbHlUb2RvIiwibW9udGhseVRvZG8iLCJQcm9qZWN0IiwidGVzdCIsImFkZFByb2plY3QiLCJyZW1vdmVQcm9qZWN0IiwiYWRkVG9kbyIsInJlbW92ZVRvZG8iLCJjaGVja0ZpbmlzaGVkIiwic3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImxvYWRQYWdlIiwicHJvamVjdE5hbWUiLCJib2R5IiwiZ2VuZXJhbFRvZG9zIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50RGl2IiwiYm94Q29udGFpbmVyIiwiaWQiLCJhZGRCYW5uZXIiLCJhZGRTaWRlYmFyIiwiYWRkVG9kb0NvbnRhaW5lciIsImFkZExpc3RlbmVycyIsImJhbm5lciIsImJhbm5lckhlYWRlciIsInNpZGViYXIiLCJhZGRQcm9qZWN0QnRuIiwiYm94ZXMiLCJsaW5lYnJlYWsiLCJwcm9qZWN0SGVhZGVyIiwiYWRkTmV3UHJvamVjdCIsIm5hdkhlYWRlciIsInByb2plY3RzIiwiT2JqZWN0Iiwia2V5cyIsImFwcGVuZCIsImFkZFByb2plY3RzVG9TaWRlYmFyIiwicHJvamVjdCIsInByb2plY3REaXYiLCJwcm9qZWN0U2VsZWN0IiwicmVtb3ZlUHJvamVjdEJ0biIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiYm94RGl2IiwiYm94RGl2SGVhZGVyIiwiYWRkQnRuIiwiYWRkVG9kb0J0biIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJsb2FkV2Vla2x5IiwidG9kb3MiLCJsb2FkVG9kb3MiLCJhZGRUb2RvcyIsImFkZFRvZG9Db250YWluZXJ4IiwidG9kb0JveGVzIiwicGFyc2VUb2RvcyIsInBhcnNlIiwiZGFpbHlUb2RvcyIsIndlZWtseVRvZG9zIiwidG9kYXlUb2RvcyIsIm5vVG9kb3MiLCJ0b2RvQ29udGFpbmVyIiwibmV3VG9kbyIsInRvZG9EZXRhaWxzIiwidG9kb05hbWUiLCJ0b2RvQm9vbCIsImZpbmlzaGVkIiwicmVtb3ZlQnRuIiwicmVtb3ZlIiwidGl0bGUiLCJkZXNjIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9qZWN0U3RvcmFnZSIsInRvZG9MaXN0IiwicHVzaCIsIndlZWtseVRvZG9Gb3JtIiwiZGF5c09mV2VlayIsImFkZFRvZG9Gb3JtIiwidG9kb0hlYWRlciIsInRvZG9UeXBlcyIsIm9wdGlvbiIsIm51bVRvZG9zIiwidG9kb0lEIiwidG9kb0J0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZXdQcm9qZWN0Rm9ybSIsIm5ld1Byb2plY3RIZWFkZXIiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJ0b2RvT3B0aW9ucyIsImtleXdvcmQiLCJ0b0xvd2VyQ2FzZSIsInRvZG9ib3giLCJsb2FkVG9kb0JveCIsInRvZGF5Qm94IiwiZGFpbHlCb3giLCJ3ZWVrbHlCb3giLCJtb250aGx5Qm94Iiwid2Vla2RheURpdiIsImFza05hbWUiLCJuYW1lIiwidG9kb0FkZCIsIm9wdGlvbnMiLCJyYWRpb0RpdiIsImNob2ljZSIsImxhYmVsIiwiZm9yIiwiY2hlY2tSYWRpb0J0biIsImNoZWNrZWQiLCJtb25kYXlUb2RvIiwidG9kb1Byb2plY3QiLCJpbmRleE9mVG9kbyIsImZpbmRJbmRleCIsImUiLCJzcGxpY2UiLCJuZXdQcm9qZWN0IiwiY29uZmlybSIsInJlbW92ZUl0ZW0iXSwic291cmNlUm9vdCI6IiJ9