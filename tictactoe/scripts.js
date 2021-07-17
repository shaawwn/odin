console.log("Scripts loading....")

// let squares = document.querySelectorAll('.column')

// squares.forEach(square => {square.addEventListener('click', () => {
//     console.log("Clicking!")
//     // square.classList.add('clicked')

//     let circle = document.createElement('div')
//     circle.classList.add('circle')
//     circle.innerText = 'O'

//     // let cross = document.createElement('div')
//     // cross.classList.add('cross')
//     // cross.innerText = 'X'

//     // square.append(cross)
//     square.append(circle)
// })})


// Main game function
function playGame() {
    console.log("Playing game....")

    // Switch back and forth between players
    let player = choosePlayer()
    let squares = document.querySelectorAll('column')
    let counter = 0
    // Main loop, when a player selects a space, it should add that to the game board

    while (true) {
        if (player === 'X') {
            makeMove(player)
            console.log("Player is X")
            player = 'O'
            clearListener()
        } else if(player === 'O') {
            makeMove(player)
            console.log("Player is O")
            player = 'X'
            clearListener()
        }

        counter++
        if (counter > 10) {
            break
        }
    }
    // if (player === 'X') {
    //     makeMove(player)
    //     console.log("Player is X")
    //     player = 'O'
    // } else if(player === 'O') {
    //     makeMove(player)
    //     console.log("Player is O")
    //     player = 'X'
    // }
}


function choosePlayer() {
    let player;
    let counter = 0;

    while (player !== "X" || player !== "O") {
        player = prompt("Who will go first, X or O?")
        counter ++

        if (player === 'X' || player === 'O') {
            return player
        }
        counter++
        
        if (counter > 1) {
            return false
        }
    }
}

function makeMove(player) {

    let squares = document.querySelectorAll('.column')
    console.log(squares)
    squares.forEach(square => {square.addEventListener('click', () => {
        // Need to conditional to make sure playes can select the same square twice
        if (square.innerText !== '') {
            console.log("Square already selected")
        }
        if (player === 'X') {
            let cross = document.createElement('div')
            cross.classList.add('cross')
            cross.innerText = 'X'
            square.append(cross)
        } else if(player === 'O') {
            let circle = document.createElement('div')
            circle.classList.add("circle")
            circle.innerText = 'O'
            square.append(circle)
        }

    })})
}

function clearListener() {
    let squares = document.querySelectorAll('column')
    squares.forEach(square => {square.removeEventListener('click')})
}


playGame()