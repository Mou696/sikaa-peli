'use strict';

// Selecting elements
const setupEl = document.querySelector('.setup');
const gameEl = document.querySelector('.game');
const btnStart = document.querySelector('.btn--start');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing, winningScore, diceCount;

// Function to initialize the game
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

// Handle starting the game
btnStart.addEventListener('click', function () {
  // Get player names from input fields and set them in the UI
  const name0 = document.getElementById('name--0').value || 'Player 1';
  const name1 = document.getElementById('name--1').value || 'Player 2';

  document.getElementById('display-name--0').textContent = name0;
  document.getElementById('display-name--1').textContent = name1;

  // Get additional setup values
  winningScore = parseInt(document.getElementById('winningScore').value, 10) || 100;
  diceCount = parseInt(document.getElementById('diceNumber').value, 10) || 1;

  // Hide setup, show game
  setupEl.classList.add('hidden');
  gameEl.classList.remove('hidden');

  // Initialize the game
  init();
});

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice * (diceCount === 2 ? 2 : 1); // Double score if 2 dice
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= winningScore) {
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// Handle resetting the game
btnNew.addEventListener('click', function () {
  setupEl.classList.remove('hidden');
  gameEl.classList.add('hidden');
});

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
