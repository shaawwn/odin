console.log("Scripts loading....")

let library = [];
let libraryContent = document.getElementById('library-content')
let libraryStorage = window.localStorage

document.addEventListener('DOMContentLoaded', () => {

    let removeButton = document.querySelectorAll('.remove-book')
    removeButton.forEach(button => button.addEventListener('click', () => {
        let keyName = button.parentElement.children[0].innerText

        //Remove object from local storage
        localStorage.removeItem(keyName)

        // Remove the HTML
        removeItem(button.parentElement)
    }))
})

// NEW BOOK AND MODAL
let newBook = document.getElementsByClassName('new-book')[0]
let submitButton = document.getElementById('submit-button')

newBook.addEventListener('click', () => {
    let modal = document.querySelector('.modal')
    let closeButton = document.querySelector('.close-btn')
    modal.style.display = 'block'
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    })
    
})

// Book and Library Constructors

function Book(title, author, pages, read) {
    // Constructor
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.bookRead = read
}

function displayLibrary() {
    // Loop through the library and add the books
    libraryContent.innerHTML = '';
    for (let i = 0; i < library.length; i++) {
        let bookDiv = document.createElement('div')
        bookDiv.classList.add('book-card')

        let bookTitle = document.createElement('h2');
        let bookAuthor = document.createElement('h4')
        let bookPages = document.createElement('h4')
        let bookRead = document.createElement('h4')

        bookTitle.innerText = library[i].bookTitle;
        bookAuthor.innerText = library[i].bookAuthor;
        bookPages.innerText = library[i].bookPages;
        bookRead.innerText = library[i].bookRead;

        bookDiv.append(bookTitle);
        bookDiv.append(bookAuthor);
        bookDiv.append(bookPages);
        bookDiv.append(bookRead);

        libraryContent.appendChild(bookDiv)

    }
}

function displayLibraryStorage() {
    // Loop through the library and add the books
    libraryContent.innerHTML = '';
    // console.log("IN LS FUNC", libraryStorage)
    for (let i = 0; i < libraryStorage.length; i++) {
        // console.log(JSON.parse(libraryStorage.getItem(libraryStorage.key(i))))
        let book = JSON.parse(libraryStorage.getItem(libraryStorage.key(i)))
        
        // console.log(book.bookTitle)
        // console.log("Author: ", book.bookAuthor)
        // console.log("Pages: ", book.bookPages)
        // console.log("Read: ", book.bookRead)
        let bookDiv = document.createElement('div')
        bookDiv.classList.add('book-card')

        let bookTitle = document.createElement('h2');
        let bookAuthor = document.createElement('h4')
        let bookPages = document.createElement('h4')
        let bookRead = document.createElement('h4')
        let removeButton = document.createElement('button')
        removeButton.classList.add('remove-book')
        removeButton.classList.add('btn')

        bookTitle.innerText = book.bookTitle;
        bookAuthor.innerText = book.bookAuthor;
        bookPages.innerText = book.bookPages;
        bookRead.innerText = book.bookRead;
        removeButton.innerText = 'Remove Book'

        bookDiv.append(bookTitle);
        bookDiv.append(bookAuthor);
        bookDiv.append(bookPages);
        bookDiv.append(bookRead);
        bookDiv.append(removeButton)

        libraryContent.appendChild(bookDiv)

    }
}


submitButton.addEventListener('click', () => {
    
    addToLibrary()
    clearForm()
}) 


function addToLibrary() {
    let form = document.querySelector('#book-submit')
    let newerBook = new Book(form.title.value, form.author.value, form.pages.value, form.read.value)
    libraryStorage.setItem(`${form.title.value}`, JSON.stringify(newerBook))

    library.push(newerBook)
    displayLibraryStorage()
    // displayLibrary()

    return false
}

function clearForm() {
    let form = document.querySelector('#book-submit')
    let modal = document.querySelector('.modal')
    form.title.value = '';
    form.author.value = '';
    form.author.value = '';
    form.pages.value = '';
    form.read.value = true
    modal.style.display = 'none';
}

function clearStorage() {
    let clearStorageButton = document.getElementsByName('clear-button')[0]
    clearStorageButton.addEventListener('click', () => {
        if (confirm("Are you sure you want to clear the library?")) {
            libraryStorage.clear()
            libraryContent.innerHTML = '';
        } else {
            console.log("Library clear cancelled")
        }
    })
}

function removeItem(element) {
    console.log("Removing item", element)
    element.remove()
    // localStorage.removeItem(e)

}

// Storage

// Setting a book with the relevant information example
// setItem() takes two arguments, second use
// libraryStorage.setItem('book', JSON.stringify({'title': 'The Hobbit', 'author': 'JRR Tolkein'}))
// console.log(JSON.parse(libraryStorage.getItem('book')).title)

// Clear storage with clear()
// libraryStorage.clear()

clearStorage()
displayLibraryStorage()

