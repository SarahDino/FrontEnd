const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  
  let editedPlayer = 0;
  let activePlayer = 0;
  let currentRound = 1;
  let gameIsOver = false;
  
  //to store player name in array
  const players = [
    {
      name: '',
      symbol: 'X'
    },
    {
      name: '',
      symbol: 'O'
    },
  ];
  
  const playerConfigOverlayElement = document.getElementById('config-overlay');
  const backdropElement = document.getElementById('backdrop');
  const formElement = document.querySelector('form'); //its the only form
  const errorsOutputElement = document.getElementById('config-errors');
  const gameAreaElement = document.getElementById('active-game'); //to display game field
  const activePlayerNameElement = document.getElementById('active-player-name');
  const gameOverElement = document.getElementById('game-over');


  //pointer for event listner
  const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
  const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
  const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
  const startNewGameBtnElement = document.getElementById('start-game-btn');
  const gameBoardElement = document.getElementById('game-board');

  
  //pointing on functions to execute onclick
  editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
  editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
  cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
  backdropElement.addEventListener('click', closePlayerConfig);
  formElement.addEventListener('submit', savePlayerConfig); //when we submit a form
  startNewGameBtnElement.addEventListener('click', startNewGame);
  gameBoardElement.addEventListener('click', selectGameField);