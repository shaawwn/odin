console.log("Loading frontpage navigation scripts...")

let aboutPage = document.querySelector('#about');
let menuPage = document.querySelector('.container-menu');

function navBarListeners() {
    // Add event listeners to navbar buttons;
    let navbarButtons = document.querySelectorAll('.navItem')

    navbarButtons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.innerText === 'Menu') {
                aboutPage.style.display = 'none';
                // contactPage.style.display = 'none';
                menuPage.style.display = 'flex'
            } else if(button.innerText === 'About') {
                console.log('About')
                aboutPage.style.display = 'flex';
                // contactPage.style.display = 'none';
                menuPage.style.display = 'none';
            } else if(button.innerText === 'Contact') {
                aboutPage.style.display = 'none';
                // contactPage.style.display = 'none';
                menuPage.style.display = 'flex'
                console.log("Contact")
            }
        })
    })
}

navBarListeners()