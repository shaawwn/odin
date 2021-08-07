import { addNavbar, clearContent, addBottomBorder } from './index.js'
// import { clearContent } from './menu.js'

// let mainBody = document.querySelector('#content')

function addContactInfo() {
    let mainBody = document.querySelector('#content')
    clearContent()
    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contact-details')

    const reservations = document.createElement('h2')
    const phone = document.createElement('h2')
    const email = document.createElement('h2')

    reservations.innerText = 'For reservations or anything else, contact us!'
    phone.innerText = 'Phone: (555)555-5555'
    email.innerText = 'Email: vtt@email.com'

    contactDiv.appendChild(reservations)
    contactDiv.appendChild(phone)
    contactDiv.appendChild(email)
    mainBody.appendChild(contactDiv)
    addBottomBorder();
}
// clearContent()

export { addContactInfo }