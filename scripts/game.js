function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    isGameOver = false;
    gameOverElement.firstElementChild.innerHTML = 'You have won <span id="winner-name"></span>'; 
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElements.children[gameBoardIndex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }

};

function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Enter valid name for both players');
        return;
    }
    resetGameStatus();

    gameArea.style.display = 'block';
    activeplayerElement.textContent = players[activePlayer].name;
}


function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    };
    activeplayerElement.textContent = players[activePlayer].name;
   // console.log(activePlayer);
    
}
function selectGameField(event) {
    // console.log(event.target.tagName);
    //isGameOver===true
    if (event.target.tagName!=='LI' || isGameOver===true) {
        return;
    }

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col-1;
    const selectedRow = selectedField.dataset.row - 1;
    
    if (gameData[selectedColumn][selectedRow] > 0) {
        alert('Please select an empty field')
        return;
    };
    event.target.textContent = players[activePlayer].symbol;//setting default active player
    event.target.classList.add('disabled');

    
    gameData[selectedColumn][selectedRow] = activePlayer + 1;

    const winnerId = checkForGameOver();
    if (winnerId !== 0) {
        endGame(winnerId);
    }
     //console.log(winnerId);
    //console.log(gameData);

    currentRound++; //counting rounds before switching;

    switchPlayer();
}

// function checkForGameOver() {
//     if (gameData[0][0]>0 && gameData[0][0] === gameData[0][1] && gameData[0][1]===gameData[0][2] ){
//         return gameData[0][0];//first inner array
//     }

//      if (gameData[1][0]>0 && gameData[1][0] === gameData[1][1] && gameData[1][1]===gameData[1][2] ){
//         return gameData[1][0]; //second inner array
//      }
    
//     if (gameData[2][0]>0 && gameData[2][0] === gameData[2][1] && gameData[2][1]===gameData[2][2] ){
//         return gameData[2][0]; //third inner array
//     }
// }

function checkForGameOver() {
    //checking rows for equality
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2])
         {
            return gameData[i][0];
        }
    }
    
//checking columns for equality
        for (let i = 0; i < 3; i++) {
            if (gameData[0][i] > 0 &&
                gameData[0][i] === gameData[1][i] &&
                gameData[0][i] === gameData[2][i])
            {
                return gameData[0][i];
            }
    }

    //Diagonal Check top left to bottom right
    if (gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }

    //Diagonal check bottom left to top right
    if (gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2])
    {
         return gameData[2][0];
    }
    
    if (currentRound === 9){
        return -1;
    }
    
    return 0;
    
};

function endGame(winnerId) {
    isGameOver = true;
    gameOverElement.style.display = 'block';
    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
        
    } else {
        gameOverElement.firstElementChild.textContent = "It\'s a Draw!";
    }
}
