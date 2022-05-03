import './style.css';
import './index.scss';
import questionSvg from './assets.js';
// import ifGuessSuccess from './guessSuccess.js';
// import guessSuccess from './guessSuccess.js';

/* qestion-mark-place
guide-text
check-input
btn-check
high--score-num text-lg
current--score-num text-lg
restart-btn
 */

// selectors

const questionMark = document.querySelector('.qestion-mark-place');
const guideText = document.querySelector('.guide-text');
const checkInput = document.querySelector('.check-input');
const highScore = document.querySelector('.high--score-num');
const currentScore = document.querySelector('.current--score-num ');
const checkBtn = document.querySelector('.btn-check');
const restartBtn = document.querySelector('.restart-btn');
const randomNumber = document.querySelector('.random-number');
const whatSvg = document.querySelector('.what-svg');

// functions
// ----------------

// generate random number

const setRandom = Math.floor(Math.random() * 21);
randomNumber.textContent = setRandom;

// this function will run if the guess is smaller than the random number

const ifGuessSmall = function () {
  guideText.textContent = 'Number is too small please enter a bigger number';
};

// this function will run if the guess is higher than the random number

const ifGuessBig = function () {
  guideText.textContent = 'Number is too big please enter a smaller number';
};

// if guess is true then this function will run

const ifGuessSuccess = function () {
  guideText.textContent = 'Hurray! you have gussed the number 😀';
  if (currentValue > +highScore.textContent)
    highScore.textContent = currentValue + 1;
  whatSvg.style.opacity = 0;
  randomNumber.style.opacity = 1;
  guideText.style.color = 'green';
  currentScore.textContent = +currentScore.textContent + 1;
};

console.log(setRandom);

// compare number

let currentValue = 20;

const checkNumber = function () {
  const enteredNumber = checkInput.value;

  // decrement current score
  currentValue -= 1;
  currentScore.textContent = currentValue;
  if (+enteredNumber < setRandom) {
    ifGuessSmall();
  } else if (+enteredNumber > setRandom) {
    ifGuessBig();
  } else if (+enteredNumber === setRandom) {
    ifGuessSuccess();
  }
};

// event handlers

checkBtn.addEventListener('click', () => {
  checkNumber();
});
