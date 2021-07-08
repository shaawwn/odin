console.log("Scripts loading....")

// NEW BOOK FORM AND MODAL

let newBook = document.getElementsByClassName('new-book')[0]
newBook.addEventListener('click', () => {
    let modal = document.querySelector('.modal')
    let closeButton = document.querySelector('.close-btn')
    modal.style.display = 'block'
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    })
})


console.log(newBook)