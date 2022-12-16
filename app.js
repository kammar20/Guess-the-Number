const checkBtn = document.querySelector('.check');
const again = document.querySelector('.again');
let message = document.querySelector('.message');

// randomm number
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Check Button Event Listner
checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No Number Enter
  if (!guess) {
    message.textContent = 'No Number 🔴';
  }

  // When player Wins
  else if (guess === randomNumber) {
    message.textContent = 'You Win 🏆';
    document.body.style.backgroundColor = 'limeGreen';
    document.querySelector('.number').textContent = randomNumber;

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When player lose
  else if (guess !== randomNumber) {
    if (score > 1) {
      message.textContent =
        guess > randomNumber ? 'Too High ! 📈' : 'To Low ! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You Lose 🔴';
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'Red';
    }
  }

  // When guess is to high
  // else if (guess > randomNumber) {
  //   if (score > 1) {
  //     message.textContent = 'Too High ! 📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     message.textContent = 'You Lose 🔴';
  //     document.querySelector('.score').textContent = 0;
  //     document.body.style.backgroundColor = 'Red';
  //   }
  // }

  // When guess is to Low
  // else if (guess < randomNumber) {
  //   if (score > 1) {
  //     message.textContent = 'To Low ! 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     message.textContent = 'You Lose 🔴';
  //     document.querySelector('.score').textContent = 0;
  //     document.body.style.backgroundColor = 'Red';
  //   }
  // }
});

// Again Button Event Listner
again.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.body.style.backgroundColor = '#222';
});
