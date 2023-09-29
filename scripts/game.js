function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Enter valid name for both players');
        return;
    }
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
    console.log(activePlayer);
    
}
function selectGameField(event) {
    // console.log(event.target.tagName);
    if (event.target.tagName!=='LI') {
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

    
    gameData[selectedColumn][selectedRow]=activePlayer+1;
    switchPlayer();
}

function checkForGameOver() {
    if (gameData[0][0]>0 && gameData[0][0] === gameData[0][1] && gameData[0][1]===gameData[0][2] ){
        return gameData[0][0];//first inner array
    }

     if (gameData[1][0]>0 && gameData[1][0] === gameData[1][1] && gameData[1][1]===gameData[1][2] ){
        return gameData[1][0]; //second inner array
     }
    
    if (gameData[2][0]>0 && gameData[2][0] === gameData[2][1] && gameData[2][1]===gameData[2][2] ){
        return gameData[2][0]; //third inner array
    }
}