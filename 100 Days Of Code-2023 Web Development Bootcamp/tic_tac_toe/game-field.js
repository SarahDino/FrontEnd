function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML =
      'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display = 'none';
  
    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        gameData[i][j] = 0;
        const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
        gameBoardItemElement.textContent = '';
        gameBoardItemElement.classList.remove('disabled');
        gameBoardIndex++;
      }
    }
  }
  
  //to start a game
  function startNewGame() {
    if (players[0].name === '' || players[1].name === '') { //if one or both players dont have names
      alert('Please set custom player name!');
      return; //dont continue if theres no names
    }
  
    resetGameStatus();
  
    activePlayerNameElement.textContent = players[activePlayer].name; //to show active player name
    gameAreaElement.style.display = 'block'; //to display game field
  }
  
  function switchPlayer() {
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name; //to show active player name after switch
  }
  
  function selectGameField(event) {
    if (event.target.tagName !== 'LI' || gameIsOver) { //make sure u clicked on game field
      return;
    }
  
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1; //to start from 0
    const selectedRow = selectedField.dataset.row - 1; //to start from 0
  
    if (gameData[selectedRow][selectedColumn] > 0) { //u cant choose field already choosen
      alert('Please select an empty field!');
      return;
    }
  
    selectedField.textContent = players[activePlayer].symbol; //to add player symbol
    selectedField.classList.add('disabled'); //to disable hover effect on choosed fields
  
    gameData[selectedRow][selectedColumn] = activePlayer + 1; //which player selected the field
  
    const winnerId = checkForGameOver();
  
    if (winnerId !== 0) {
      endGame(winnerId);
    }
  
    currentRound++;
    switchPlayer();
  }
  
  function checkForGameOver() {
    // Checking the rows for equality
    for (let i = 0; i < 3; i++) {
      if (
        gameData[i][0] > 0 &&
        gameData[i][0] === gameData[i][1] &&
        gameData[i][1] === gameData[i][2]
      ) {
        return gameData[i][0];
      }
    }
  
    // Checking the columns for equality
    for (let i = 0; i < 3; i++) {
      if (
        gameData[0][i] > 0 &&
        gameData[0][i] === gameData[1][i] &&
        gameData[0][i] === gameData[2][i]
      ) {
        return gameData[0][i];
      }
    }
  
    // Diagonal: Top left to bottom right
    if (
      gameData[0][0] > 0 &&
      gameData[0][0] === gameData[1][1] &&
      gameData[1][1] === gameData[2][2]
    ) {
      return gameData[0][0];
    }
  
    // Diagonal: Bottom left to top right
    if (
      gameData[2][0] > 0 &&
      gameData[2][0] === gameData[1][1] &&
      gameData[1][1] === gameData[0][2]
    ) {
      return gameData[2][0];
    }
  
    if (currentRound === 9) {
      return -1;
    }
  
    return 0;
  }
  
  function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';
  
    if (winnerId > 0) {
      const winnerName = players[winnerId - 1].name;
      gameOverElement.firstElementChild.firstElementChild.textContent =
        winnerName;
    } else {
      gameOverElement.firstElementChild.textContent = "It's a draw!";
    }
  }