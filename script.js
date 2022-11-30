'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
const scoreElement = document.querySelector('.score');
let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

//playing game
document.querySelector('.check').addEventListener('click',function () {
  //any input from the user always comes as a string, so we have to convert it into a number
  const guess = Number(document.querySelector('.guess').value)
  //we have to check if the input is empty. If it is, it will be 0, which is a falsy value
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('👏 Correct number!');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if ( score > highScore ){
      highScore = score
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if(guess !== secretNumber){
    if (score > 1 ) {
      //we use the ternary operator to refactor it
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('😕 You lost the game!');
      scoreElement.textContent = 0;
    }
  }
});

//restart game
document.querySelector('.again').addEventListener('click', function(){
  document.body.style.backgroundColor = '#222';
  score = 20;
  scoreElement.textContent = score;
  secretNumber = Math.trunc(Math.random()*20)+1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
