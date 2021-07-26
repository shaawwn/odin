console.log("Scripts loading....")

// Player object, which holds player data and methods, including score
const playerObject = (name, symbol) => {
    let score = 0;
    let scoreBoard = document.getElementsByClassName(`${symbol.toLowerCase()}`)[0]

    const getPlayer = () => {
        return symbol
    }

    const getPlayerName = () => {
        return name
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
    return { getPlayer, getPlayerName, updateScore, getScore, resetScore }
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
        console.log("Clearing board")
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

    const markMove = (square, playerSymbol) => {
        // Player marks a square
        let markSquare = document.createElement('div')
        markSquare.classList.add(playerSymbol)
        markSquare.innerText = playerSymbol
        square.append(markSquare)
    }

    const checkGameOver = (playerObj, player, computer) => {
        // Check for game over conditions, either a player victory, or stalemate
        let playerName = playerObj.getPlayer()
        let name = playerObj.getPlayerName()
        // Victory conditions are: [1, 2, 3], [4, 5, 6], [7, 8, 9]
        // [1, 5, 9], [2, 5, 8], [3, 6, 9]
        // [7, 5, 3]
        if (squares[0].innerText === playerName && squares[1].innerText === playerName && squares[2].innerText === playerName) {
            alert(`${name} wins!`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (squares[3].innerText === playerName && squares[4].innerText === playerName && squares[5].innerText === playerName) {
            alert(`${name} wins!`)
            playerObj.updateScore()
            clearBoard()
        } else if (squares[6].innerText === playerName && squares[7].innerText === playerName && squares[8].innerText === playerName) {
            alert(`${name} wins!`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (squares[0].innerText === playerName && squares[4].innerText === playerName && squares[8].innerText === playerName) {
            alert(`${name} wins! diagonally`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (squares[6].innerText === playerName && squares[4].innerText === playerName && squares[2].innerText === playerName) {
            alert(`${name} wins!`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (squares[0].innerText === playerName && squares[3].innerText === playerName && squares[6].innerText === playerName) {
            alert(`${name} wins!`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (squares[1].innerText === playerName && squares[4].innerText === playerName && squares[7].innerText === playerName) {
            alert(`${name} wins!`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (squares[2].innerText === playerName && squares[5].innerText === playerName && squares[8].innerText === playerName) {
            alert(`${name} wins!`)
            playerObj.updateScore()
            endMatch(playerObj, player, computer)
            clearBoard()
        } else if (moves === 0) {
            alert("Stalemate!")
        } else {
            console.log("Continuing game")
        }
    }

    return { printBoard, checkGameOver, buildBoard, checkMoves, markMove, clearBoard }
})();


// Main game function
function playGame() {
    console.log("Playing game....")
    let player;
    let computer;
    // Switch back and forth between players

    // Prompt for player names AFTER start button has been hit
    let startBtn = document.querySelector('.start-reset')
    let startModal = document.querySelector('.start-modal')
    let resetBtn = document.querySelector('.reset-game')

    startBtn.addEventListener('click', () => {
        let players = choosePlayer()
        player = players[0]
        computer = players[1]

        startModal.style.display = 'none'
        resetBtn.style.display = 'block'
        // Reset the Game 
        startBtn.innerText = 'Reset Game'
        makeMove(player, computer)
    })

    resetBtn.addEventListener('click', () => {
        resetMatch(player, computer)

    })
}


function choosePlayer() {
    
    
    playerXName = prompt("Who will be player X?")
    playerOName = prompt("Who will be player O?")
    
    let playerX = playerObject(playerXName, 'X');
    let playerO = playerObject(playerOName, 'O');

    let playerxDiv = document.querySelector('.playerx')
    let playeroDiv = document.querySelector('.playero')

    playerxDiv.innerText = playerX.getPlayerName();
    playeroDiv.innerText = playerO.getPlayerName();

    return [playerX, playerO]
}

function makeMove(player, computer) {

    let currentPlayer = player
    let squares = document.querySelectorAll('.column')
    let clicked = false;

    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (square.innerText !== '') {
                return false
            }
            if (currentPlayer.getPlayer() === 'X') {
                gameBoard.markMove(square, 'X')
                gameBoard.checkMoves()
                gameBoard.checkGameOver(currentPlayer, player, computer)
                currentPlayer = computer

            } else if (currentPlayer.getPlayer() === 'O') {
                gameBoard.markMove(square, 'O')
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
        alert(`${current.getPlayerName()} wins the match!`)
        player.resetScore()
        computer.resetScore()
    }
}

function resetMatch(player, computer) {
    // Reset the match when the reset button is hit
    let reset = prompt("Are you sure you want to reset match?")
    console.log("RESET", reset)
    if (reset === null) {
        console.log("Not resetting")
    } else {
        player.resetScore()
        computer.resetScore()
        gameBoard.clearBoard()
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

