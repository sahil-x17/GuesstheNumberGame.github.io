'use strict';
// document.querySelector('.message').textContent = '🥳 Correct Number!';

// document.querySelector('.number');

// const x = function () {
//   console.log(23);
// };

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;
// document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //NO INPUT
  if (!guess) {
    displayMessage(' 😒No number! ');
  }
  //When Player Wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct Number!';
    displayMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too high!' : '📉 Too low!';
      // score--;
      // document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉 Too low!');
      document.querySelector('.score').textContent = 0;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤪You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤪You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   document.querySelector('.score').textContent = score;
  // }
  // // wehn guuss is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤪You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
