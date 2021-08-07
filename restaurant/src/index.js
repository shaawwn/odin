console.log("Scripts loading.....")
import './style.css';
import Beer from './beers.jpeg';
import Pizza from './pizza.jpeg';
import Nachos from './nachos.jpeg';
import Hotwings from './hotwings.jpeg';
import { loadMenu, addMedia } from './menu.js';
import { addContactInfo } from './contact.js';

const mainBody = document.querySelector('#content');

function addDiv() {
    const jumbo = document.createElement('div')
    jumbo.setAttribute('id', 'jumbo')

    //Create Title, and brief description
    const header = document.createElement('h1')
    header.setAttribute('id', 'biz-name')
    header.innerText = 'Village Top Tavern'

    const details = document.createElement('div')
    details.classList.add('biz-details')
    
    const hours = document.createElement('p')
    const contact = document.createElement('p')

    hours.innerText = 'Open daily from 4pm-12am!'
    contact.innerText = 'Call and make a reservation today!'

    details.appendChild(hours)
    details.appendChild(contact)

    const background = document.createElement('img')
    background.classList.add('jumbo-image')
    background.setAttribute('src', './media_test/crowded-bar.png')

    jumbo.appendChild(header)
    jumbo.appendChild(details)
    jumbo.append(background)

    mainBody.appendChild(jumbo)
}

// function addMedia() {
//     const mainBody = document.querySelector('#content')
//     const mediaDiv = document.createElement('div')
//     mediaDiv.setAttribute('id', 'media')

//     const beerImage = new Image()
//     const hotWings = new Image()
//     const nachoImage = new Image()
//     const pizzaImage = new Image()

//     beerImage.src = Beer
//     beerImage.classList.add('menu-image');
//     hotWings.src = Hotwings;
//     hotWings.classList.add('menu-image');
//     nachoImage.src = Nachos;
//     nachoImage.classList.add('menu-image');
//     pizzaImage.src = Pizza;
//     pizzaImage.classList.add('menu-image');

//     mediaDiv.appendChild(beerImage);
//     mediaDiv.appendChild(hotWings);
//     mediaDiv.appendChild(nachoImage);
//     mediaDiv.appendChild(pizzaImage);

//     mainBody.appendChild(mediaDiv)
// }

function addDescription() {
    let description = document.createElement('div')
    description.setAttribute('id', 'biz-description')

    let descText = document.createElement('p')
    descText.innerText = 'VTT is your go to place for good food, good drinks, and good atmospohere! Happy hour from 4-6 daily!'
    description.appendChild(descText)

    mainBody.appendChild(description)

}

function addNavbar() {
    let navbar = document.createElement('div')
    navbar.setAttribute('id', 'navbar')

    let home = document.createElement('h4')
    let menu = document.createElement('h4')
    let contact = document.createElement('h4')

    menu.addEventListener('click', function() {
        loadMenu();
        // addMedia();
    })

    home.addEventListener('click', function() {
        // Redirect to homepage
        loadHome()
    })

    contact.addEventListener('click', function() {
        addContactInfo();
    })
    home.classList.add('nav-item')
    menu.classList.add('nav-item')
    contact.classList.add('nav-item')

    home.innerText = 'Home'
    menu.innerText = 'Menu'
    contact.innerText = 'Contact'

    navbar.appendChild(home)
    navbar.appendChild(menu)
    navbar.appendChild(contact)

    mainBody.appendChild(navbar)

}

function addBottomBorder() {
    let bottomBorder = document.createElement('div')
    bottomBorder.setAttribute('id', 'bottom-border')

    let address = document.createElement('div')
    address.setAttribute('id', 'bottom-text')

    address.innerText = 'Village Top Tavern 555 Main St. Smalltown, USA'

    bottomBorder.appendChild(address)
    mainBody.appendChild(bottomBorder)
}

function clearContent() {

    let mainBody = document.querySelector('#content')
    mainBody.innerHTML = ''
    addNavbar()
    // addBottomBorder()
}

function loadHome() {
    mainBody.innerHTML = '';
    addNavbar()
    addDiv()
    addDescription()
    addBottomBorder()
}

loadHome()

export { addNavbar, addBottomBorder, clearContent }

/* <div id="navbar">
<h4 class="nav-item">Home</h4>
<h4 class="nav-item">Menu</h4>
<h4 class="nav-item">Contact</h4>
</div>
<div id="jumbo">
<h1 id="biz-name">Village Top Tavern</h1>
<div class="biz-details">
    <p>Open daily from 4pm-12am</p>
    <p>Call or make reservations today!</p>
</div>
<img class="jumbo-image" src="./media_test/crowded-bar.png">
</div>
<div id="biz-description">
<p>VTT is your go to place for good drinks, good food, and
    good atmosphere!  Happy Hour from 4-6, stop by and join the fun!
</p>
</div>
<div id="media">
<img class="menu-image" src="./media_test/nachos.jpeg">
<img class="menu-image" src="./media_test/pizza.jpeg">
<img class="menu-image" src="./media_test/hotwings.jpeg">
<img class="menu-image" src="./media_test/beers.jpeg">
</div> */