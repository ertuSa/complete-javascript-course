'use strict';

/*
window.onload = () => console.log('Welcome to my world!!!!');

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!!!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
*/

/* -------------------------------- *
 * Global variables declaration     *
 * -------------------------------- */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

/* -------------------------- *
 * Functions declarations     *
 * -------------------------- */
const display = function (elem, val) {
  document.querySelector(elem).style.display = val;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const startBtnClicked = function () {
  // Show all elements hidden with menu button click§§

  display('.guess', '');
  display('.check', '');
  display('.message', '');
  display('.label-score', '');
  display('.label-highscore', '');
  display('.between', '');
  display('.number', '');
  display('h1', '');
  document.querySelector('header').style.borderBottomWidth = '';
  // document.querySelector('.check').style.display = 'None';
};

const menuBtnClicked = function () {
  // Hide all elements except Again, Menu, Start buttons
  display('.guess', 'None');
  display('.check', 'None');
  display('.message', 'None');
  display('.label-score', 'None');
  display('.label-highscore', 'None');
  display('.between', 'None');
  display('.number', 'None');
  display('h1', 'None');
  document.querySelector('header').style.borderBottomWidth = '0px';
  // document.querySelector('.check').style.display = '';
};

const checkBtnClicked = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // when there is no input
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    // When player wins
    // Changing CSS style
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess < secretNumber) {
    // When guess it to low
    invalidValue('📉 Too low!');
  } else {
    // when guess is to high
    invalidValue('📈 Too high!');
  }
};

const againBtnClicked = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start quessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = '';
};

const invalidValue = function (message) {
  if (1 < score) {
    displayMessage(message);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
};

/* -------------------------- *
 * Main script                *
 * -------------------------- */
document.querySelector('.again').addEventListener('click', againBtnClicked); // function need to be passed as reference, not as function call with parenthesis ()

document.querySelector('.check').addEventListener('click', checkBtnClicked);

document.querySelector('.menu').addEventListener('click', menuBtnClicked);

document.querySelector('.start').addEventListener('click', startBtnClicked);
