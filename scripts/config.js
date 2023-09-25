function openPlayerConfig() {
    playerConfigOverlay.style.display = 'block';
    backdropElement.style.display = 'block';
}

function cancelPlayerConfig() {
    playerConfigOverlay.style.display='none'
    backdropElement.style.display = 'none';
}

function savePlayerConfig(event) {
    event.preventDefault();
    //const extractForm = document.querySelector('#formElement');
    //extractForm.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName=formData.get('playerName');
    console.log(enteredPlayerName);
    }