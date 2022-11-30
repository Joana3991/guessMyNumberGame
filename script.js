'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
const scoreElement = document.querySelector('.score');
let highScore = 0;

//playing game
document.querySelector('.check').addEventListener('click',function () {
  const guess = Number(document.querySelector('.guess').value) //any input from the user always comes as a string, so we have to convert it into a number
  console.log(guess);
  if (!guess) { //we have to check if the input is empty. If it is, it will be 0, which is a falsy value
    document.querySelector('.message').textContent = '⛔️ No number!'
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👏 Correct number!'
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if ( score > highScore ){
      highScore = score
      document.querySelector('.highscore').textContent = highScore;
    }

  } else if (guess > secretNumber) {
    if (score > 1 ) {
      document.querySelector('.message').textContent = 'Too high!'
      score--;
      scoreElement.textContent = score;
    } else {
      document.querySelector('.message').textContent = '😕 You lost the game!'
      scoreElement.textContent = 0;
    }

  } else if (guess < secretNumber) {
    if (score > 1 ) {
      document.querySelector('.message').textContent = 'Too low!'
      score--;
      scoreElement.textContent = score;
    } else {
      document.querySelector('.message').textContent = '😕 You lost the game!'
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
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';

});
