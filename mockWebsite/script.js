function greetUser() {
  console.log('Why hello there! 👋');
}

function warnUser() {
  console.warn('Look behind you!');
}

function showError() {
  console.error('Yikes!');
}

function promptUser() {
  const name = prompt('What is your name?');
  console.log(`Nice to meet you, ${name}`);
}

function playGuessingGame() {
  if (!confirm('Would you like to play a guessing game?')) {
    return;
  }

  checkGuess();
}

function checkGuess() {
  let gameInProgress = true;
  let randomNum = Math.floor(Math.random()*10);

  while (gameInProgress) {
    const guess = prompt('Guess a number between 1 - 10');

    if (parseInt(guess) == randomNum) {
      alert(`Yes! ${guess} is the mystery number!`);
      gameInProgress = false;
    } else {
      alert(`Sorry! ${guess} is not the mystery number.`);
      gameInProgress = confirm('Would you like to continue playing?');
    }
  }
}