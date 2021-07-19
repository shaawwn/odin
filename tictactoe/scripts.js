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


const gameBoard = (() => {
    let squares = document.querySelectorAll('.column')

    const printBoard = () => squares.forEach(square => {
        console.log(square.innerText)
    })
    const boardLength = () => console.log(squares.length)
    const checkGameOver = (player) => {
        console.log("Checking game condition")
        // Victory conditions are: [1, 2, 3], [4, 5, 6], [7, 8, 9]
        // [1, 5, 9], [2, 5, 8], [3, 6, 9]
        // [7, 5, 3]
        if (squares[0].innerText === player && squares[1].innerText === player && squares[2].innerText === player) {
            console.log(`${player} wins!`)
        } else if (squares[3].innerText === player && squares[4].innerText === player && squares[5].innerText === player) {
            console.log("Victory!")
        } else if(squares[6].innerText === player && squares[7].innerText === player && squares[8].innerText === player) {
            console.log("At last, victory!")
        } else if(squares[0].innerText === player && squares[4].innerText === player && squares[8].innerText === player) {
            console.log("Left to right down cross victory")
        } else if(squares[6].innerText === player && squares[4].innerText === player && squares[2].innerText === player) {
            console.log("Lef to right up victory!")
        } else if(squares[0].innerText === player && squares[3].innerText === player && squares[6].innerText === player) {
            console.log("Column 1 victory!")
        } else if(squares[1].innerText === player && squares[4].innerText === player && squares[7].innerText === player) {
            console.log("Column 2 victory!")
        } else if(squares[2].innerText === player && squares[5].innerText === player && squares[8].innerText === player) {
            console.log("Column 3")
        } else {
            console.log('Stalemate!')
        }
    }

    return { printBoard, boardLength, checkGameOver }
})();

gameBoard.printBoard()
gameBoard.boardLength()
gameBoard.checkGameOver('X')

// Main game function
function playGame() {
    console.log("Playing game....")
    board = gameBoard()

    // Switch back and forth between players
    let player = choosePlayer()
    let squares = document.querySelectorAll('column')
    let gameOver = false;
    let counter = 0
    // Main loop, when a player selects a space, it should add that to the game board

    // Uncomment to start game
    makeMove(player)


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
    let clicked = false;
    console.log("Running make move....", player)
    
    squares.forEach(square => {square.addEventListener('click', () => {
        // Need to conditional to make sure playes can select the same square twice
        if (square.innerText !== '') {
            console.log("Square already selected")
            return false
        }
        if (player === 'X') {
            let cross = document.createElement('div')
            cross.classList.add('cross')
            cross.innerText = 'X'
            square.append(cross)
            player = 'O'
            console.log("Player in func", player)
            // return player;
        } else if(player === 'O') {
            let circle = document.createElement('div')
            circle.classList.add("circle")
            circle.innerText = 'O'
            square.append(circle)
            player = 'X'
            // return player
        }

    })})

    // Wait for a click event before continuing

}

function clearListener() {
    
    let squares = document.querySelectorAll('column')
    squares.forEach(square => {square.removeEventListener('click')})

}

function checkGameOver() {
    // Check if there is 3 in a row for any player, if so, return the winner
    // if stalemate, return stalemate

}
// playGame()