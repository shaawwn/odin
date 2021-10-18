console.log("Loading monthly todo calendar....")

let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function loadCalendar() {

    console.log("Creating calendar...")

    let div = document.createElement('div')
    div.classList.add('test-box')
    div.style.display = 'none';
    div.setAttribute('name', 'monthly')
    return div

}

export { loadCalendar }