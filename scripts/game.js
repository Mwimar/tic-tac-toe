function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Enter valid name for both players');
        return;
    }
    gameArea.style.display = 'block';
}