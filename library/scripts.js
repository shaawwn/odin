console.log("Scripts loading....")

let library = [];
let libraryContent = document.getElementById('library-content')
let libraryStorage = window.localStorage

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

function displayLibraryStorage() {
    // Loop through the library and add the books
    libraryContent.innerHTML = '';
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

        bookTitle.innerText = book.bookTitle;
        bookAuthor.innerText = book.bookAuthor;
        bookPages.innerText = book.bookPages + ' pages';
        bookRead.innerText = book.bookRead;

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

    return false
}


function markRead() {
    // Mark a book as read or not after you've already loaded into library

}
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

}

clearStorage()
displayLibraryStorage()

