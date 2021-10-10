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

function textMenu() {
    //Add text only menu

    const textMenu = document.createElement('div');
    textMenu.classList.add('text-menu');

    const textMenuHeader = document.createElement('h1');
    const appetizersDiv = document.createElement('div');
    const drinksDiv = document.createElement('div');
    const entresDiv = document.createElement('div');

    appetizersDiv.classList.add('text-menu-cat');
    drinksDiv.classList.add('text-menu-cat');
    entresDiv.classList.add('text-menu-cat')
    textMenuHeader.classList.add('text-menu-cat')
    
    textMenuHeader.innerText = 'Menu';
    textMenu.appendChild(textMenuHeader);

    // Apps
    const appetizerHeader = document.createElement('h2')
    appetizerHeader.classList.add('text-menu-content')
    appetizerHeader.innerText = 'Appetizers'
    appetizersDiv.appendChild(appetizerHeader);
    addTextMenuItem(appetizersDiv, 'Hot Wings', '8')
    addTextMenuItem(appetizersDiv, 'French Fries', '7')
    addTextMenuItem(appetizersDiv, 'Curly Garlic Fries', '8')
    addTextMenuItem(appetizersDiv, 'Popcorn Shrimp', '10')

    textMenu.appendChild(appetizersDiv);

    // Entres
    const entreHeader = document.createElement('h2');
    entreHeader.classList.add('text-menu-content');
    entreHeader.innerText = 'Entres'
    entresDiv.appendChild(entreHeader);
    addTextMenuItem(entresDiv, 'House Burder', '14')
    addTextMenuItem(entresDiv, 'House Salad', '12')
    addTextMenuItem(entresDiv, 'Broiled Mackeral', '15')
    addTextMenuItem(entresDiv, 'Grilled Salmon', '18')

    textMenu.appendChild(entresDiv)

    // Drinks
    const drinkHeader = document.createElement('h2');
    drinkHeader.classList.add('text-menu-content')
    drinkHeader.innerText = 'Drinks';
    drinksDiv.appendChild(drinkHeader);
    addTextMenuItem(drinksDiv, 'Draft', '8')
    addTextMenuItem(drinksDiv, 'Wine', '10')
    addTextMenuItem(drinksDiv, 'Cocktail', '12')
    addTextMenuItem(drinksDiv, 'Soda', '4')

    
    textMenu.appendChild(drinksDiv)

    mainBody.appendChild(textMenu)
}

function addTextMenuItem(category, menuName, menuDesc) {
    // Add menu elements to the text menu

    const textMenuItem = document.createElement('div');
    const textMenuName = document.createElement('h4');
    const textMenuDesc = document.createElement('h4');

    textMenuName.innerText = menuName;
    textMenuDesc.innerText = menuDesc;

    textMenuItem.classList.add('text-menu-item');
    textMenuName.classList.add('text-menu-content');
    textMenuDesc.classList.add('text-menu-content');

    textMenuItem.appendChild(textMenuName);
    textMenuItem.appendChild(textMenuDesc);
    
    category.appendChild(textMenuItem);
}

function loadMenu() {
    console.log("Loading menu....")
    clearContent()
    // addMedia()
    textMenu()
    addBottomBorder();
}

export { loadMenu, addMedia }