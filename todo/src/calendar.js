console.log("Loading monthly todo calendar....")

let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octorber", "November", "December"]
let dt = new Date()
function loadCalendar() {

    console.log("Creating calendar...")

    let date = dt.getDate();
    let day = dt.getDay()
    let year = dt.getFullYear()
    let month = dt.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1)
    const lastDayOfMonth = new Date(year, month + 1, 0)

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year:'numeric',
        month:'numeric',
        day:'numeric',
    })

    const lastDateString = lastDayOfMonth .toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    })

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    const nextPaddingDays = weekdays.length - weekdays.indexOf(lastDateString.split(', ')[0]);

    let monthlyDiv = document.createElement('div')
    monthlyDiv.classList.add('todo-box')
    monthlyDiv.style.display = 'none';
    monthlyDiv.setAttribute('name', 'monthly')

    // Create a 7 x 5 grid representing days

    const calendarContainer = document.createElement('div');
    const calendar = document.createElement('div');
    const calendarHeader = document.createElement('div');
    calendar.classList.add('calendar')
    calendarHeader.classList.add('cal-header-container');

    calendarContainer.appendChild(calendarHeader);
    calendarContainer.appendChild(calendar);


    // Add weekday headers
    for(let i = 0; i < weekdays.length;i++) {
        let calHeader = document.createElement('div');
        calHeader.classList.add('cal-header');

        calHeader.innerText = weekdays[i];
        calendar.appendChild(calHeader);
    }

    for(let i = 0; i < paddingDays + daysInMonth + nextPaddingDays - 1; i++) {
        let calendarDay = document.createElement('div');
        calendarDay.classList.add('calendar-day');

        if (i < paddingDays || i >= paddingDays + daysInMonth) {
            calendarDay.classList.add('padding')
        } else {
            calendarDay.innerText = (i - paddingDays) + 1
        }



        calendar.appendChild(calendarDay);
    }
    // monthlyDiv.appendChild(calendarContainer)
    monthlyDiv.appendChild(calendar)
    return monthlyDiv

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

printDateInfo(dt)
export { loadCalendar }