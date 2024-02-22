//to open <aside> overlay 
function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // (+to change the type) - which player was clicked
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
  }

  //to close <aside> overlay 
  function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error'); //to remove error class
    errorsOutputElement.textContent = ''; //to clear the error message
    formElement.firstElementChild.lastElementChild.value = ''; //to clear input faild
  }
  
  //submit a form 
  function savePlayerConfig(event) {
    event.preventDefault(); //within JS without sending req to a server the page wont reload
    const formData = new FormData(event.target); //To extract input values with name attribute
    const enteredPlayername = formData.get('playername').trim();
  
    if (!enteredPlayername) { //enteredPlayername === ''
      event.target.firstElementChild.classList.add('error'); //form is already stored in event.target (choose div in form by using firstElementChild)
      errorsOutputElement.textContent = 'Please enter a valid name!';
      return; //stop the func execution
    }


    //select player
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    //set the value
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;
    //to store names in aray
    players[editedPlayer - 1].name = enteredPlayername;
  
    closePlayerConfig(); //to close after clicking confirm
  }