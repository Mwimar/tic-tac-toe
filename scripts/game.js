function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Enter valid name for both players');
        return;
    }
    gameArea.style.display = 'block';
}

function selectGameField(event) {
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');


}