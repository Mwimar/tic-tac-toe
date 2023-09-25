const playerConfigOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');


const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');

editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', cancelPlayerConfig);
backdropElement.addEventListener('click', cancelPlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);