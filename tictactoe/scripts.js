console.log("Scripts loading....")

const player = (symbol) => {
    let score = 0;

    const getPlayer = () => {
        console.log(symbol)
        return symbol
    }

    const updateScore = () => {
        score++
    }

    const getScore = () => {
        return score
    }

    return { getPlayer, updateScore, getScore }
}

let x = player('X')
x.getPlayer()
// x.getScore()
x.updateScore()
// x.getScore()
x.updateScore()
x.updateScore()

function checkWinner(player) {
    console.log("Checking winner")
    player.getScore()
    if (player.getScore() === 3) {
        console.log(`${player.getPlayer()} wins the round`)
    }
}

checkWinner(x)
const gameBoard = (() => {
    let squares = document.querySelectorAll('.column')

    let moves = 9;
    let board = document.querySelector('.game-board')
    const buildBoard = () => {
        // Add 9 squares to the game board
        for (let i = 0; i < 10; i++) {
            let div = document.createElement('div')
            div.classList.add('column')
            board.append(div)
        }
    }
    const printBoard = () => squares.forEach(square => {
        console.log(square.innerText)
    })
    const boardLength = () => console.log(squares.length)
    const clearBoard = () => {
        for (let i = 0; i < squares.length; i++) {
            squares.forEach(square => {square.innerText = ''})
        }
        moves = 9;
    }
    const checkMoves = () => {
        moves--;
        console.log(moves)
    }
    const checkGameOver = (player) => {

        console.log("Checking game condition", squares)
        // Victory conditions are: [1, 2, 3], [4, 5, 6], [7, 8, 9]
        // [1, 5, 9], [2, 5, 8], [3, 6, 9]
        // [7, 5, 3]
        if (squares[0].innerText === player && squares[1].innerText === player && squares[2].innerText === player) {
            // console.log(`${player} wins!`)
            alert(`${player} wins!`)
            clearBoard() 
        } else if (squares[3].innerText === player && squares[4].innerText === player && squares[5].innerText === player) {
            // console.log("Victory!")
            alert(`${player} wins!`)
            clearBoard() 
        } else if(squares[6].innerText === player && squares[7].innerText === player && squares[8].innerText === player) {
            // console.log("At last, victory!")
            alert(`${player} wins!`)
            clearBoard() 
        } else if(squares[0].innerText === player && squares[4].innerText === player && squares[8].innerText === player) {
            // console.log("Left to right down cross victory")
            alert(`${player} wins! diagonally`)
            clearBoard() 
        } else if(squares[6].innerText === player && squares[4].innerText === player && squares[2].innerText === player) {
            // console.log("Lef to right up victory!")
            alert(`${player} wins!`)
            clearBoard() 
        } else if(squares[0].innerText === player && squares[3].innerText === player && squares[6].innerText === player) {
            // console.log("Column 1 victory!")
            alert(`${player} wins!`)
            clearBoard() 
        } else if(squares[1].innerText === player && squares[4].innerText === player && squares[7].innerText === player) {
            // console.log("Column 2 victory!")
            alert(`${player} wins!`)
            clearBoard() 
        } else if(squares[2].innerText === player && squares[5].innerText === player && squares[8].innerText === player) {
            // console.log("Column 3")
            alert(`${player} wins!`)
            clearBoard() 
        } else if(moves === 0){
            alert("Stalemate!")
        } else {
            console.log("Continuing game")
        }
    }

    return { printBoard, boardLength, checkGameOver, buildBoard, checkMoves }
})();


// Main game function
function playGame() {
    console.log("Playing game....")
    // gameBoard.buildBoard()

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
            console.log("Adding", cross)
            gameBoard.checkMoves()
            gameBoard.checkGameOver(player)
            // player = 'O'

        } else if(player === 'O') {
            let circle = document.createElement('div')
            circle.classList.add("circle")
            circle.innerText = 'O'
            square.append(circle)
            console.log("Adding", circle)
            gameBoard.checkMoves()
            gameBoard.checkGameOver(player)
            // player = 'X'

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