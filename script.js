'use strict';
let winning = Math.trunc(Math.random() * 20) + 1;
console.log(winning);
let ghighscore = 0;
let current_score = 20;

const DOM_manipulator = function (tag, set) {
  console.log(tag, typeof tag, set, typeof set);
  document.querySelector(tag).textContent = set;
};

const again_fn = function () {
  current_score = 20;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.message').textContent = 'Start Guessing...';
  winning = Math.trunc(Math.random() * 20) + 1;
  console.log(winning);
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = current_score;
  document.querySelector('.highscore').textContent = ghighscore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessed = Number(document.querySelector('.guess').value);
  console.log(guessed, typeof guessed);
  if (current_score == 1) {
    current_score--;
    document.querySelector('body').style.backgroundColor = 'red';
    DOM_manipulator('.message', 'Game Over !! Dude');
  } else if (!guessed) {
    DOM_manipulator('.message', '⛔No Number!');
  } else if (guessed != winning) {
    current_score--;
    guessed > winning
      ? DOM_manipulator('.message', 'Too HIGH 😮😯!')
      : DOM_manipulator('.message', 'Too low 🤔😶!');
  } else {
    document.querySelector('.message').textContent = 'Correct Number! Yeah!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (ghighscore < current_score) ghighscore = current_score;
    document.querySelector('.highscore').textContent = ghighscore;
  }
  document.querySelector('.score').textContent = current_score;
});

document.querySelector('.again').addEventListener('click', again_fn);
