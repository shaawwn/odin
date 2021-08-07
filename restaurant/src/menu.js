import { addNavbar, addBottomBorder, clearContent } from './index.js'
import Beer from './beers.jpeg';
import Pizza from './pizza.jpeg';
import Nachos from './nachos.jpeg';
import Hotwings from './hotwings.jpeg';

let mainBody = document.querySelector('#content')
function addMedia() {
    const mainBody = document.querySelector('#content')
    const mediaDiv = document.createElement('div')
    mediaDiv.setAttribute('id', 'media')

    const beerImage = new Image()
    const hotWings = new Image()
    const nachoImage = new Image()
    const pizzaImage = new Image()

    beerImage.src = Beer
    beerImage.classList.add('menu-image');
    hotWings.src = Hotwings;
    hotWings.classList.add('menu-image');
    nachoImage.src = Nachos;
    nachoImage.classList.add('menu-image');
    pizzaImage.src = Pizza;
    pizzaImage.classList.add('menu-image');

    // Create Menu item card
    addMenuItem(beerImage, 'Draft Beer $7', 'Draft beer on tap!')
    addMenuItem(hotWings, 'Hot wings $10', 'BBQ or Buffalo wings deep fried!')
    addMenuItem(nachoImage, 'Nachos $12', 'Nachos with shredded cheese and fresh veggies')
    addMenuItem(pizzaImage, 'House Pizza $18', 'Ask servers about our toppings!')

    mainBody.appendChild(mediaDiv)
}

function addMenuItem(item, name, description) {
    const testCard = document.createElement('div')
    testCard.classList.add('menu-card')

    const menuDesc = document.createElement('div')
    menuDesc.classList.add('menu-item-desc')

    const itemName = document.createElement('h3')
    const itemDesc = document.createElement('p')

    itemName.classList.add('item-name')
    itemDesc.classList.add('item-description')

    itemName.innerText = name
    itemDesc.innerText = description

    menuDesc.appendChild(itemName)
    menuDesc.appendChild(itemDesc)

    testCard.appendChild(menuDesc)
    testCard.appendChild(item)
    
    mainBody.appendChild(testCard)
}

function loadMenu() {
    console.log("Loading menu....")
    clearContent()
    addMedia()
    addBottomBorder();
}

export { loadMenu, addMedia }