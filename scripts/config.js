function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; //+1 changing the string value type to number
    playerConfigOverlay.style.display = 'block';
    backdropElement.style.display = 'block';
}

function cancelPlayerConfig() {
    // a dash is not allowed with the dot notation use [player-id] instead
    
    playerConfigOverlay.style.display='none'
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    //const extractForm = document.querySelector('#formElement');
    //extractForm.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName=formData.get('playerName').trim();//gets rid of excess whitespace
    //console.log(enteredPlayerName);

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Enter a Valid Name!';
        
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;//updating h3 element from entered data

    players[editedPlayer - 1].name = enteredPlayerName;
   //same as above
    // if (editedPlayer === 1) {
    //     players[0].name=enteredPlayerName
    // } else {
    //     players[1].name=enteredPlayerName
    // }
    cancelPlayerConfig(); //to manually close the function after all criteria has been met
    }