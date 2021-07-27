console.log("Scripts loading....")
// On library-with-classes branch
// let library = [];
let libraryContent = document.getElementById('library-content')
// let libraryStorage = window.localStorage

// NEW BOOK BUTTON AND MODAL
// let newBook = document.getElementsByClassName('new-book')[0]
// let submitButton = document.getElementById('submit-button')

// newBook.addEventListener('click', () => {
//     let modal = document.querySelector('.modal')
//     let closeButton = document.querySelector('.close-btn')
//     modal.style.display = 'block'
//     closeButton.addEventListener('click', () => {
//         modal.style.display = 'none';
//     })
    
// })

// Book and Library Constructors

// function Book(title, author, pages, read) {
//     // Constructor
//     this.bookTitle = title;
//     this.bookAuthor = author;
//     this.bookPages = pages;
//     this.bookRead = read
// }

// Create a Book 'class'
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }

    getTitle() {
        return this.title
    }

    getAuthor() {
        return this.author
    }

    getPages() {
        return this.pages
    }

    setRead() {
        if (this.read === false) {
            this.read = true
        } else if(this.read === true) {
            this.read = false
        }
    }


}

// Create a Library class
class Library {
    //View, add, delete books from the library
    libraryArray = [];
    libraryStorage = window.localStorage;

    constructor() {
        //pass
        // this.libraryArray = libraryArray
        // this.libraryStorage = libraryStorage
    }

    getLibrary() {
        return this.libraryArray
    }

    getStorage() {
        return this.libraryStorage
    }

    addBook(book) {
        this.libraryArray.push(book)
        this.libraryStorage.setItem(`${book.getTitle()}`, JSON.stringify(book))
    }

    addToLibrary() {
        let form = document.querySelector('#book-submit')
        let newerBook = new Book(form.title.value, form.author.value, form.pages.value, form.read.value)
        this.libraryStorage.setItem(`${form.title.value}`, JSON.stringify(newerBook))
    
        this.libraryArray.push(newerBook)
        this.displayLibraryStorage(this.libraryStorage)
    
        return false
    }
    

    clearLibrary() {
        this.libraryStorage.clear()
        this.libraryArray = []
        console.log("Clearing storage...", this.libraryStorage)
    }

    displayLibraryStorage(libraryStorage) {
        // Loop through the library and add the books
        // This isn't an object, this creates the library view
        // console.log("Library Storage; ", libraryStorage, libraryStorage.length)
        libraryContent.innerHTML = '';
        console.log("STORAGE LENGTH", libraryStorage.length)
        for (let i = 0; i < libraryStorage.length; i++) {
            let book = JSON.parse(libraryStorage.getItem(libraryStorage.key(i)))
            let bookDiv = document.createElement('div')
            bookDiv.classList.add('book-card')
    
            let bookTitle = document.createElement('h2');
            let bookAuthor = document.createElement('h4')
            let bookPages = document.createElement('h4')
            let bookRead = document.createElement('button')
            let removeButton = document.createElement('button')
    
    
            removeButton.classList.add('remove-button')
            removeButton.classList.add('btn')
    
            bookTitle.classList.add('book-detail')
            bookAuthor.classList.add('book-detail')
            bookPages.classList.add('book-detail')
            bookRead.classList.add('btn')
            bookRead.classList.add('read-book')
            bookRead.classList.add('book-detail')
    
            bookTitle.innerText = book.title;
            bookAuthor.innerText = book.author;
            bookPages.innerText = book.pages + ' pages';
            bookRead.innerText = book.read;
    
            // Add event listeners
            removeButton.addEventListener('click', () => {
                let keyName = book.bookTitle
                localStorage.removeItem(keyName)
                removeItem(removeButton.parentElement)
            })
    
            bookRead.addEventListener('click', () => {
                if (bookRead.innerText === 'Read') {
                    bookRead.innerText = 'Not Read'
                    book.bookRead = "Not Read"
                    localStorage.setItem(book.bookTitle, JSON.stringify(book))
                } else if (bookRead.innerText === 'Not Read') {
                    bookRead.innerText = 'Read'
                    book.bookRead = 'Read'
                    localStorage.setItem(book.bookTitle, JSON.stringify(book))
                }
            })
    
            removeButton.innerText = 'X'
    
            bookDiv.append(bookTitle);
            bookDiv.append(bookAuthor);
            bookDiv.append(bookPages);
            bookDiv.append(bookRead);
            // bookDiv.append(removeButton)
            bookDiv.append(removeButton)
    
            libraryContent.appendChild(bookDiv)
    
        }
    }
    
}

// NEW BOOK BUTTON AND MODAL
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


let library = new Library()
let Storage = library.getStorage()
console.log("Storage length: ", Storage.length)


submitButton.addEventListener('click', () => {
    
    library.addToLibrary()
    clearForm()
}) 

function clearForm() {
    let form = document.querySelector('#book-submit')
    let modal = document.querySelector('.modal')
    form.title.value = '';
    form.author.value = '';
    form.author.value = '';
    form.pages.value = '';
    form.read.value = 'Read'
    modal.style.display = 'none';
}

function clearStorage() {
    let clearStorageButton = document.getElementsByName('clear-button')[0]
    clearStorageButton.addEventListener('click', () => {
        if (confirm("Are you sure you want to clear the library?")) {
            library.clearLibrary()
            libraryContent.innerHTML = '';
        } else {
            console.log("Library clear cancelled")
        }
    })
}

function removeItem(element) {
    console.log("Removing item", element)
    element.remove()

}

clearStorage()
library.displayLibraryStorage(Storage)



