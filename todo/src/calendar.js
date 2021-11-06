// console.log("Loading monthly todo calendar....")


let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let dt = new Date()
let current = 0;
let monthTodo = document.getElementsByName('monthly') // Container for the calendar, when a month is changed, this gets reset and replaced with currently selected month

function loadCalendar() {
    // console.log("MONTH + CURRENT", dt.getMonth(), current)
    // let date = dt.getDate();
    // let day = dt.getDay()
    let year = dt.getFullYear()
    let month = dt.getMonth() + current;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1)
    const lastDayOfMonth = new Date(year, month + 1, 0)

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year:'numeric',
        month:'numeric',
        day:'numeric',
    })

    const lastDateString = lastDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    })

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    const nextPaddingDays = weekdays.length - weekdays.indexOf(lastDateString.split(', ')[0]);

    // Create elements and set attributes
    const monthlyDiv = document.createElement('div')
    monthlyDiv.classList.add('todo-box')
    monthlyDiv.style.display = 'none';
    monthlyDiv.setAttribute('name', 'monthly')

    const calendarContainer = document.createElement('div');
    const calendar = document.createElement('div');
    const monthHeader = document.createElement('p')
    const calendarHeader = document.createElement('div');

    calendar.classList.add('calendar')
    calendarHeader.classList.add('cal-header-container');
    monthHeader.classList.add('month-header');
    monthHeader.innerText = months[month];

    // calendarContainer.appendChild(monthHeader);
    calendarContainer.appendChild(addMonthHeader(month));
    calendarContainer.appendChild(calendar);

    // Add weekday headers
    calendar.appendChild(addWeekdayHeader())

    // Add day squares to calendar
    addDaySquares(calendar, paddingDays, daysInMonth, nextPaddingDays)

    monthlyDiv.appendChild(calendarContainer)
    // return monthlyDiv
    // calendarContainer.append(addModal('monthly'))
    return calendarContainer;
}


function addMonthHeader(month) {
    // Add the name of the current month at the top of the calendar, as well as the ability to switch months

    // 'Current' defaults to the given month parameter (current month), adding/subtracting form current will switch months
    // let current = 0;
    const monthHeader = document.createElement('div');
    monthHeader.classList.add('month-header-container');

    const monthTitle = document.createElement('p')
    monthTitle.classList.add('month-header');
    monthTitle.innerText = months[month];
    const previousMonth = document.createElement('button');
    const nextMonth = document.createElement('button');

    addMonthNavigation(previousMonth, 'previous');
    addMonthNavigation(nextMonth, 'next');

    previousMonth.classList.add('btn');
    previousMonth.classList.add('month-nav')
    nextMonth.classList.add('month-nav');
    nextMonth.classList.add('btn')

    previousMonth.innerText = '<'
    nextMonth.innerText = '>'

    monthHeader.appendChild(previousMonth);
    monthHeader.appendChild(monthTitle);
    monthHeader.appendChild(nextMonth);

    return monthHeader;
}

function addWeekdayHeader() {
    // Add weekday headers to the calendar('Monday', 'Tuesday', 'etc)
    const weekdayHeader = document.createElement('div');
    weekdayHeader.classList.add('cal-header-container');
    
    for (let i = 0; i < weekdays.length;i++) {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('cal-header');
        dayHeader.innerText = weekdays[i];
        weekdayHeader.appendChild(dayHeader)
    }
    return weekdayHeader;
}

function addMonthNavigation(button, direction) {
    // Add click listeners to previous/next month Buttons to switch months in the calendar
    let month = document.getElementsByName('monthly')
    let monthCalendar = document.getElementsByClassName('calendar')
    button.addEventListener('click', () => {
        // Nav moves left or right
        if(direction === 'previous') {
            current -= 1
            current = checkCurrent(current);
            monthTodo[0].innerHTML = '';
            monthTodo[0].appendChild(loadCalendar())
        } else if(direction === 'next') {
            current += 1
            current = checkCurrent(current)
            monthTodo[0].innerHTML = '';
            monthTodo[0].appendChild(loadCalendar())
        }
    })
}

function checkCurrent(current) {
    // Resets 'current' to 0 if greater than 12, since numbers higher than that are out of index for months
    if(current + dt.getMonth() > 11) {
        console.log("Invalid current", current + dt.getMonth())
        return -dt.getMonth()
    } else if(dt.getMonth() + current < 0) {
        // Roll over so that it will return index 12 for December, return the difference between 12 and dt.getMonth()
        console.log("Previous year")
        return 11 - dt.getMonth()
    }
    console.log("Valid current", current)
    return current

}


function addDaySquares(calendar, paddingDays, daysInMonth, nextPaddingDays) {
    for(let i = 0; i < paddingDays + daysInMonth + nextPaddingDays - 1; i++) {
        let calendarDay = document.createElement('div');
        calendarDay.classList.add('calendar-day');

        if (i < paddingDays || i >= paddingDays + daysInMonth) {
            calendarDay.classList.add('padding')
        } else {
            calendarDay.innerText = (i - paddingDays) + 1
            calendarDay.addEventListener('click', () => {
                openModal(calendarDay)
            })
        }
        calendar.appendChild(calendarDay);
    }
}


function addModal(todoType) {
    // Add a modal to the calendar for adding new Todos, potentially not unique to calendar, so maybe move to another file and export
    // 4 types of todos: Today(Unique), Daily, Weekly, Monthly, adjust the form accordingly
    
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const todoForm = document.createElement('div');
    todoForm.classList.add('add-todo');



    // Create a form for adding new Todos, and add it to the todo form div
    if(todoType === 'daily') {
        pass
    } else if(todoType === 'today') {
        pass
    } else if(todoType === 'weekly') {
        pass
    } else if(todoType === 'monthly') {
        // Here's where I add stuff for now

        const monthDate = document.createElement('p');
        const todo = document.createElement('input');
        const todoDesc = document.createElement('textarea');
        const submitBtn = document.createElement('input');
        const closeBtn = document.createElement('span');

        monthDate.classList.add('header');
        monthDate.classList.add('modal-header')
        // monthDate.innerText = months[dt.getMonth()]
        todo.type = 'text';
        todo.placeholder = 'Add todo'
        todoDesc.placeholder = 'Add a description of the todo here'
        submitBtn.type = 'submit';
        submitBtn.value = 'Add Todo'
        submitBtn.classList.add('btn')
        closeBtn.classList.add('close-btn');
        closeBtn.innerText = 'X';
        closeBtn.addEventListener('click', () => {
            closeModal(modal)
        })

        todoForm.appendChild(monthDate)
        todoForm.appendChild(todo)
        todoForm.appendChild(todoDesc)
        todoForm.appendChild(submitBtn)
        todoForm.appendChild(closeBtn);
    }

    // todoForm.appendChild(todo)
    // todoForm.appendChild(submitBtn)
    modal.appendChild(todoForm);
    return modal
}

function closeModal(modal) {
    // By clicking a close button close any open modal
    modal.style.display = 'none';
}

function openModal(day) {
    // Add an event lsitener to open up the add todo modal
    let modal = document.getElementsByClassName('modal');
    let modalHeader = document.getElementsByClassName('modal-header')[0];
    let monthDate = months[dt.getMonth() + current] + " " + day.innerText

    modalHeader.innerText = ''
    modalHeader.innerText = months[dt.getMonth() + current] + " " + day.innerText
    modal[0].style.display = 'block';
}

function printDateInfo(date) {

    console.log("Date: ", date.getDate())
    console.log("Day: ", weekdays[date.getDay()])
    console.log("Year: ", date.getFullYear())
    console.log("Month: ", months[date.getMonth()])

    let dateParams = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    console.log("Formated date string", date.toLocaleDateString('en-US', dateParams))

    // Can get days in month by getting the date of the last day in a month.
    let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    let firstDay = new Date(date.getYear(), date.getMonth(), 1).getDay()
    console.log("Days in month: ", daysInMonth, firstDay)


}

document.addEventListener("DOMContentLoaded", () => {

})


// printDateInfo(dt)
export { loadCalendar }