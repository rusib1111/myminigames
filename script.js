// Game Logic for Rock, Paper, Scissors
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => game('rock'));
document.getElementById('paper').addEventListener('click', () => game('paper'));
document.getElementById('scissors').addEventListener('click', () => game('scissors'));

function game(userChoice) {
  // User choice display
  userChoiceDisplay.textContent = userChoice;

  // Generate computer's choice
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  computerChoiceDisplay.textContent = computerChoice;

  // Determine the result
  if (userChoice === computerChoice) {
    resultDisplay.textContent = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultDisplay.textContent = 'You win!';
  } else {
    resultDisplay.textContent = 'You lose!';
  }
}
