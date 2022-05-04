import './style.css';
import './index.scss';
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

const setRandom = function () {
  randomNumber.textContent = Math.floor(Math.random() * 21);
};

setRandom();

// this function will run if the guess is smaller than the random number

function ifGuessSmall() {
  guideText.textContent = 'Number is too small please enter a bigger number';
  guideText.style.color = 'rgb(247,64,64)';
}

// this function will run if the guess is higher than the random number

const ifGuessBig = function () {
  guideText.textContent = 'Number is too big please enter a smaller number';
  guideText.style.color = 'rgb(247,64,64)';
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
  checkBtn.classList.add('workless');
  checkInput.classList.add('workless');
  checkInput.value = '';
  restartBtn.classList.remove('stop-restart');
};

// compare number

let currentValue = 20;

const checkNumber = function () {
  const enteredNumber = checkInput.value;

  // decrement current score
  currentValue -= 1;
  currentScore.textContent = currentValue;
  if (+enteredNumber < +randomNumber.textContent) {
    ifGuessSmall();
  } else if (+enteredNumber > +randomNumber.textContent) {
    ifGuessBig();
  } else if (+enteredNumber === +randomNumber.textContent) {
    ifGuessSuccess();
  }
};

/* restart the game  */ //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//steps1: set the guide text to "start guessing a number between 0-20 and color to "

// step2: remove the workless class to input and check btn

// step3:  set the current scrore to 20

// step4: opacity 0 to random number

const restartGame = function () {
  guideText.textContent = 'start guessing a number between 0-20';
  guideText.style.color = 'rgb(37,37,37)';
  checkBtn.classList.remove('workless');
  checkInput.classList.remove('workless');
  currentScore.textContent = 20;
  randomNumber.style.opacity = 0;
  restartBtn.classList.add('stop-restart');
  whatSvg.style.opacity = 1;
  currentValue = 20;
  setRandom();
};

// ////////////////////////////////////////////////////////////////////////////////////////

// event handlers

checkBtn.addEventListener('click', () => {
  checkNumber();
});

// restart handler

restartBtn.addEventListener('click', () => {
  restartGame();
});