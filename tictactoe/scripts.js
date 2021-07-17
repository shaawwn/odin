console.log("Scripts loading....")

let squares = document.querySelectorAll('.column')

squares.forEach(square => {square.addEventListener('click', () => {
    console.log("Clicking!")
    // square.classList.add('clicked')

    let circle = document.createElement('div')
    circle.classList.add('circle')
    circle.innerText = 'O'

    // let cross = document.createElement('div')
    // cross.classList.add('cross')
    // cross.innerText = 'X'

    // square.append(cross)
    square.append(circle)
})})


// Main game function
function playGame() {
    console.log("Playing game....")

    // Switch back and forth between players
}

playGame()