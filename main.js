import './style.css';
import './index.scss';
import questionSvg from './assets.js';

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

// functions
// ----------------

// generate random number

const setRandomNumber = function (elem) {
  const randomElem = elem;
  elem.textContent = Math.floor(Math.random() * 20);
};

setRandomNumber(randomNumber);

// compare number

const checkNumber = function () {
  const enteredNumber = checkInput.value;
  const randomNum = +randomNumber.textContent;
  if (enteredNumber < randomNum) {
    guideText.textContent = 'Number is too small please enter a bigger number';
  } else if (enteredNumber > randomNum) {
    guideText.textContent = 'Number is too big please enter a smaller number';
  } else if (enteredNumber == randomNum) {
    guideText.textContent = 'Hurray! you have gussed the number 😀';
  }
};

// event handlers

checkBtn.addEventListener('click', () => {
  checkNumber();
});
