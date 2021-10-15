import './style.css';
import ButterBeer from './images/butterbeer.jpg';
import HogsHead from './images/hogsheadsign.jpg';
console.log("Loading scripts....")


function loadPageContent() {
    // Main function to load HTML content
    // let domBody = document.body;
    let domBody = document.createElement('div');
    domBody.id = 'content';
    // domBody.appendChild(navBar());
    domBody.appendChild(createBanner());
    domBody.appendChild(loadParallax())
    domBody.appendChild(navBar());



    // Load Menu/About
    domBody.appendChild(loadMenu())
    domBody.appendChild(loadAbout())


    document.body.appendChild(domBody)
}

function createBanner() {
    // Create and return the banner image for the website
    let banner = document.createElement('div');

    let welcomeTo = document.createElement('p'); 
    let hogsHead = document.createElement('p');
    hogsHead.classList.add('banner-header');
    welcomeTo.classList.add('banner-header-sm')

    welcomeTo.innerText = 'Welcome to';
    hogsHead.innerText = "Hog's Head Inn";

    banner.appendChild(welcomeTo);
    banner.appendChild(hogsHead);

    banner.classList.add('container');

    return banner;
}

function loadParallax() {
    // Create an fixed background image that can be scrolled over
    let parallaxDiv = document.createElement('div');
    parallaxDiv.classList.add('parallax');

    // parallaxDiv.appendChild(parallaxButton('Menu'));
    // parallaxDiv.appendChild(parallaxButton('Contact'));
    return parallaxDiv;
}

function parallaxButton(keyword) {
    // Create a button to add to the parallax
    let parallaxBtn = document.createElement('div');
    parallaxBtn.classList.add('parallax-btn');
    parallaxBtn.innerText = keyword

    return parallaxBtn;
}
// Navbar

function navBar() {
    // Tabbed browsing for menu/contact/about
    let navBar = document.createElement('div');
    navBar.classList.add('navbar');

    navBar.appendChild(createNavItem('About'));
    navBar.appendChild(createNavItem('Menu'));
    navBar.appendChild(createNavItem('Contact'));
    return navBar;
}

function createNavItem(keyword) {
    // Create a tab for adding to the navbar
    let navBarItem = document.createElement('div');
    navBarItem.classList.add('navItem');
    navBarItem.innerText = keyword;

    return navBarItem;
}

// Create Tabbed content

function loadAbout() {
    // Basic details for the restaurant
    let aboutDiv = document.createElement('div');
    let desc = "The Hog's Head Inn is a slightly disreputable inn and pub in the all-wizarding village of Hogsmeade. It is located one or two streets off of the High Street, the Hog’s Head Inn has been a fixture of Hogsmeade for several years. The Inn is owned and operated by Aberforth Dumbledore."
    let hours = "Open Daily 24 hours!";
    let directions = "";
    aboutDiv.id = 'about'

    aboutDiv.appendChild(aboutDetail(desc))
    aboutDiv.appendChild(aboutDetail(hours));
    return aboutDiv;

}

function aboutDetail(keyword) {
    // An individual about detail
    let aboutDetail = document.createElement('div');
    aboutDetail.classList.add('about-detail');

    // aboutDetail.innerText = "The Hog's Head Inn is a slightly disreputable inn and pub in the all-wizarding village of Hogsmeade. It is located one or two streets off of the High Street, the Hog’s Head Inn has been a fixture of Hogsmeade for several years. The Inn is owned and operated by Aberforth Dumbledore."
    aboutDetail.innerText = keyword;
    return aboutDetail
}

function loadMenu() {
    // Load the pages body content
    let bodyContainer = document.createElement('div');
    let menuContainer = document.createElement('div');
    let bodyHeader = document.createElement('h1');

    // bodyContainer.classList.add('container');
    // bodyContainer.classList.add('container-body')
    // bodyContainer.classList.add('container-menu');

    menuContainer.classList.add('container');
    menuContainer.classList.add('container-body')
    menuContainer.classList.add('container-menu');
    menuContainer.style.display = 'none';

    bodyHeader.innerText = "Menu";
    menuContainer.appendChild(bodyHeader)
    menuContainer.appendChild(createMenu())
    return menuContainer;
}

function loadContact() {
    // Contact information for the restaurant
    let contactDiv = document.createElement('div');


    return contactDiv;
}

function createMenu() {
    // Creeate the elements and populate the menu
    let menu = document.createElement('div');
    let food = document.createElement('div');
    let drinks = document.createElement('div');

    food.classList.add('menu-category');
    food.classList.add('food');
    drinks.classList.add('menu-category');
    drinks.classList.add('drinks');
    menu.classList.add('menu');

    menu.appendChild(food);
    menu.appendChild(drinks);
    menuItems(food, drinks)
    return menu;
}

function menuItems(food, drinks) {
    // Create the menu items, return a list that can then be added to the menu div

    let foodHeader = document.createElement('p');
    let drinkHeader = document.createElement('p');
    foodHeader.classList.add('container-header-md');
    drinkHeader.classList.add('container-header-md');
    foodHeader.classList.add('menu-header');
    drinkHeader.classList.add('menu-header');

    foodHeader.innerText = 'Food';
    drinkHeader.innerText = 'Drinks'

    food.appendChild(foodHeader);
    drinks.appendChild(drinkHeader)
    
    food.appendChild(addLineBreak());
    drinks.appendChild(addLineBreak())
    // Try not to hard code this, instead create a text file with the menu items, and then convert that, later
    let foodItems = {
        'Chocolate Frogs': '4',
        'Corned Beef Sandwich': '10',
        'Treacle Tarts': '12',
        'Pumpkin Pasty': '10',
        'Bouillabaisse': '14',
        'Full English Breakfast': '15',
        'Haggis': '14',
        "Shepards Pie": '16',
        
    }

    let drinkItems = {
        'Butterbeer': '8',
        'Hog Head Ale': '9',
        'Goblin Lager': '7',
        'Coffee': '4',
        'Fizzbuzz Soda': '3',

    }

    let foodNames = Object.keys(foodItems);
    let drinkNames = Object.keys(drinkItems);

    // Populate Food menu
    populateMenu(food, foodItems);
    populateMenu(drinks, drinkItems);
}

function populateMenu(menuCat, menuItems) {
    let menuNames = Object.keys(menuItems);
    for (let i = 0; i < menuNames.length;i++) {
        let div = document.createElement('p');
        div.classList.add('menu-item');
        div.innerText = `${menuNames[i]} ${menuItems[menuNames[i]]}`;

        menuCat.appendChild(div);
    }
}

function addLineBreak() {
    // Create a linebreak that can be added to other elements
    let linebreak = document.createElement('hr');
    linebreak.classList.add('linebreak');
    return linebreak;
}

loadPageContent()
