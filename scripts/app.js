const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
let editedPlayer = 0;
let activePlayer = 0; 
let currentRound = 1;

const players = [
    {
        name: '',
        symbol:'X',
    },
    {
        name: '',
        symbol:'O',
    },
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('errors-output');
const gameArea = document.getElementById('active-game');
const activeplayerElement = document.getElementById('active-player-name');


const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
// const gameFieldElements=document.querySelectorAll('#game-board li');
const gameBoardElements = document.getElementById('game-board');

editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', cancelPlayerConfig);
backdropElement.addEventListener('click', cancelPlayerConfig);
startNewGameBtnElement.addEventListener('click', startNewGame);

formElement.addEventListener('submit', savePlayerConfig);

// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click', selectGameField);
    
// };

gameBoardElements.addEventListener('click', selectGameField);
