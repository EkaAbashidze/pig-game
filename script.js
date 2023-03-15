'use strict';

const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const holdScore1 = document.getElementById('score--0');
const holdScore2 = document.getElementById('score--1');
const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let rolled = 0;
let currentScoreOne = 0;
let holdScoreOne = 0;
let currentScoreTwo = 0;
let holdScoreTwo = 0;
let player = 1;
let holdTurned = false;

const getRandomNum = function () {
  rolled = Math.round(Math.random() * 5) + 1;
};

rollDiceBtn.addEventListener('click', () => {
  holdTurned = true;
  if (
    player1.classList.contains('player--winner') ||
    player2.classList.contains('player--winner')
  )
    return;

  getRandomNum();

  if (player === 1) {
    currentScoreOne += rolled;
    currentScore1.textContent = currentScoreOne;

    if (rolled === 1 || rolled === 0) {
      diceImg.setAttribute('src', 'dice-1.png');
      holdScore1.textContent = holdScoreOne;
      currentScoreOne = 0;
      currentScore1.textContent = currentScoreOne;
      player = 2;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else if (rolled === 2) {
      diceImg.setAttribute('src', 'dice-2.png');
    } else if (rolled === 3) {
      diceImg.setAttribute('src', 'dice-3.png');
    } else if (rolled === 4) {
      diceImg.setAttribute('src', 'dice-4.png');
    } else if (rolled === 5) {
      diceImg.setAttribute('src', 'dice-5.png');
    } else if (rolled === 6) {
      diceImg.setAttribute('src', 'dice-6.png');
    }
  } else if (player === 2) {
    currentScoreTwo += rolled;
    currentScore2.textContent = currentScoreTwo;
    if (rolled === 1 || rolled === 0) {
      diceImg.setAttribute('src', 'dice-1.png');
      holdScore2.textContent = holdScoreTwo;
      currentScoreTwo = 0;
      currentScore2.textContent = currentScoreTwo;
      player = 1;
      player1.classList.add('player--active');
      player2.classList.remove('player--active');
    } else if (rolled === 2) {
      diceImg.setAttribute('src', 'dice-2.png');
    } else if (rolled === 3) {
      diceImg.setAttribute('src', 'dice-3.png');
    } else if (rolled === 4) {
      diceImg.setAttribute('src', 'dice-4.png');
    } else if (rolled === 5) {
      diceImg.setAttribute('src', 'dice-5.png');
    } else if (rolled === 6) {
      diceImg.setAttribute('src', 'dice-6.png');
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (holdTurned) {
    if (
      player1.classList.contains('player--winner') ||
      player2.classList.contains('player--winner')
    )
      return;
    if (player === 1) {
      holdScoreOne += currentScoreOne;
      holdScore1.textContent = holdScoreOne;
      currentScoreOne = 0;
      currentScore1.textContent = currentScoreOne;
      player = 2;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      if (holdScoreOne >= 100) {
        player1.classList.add('player--winner');
      }
    } else if (player === 2) {
      holdScoreTwo += currentScoreTwo;
      holdScore2.textContent = holdScoreTwo;
      currentScoreTwo = 0;
      currentScore2.textContent = currentScoreTwo;
      player = 1;
      player1.classList.add('player--active');
      player2.classList.remove('player--active');
      if (holdScoreTwo >= 100) {
        player2.classList.add('player--winner');
      }
    }
  }
  holdTurned = false;
});

newGameBtn.addEventListener('click', () => {
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  rolled = 0;
  currentScoreOne = 0;
  currentScore1.textContent = currentScoreOne;
  holdScoreOne = 0;
  holdScore1.textContent = holdScoreOne;
  currentScoreTwo = 0;
  currentScore2.textContent = currentScoreTwo;
  holdScoreTwo = 0;
  holdScore2.textContent = holdScoreTwo;
  player = 1;
});
