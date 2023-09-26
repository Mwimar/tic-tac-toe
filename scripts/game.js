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
    
}
function selectGameField(event) {
    // console.log(event.target.tagName);
    if (event.target.tagName!=='LI') {
        return;
    }
    event.target.textContent = players[activePlayer].symbol;//setting default active player
    event.target.classList.add('disabled');
    switchPlayer();
}