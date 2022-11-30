'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '👏 Correct number!'
document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 13;

document.querySelector('.check').addEventListener('click',function () {console.log(document.querySelector('.guess').value)})
