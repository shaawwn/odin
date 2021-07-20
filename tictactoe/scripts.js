console.log("Scripts loading....")

// Player object, which holds player data and methods, including score
const playerObject = (symbol) => {
    let score = 0;
    let scoreBoard = document.getElementsByClassName(`${symbol}`)[0]

    const getPlayer = () => {
        return symbol
    }

    const updateScore = () => {
        console.log("Scoreboard", scoreBoard.innerText)
        score++
        scoreBoard.innerText = '';
        scoreBoard.innerText = score;
    }

    const getScore = () => {
        return score
    }
     const resetScore = () => {
        score = 0;
        scoreBoard.innerText = score;
     }
    return { getPlayer, updateScore, getScore, resetScore }
}


// Game board, which includes gameboard data and methods in
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

    const clearBoard = () => {
        // Starting with 9 moves (total squares in board), decrement until there
        // are no more moves left, indicating the end of a game, then clear 
        // the board
        for (let i = 0; i < squares.length; i++) {
            squares.forEach(square => { square.innerText = '' })
        }
        moves = 9;
    }

    const checkMoves = () => {
        // Decrement moves each time a player makes a move
        moves--;
        console.log(moves)
    }

    const checkGameOver = (playerObj, player, computer) => {
        // Check for game over conditions, either a player victory, or stalemate
        let playerName = playerObj.getPlayer()

        // Victory conditions are: [1, 2, 3], [4, 5, 6], [7, 8, 9]
        // [1, 5, 9], [2, 5, 8], [3, 6, 9]
        // [7, 5, 3]
        if (squares[0].innerText === playerName && squares[1].innerText === playerName && squares[2].innerText === playerName) {
            alert(`${playerName} wins!`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (squares[3].innerText === playerName && squares[4].innerText === playerName && squares[5].innerText === playerName) {
            alert(`${playerName} wins!`)
            playerObj.updateScore()
            clearBoard()
        } else if (squares[6].innerText === playerName && squares[7].innerText === playerName && squares[8].innerText === playerName) {
            alert(`${playerName} wins!`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (squares[0].innerText === playerName && squares[4].innerText === playerName && squares[8].innerText === playerName) {
            alert(`${playerName} wins! diagonally`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (squares[6].innerText === playerName && squares[4].innerText === playerName && squares[2].innerText === playerName) {
            alert(`${playerName} wins!`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (squares[0].innerText === playerName && squares[3].innerText === playerName && squares[6].innerText === playerName) {
            alert(`${playerName} wins!`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (squares[1].innerText === playerName && squares[4].innerText === playerName && squares[7].innerText === playerName) {
            alert(`${playerName} wins!`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (squares[2].innerText === playerName && squares[5].innerText === playerName && squares[8].innerText === playerName) {
            alert(`${playerName} wins!`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (moves === 0) {
            alert("Stalemate!")
        } else {
            console.log("Continuing game")
        }
    }

    return { printBoard, checkGameOver, buildBoard, checkMoves }
})();


// Main game function
function playGame() {
    console.log("Playing game....")

    // Switch back and forth between players
    let players = choosePlayer()
    let player = players[0]
    let computer = players[1]

    makeMove(player, computer)
}


function choosePlayer() {
    let player;
    let counter = 0;

    while (player !== "X" || player !== "O") {
        player = prompt("Who will go first, X or O?")
        player = playerObject(player)
        let computer;

        if (player.getPlayer() === 'X') {
            computer = playerObject('O')
        } else if (player.getPlayer() === 'O') {
            computer = playerObject('X');
        }

        return [player, computer]
    }
}

function makeMove(player, computer) {
    console.log("Player in makeMove function", computer.getPlayer())
    let currentPlayer = player
    let squares = document.querySelectorAll('.column')
    let clicked = false;

    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (square.innerText !== '') {
                console.log("Square already selected")
                return false
            }
            if (currentPlayer.getPlayer() === 'X') {
                let cross = document.createElement('div')
                cross.classList.add('cross')
                cross.innerText = 'X'
                square.append(cross)
                console.log("Adding", cross)
                gameBoard.checkMoves()
                gameBoard.checkGameOver(currentPlayer, player, computer)
                currentPlayer = computer

            } else if (currentPlayer.getPlayer() === 'O') {
                let circle = document.createElement('div')
                circle.classList.add("circle")
                circle.innerText = 'O'
                square.append(circle)
                console.log("Adding", circle)
                gameBoard.checkMoves()
                gameBoard.checkGameOver(currentPlayer)

                currentPlayer = player

            }

        })
    })
}

function endMatch(current, player, computer) {
    // Declare a winner and reset the game after a player reaches 3 wins
    if (current.getScore() === 3) {
        alert(`${current.getPlayer()} wins the match!`)
        player.resetScore()
        computer.resetScore()
    }
}

function changePlayer(player) {
    if (player.getPlayer() === 'X') {
        player = playerObject('O')
    } else if (player.getPlayer() === 'O') {
        player = playerObject('X')
    }
    return player
}

function clearListener() {

    let squares = document.querySelectorAll('column')
    squares.forEach(square => { square.removeEventListener('click') })

}

playGame()

