console.log("Scripts loading....")

let library = [];
let libraryContent = document.getElementById('library-content')

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

let hobbit = new Book('The Hobbit', 'JRR Tolkien', '295', 'read')
library.push(hobbit)

function addBookToLibrary() {
    //pass
}

function displayLibrary() {
    // Loop through the library and add the books

    // let libraryContent = document.getElementById('library-content')
    // console.log("Before loop", libraryContent)
    libraryContent.innerHTML = '';
    for (let i = 0; i < library.length; i++) {
        // console.log("In loop", libraryContent, i)
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
    // console.log("Out of loop", libraryContent)
}


submitButton.addEventListener('click', () => {
    
    // let form = document.querySelector('#book-submit')
    // let newerBook = new Book(form.title.value, form.author.value, form.pages.value, form.read.value)
    // library.push(newerBook)
    // console.log("Library: ", library)
    // displayLibrary()
    // return false
    addLib()
    console.log("End of event")
}) 

function addLib() {
    let form = document.querySelector('#book-submit')
    let newerBook = new Book(form.title.value, form.author.value, form.pages.value, form.read.value)

    library.push(newerBook)
    displayLibrary()
    return false
}

function test() {
    console.log("Submit test...")
}
displayLibrary()

// let newDiv = document.createElement('div')
// let test = document.createElement('h1')
// test.innerText = "Test"
// newDiv.append(test)
// libraryContent.append(newDiv)