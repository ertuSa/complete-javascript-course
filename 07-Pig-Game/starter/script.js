'use strict';

// Elements instances ---------------------------------------------------------
const scoreElements = document.querySelectorAll('.score');
const currentElements = document.querySelectorAll('.current-score');
const playerElements = document.querySelectorAll('.player');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
// ----------------------------------------------------------------------------

// Global variables -----------------------------------------------------------
let winningScore = 100;
let startPlayerNumber = 1;
let activePlayerNum = 0;
let currentTmp;
let scoreTmp;
// ----------------------------------------------------------------------------
// Call initialize function when page was loaded.
init();

// Events assignment ----------------------------------------------------------
rollBtn.addEventListener('click', function () {
  const number = Math.trunc(Math.random() * 6) + 1;

  showElement(dice);
  dice.src = `dice-${number}.png`;

  if (1 !== number) {
    currentTmp += number;
    currentElements[activePlayerNum].textContent = currentTmp;
  } else {
    currentTmp = 0;
    currentElements[activePlayerNum].textContent = currentTmp;
    switchPlayer();
  }
});

holdBtn.addEventListener('click', function () {
  // 1. Add current score to total score and display it
  scoreTmp += currentTmp;
  scoreElements[activePlayerNum].textContent = scoreTmp;

  // 2. Check if total score is greater or equal to winningScore
  if (winningScore <= scoreTmp) {
    hideElement(dice);
    hideElement(rollBtn);
    hideElement(holdBtn);
    playerElements[activePlayerNum].classList.remove('player--active');
    playerElements[activePlayerNum].classList.add('player--winner');
  } else {
    currentTmp = 0;
    currentElements[activePlayerNum].textContent = 0;
    switchPlayer();
  }
});

newBtn.addEventListener('click', init);
// ----------------------------------------------------------------------------

// Internal functions ---------------------------------------------------------
function hideElement(elem) {
  elem.classList.add('hidden');
}

function showElement(elem) {
  elem.classList.remove('hidden');
}

function switchPlayer() {
  // playerElements[activePlayerNum].classList.remove('player--active');
  activePlayerNum = ++activePlayerNum % 2;
  // playerElements[activePlayerNum].classList.add('player--active');
  // instead of above we can also use below method to switch active player
  playerElements.forEach(elem => elem.classList.toggle('player--active'));
  scoreTmp = Number(scoreElements[activePlayerNum].textContent);
}

function init() {
  hideElement(dice);
  showElement(rollBtn);
  showElement(holdBtn);
  startPlayerNumber = ++startPlayerNumber % 2;
  playerElements[activePlayerNum].classList.remove('player--winner');
  activePlayerNum = startPlayerNumber;
  playerElements[activePlayerNum].classList.add('player--active');
  scoreTmp = 0;
  currentTmp = 0;
  currentElements.forEach(elem => (elem.textContent = 0));
  scoreElements.forEach(elem => (elem.textContent = 0));
}
// ----------------------------------------------------------------------------
