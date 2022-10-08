const readline = require('readline-sync');
const VALID_CHOICES = {
  r: "rock",
  p: "paper",
  s: "scissors",
  sp: "spock",
  l: "lizard",
};

function simplifyChoice(userChoice) {
  return VALID_CHOICES[userChoice] || userChoice;
}

// Adding spock and lizard to the RPS options
function playerWins(userChoice, computerChoice) {
  return (userChoice === 'rock' && computerChoice === 'scissors') ||
         (userChoice === 'rock' && computerChoice === 'lizard') ||
         (userChoice === 'paper' && computerChoice === 'rock') ||
         (userChoice === 'paper' && computerChoice === 'spock') ||
         (userChoice === 'scissors' && computerChoice === 'paper') ||
         (userChoice === 'scissors' && computerChoice === 'lizard') ||
         (userChoice === 'lizard' && computerChoice === 'paper') ||
         (userChoice === 'lizard' && computerChoice === 'spock') ||
         (userChoice === 'spock' && computerChoice === 'rock') ||
         (userChoice === 'spock' && computerChoice === 'scissors');
}

function returnWinner(userChoice, computerChoice) {
  if (playerWins(userChoice, computerChoice)) {
    return 'user';
  } else if (userChoice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }

}

function prompt(message) {
  console.log(`=> ${message}`);
}

// initializing playAgain variabe in global scope to accessed in do/while
// initializing user and computer score to be accessed in function
let userScore = 0;
let computerScore = 0;

function addScore(winner) {
  if (winner === 'user') {
    userScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() *
  Object.keys(VALID_CHOICES).length);
  let randomKey = Object.keys(VALID_CHOICES)[randomIndex];
  let computerChoice = VALID_CHOICES[randomKey];
  return computerChoice;
}
do {
  // User choose
  prompt(`Choose one: ${Object.entries(VALID_CHOICES).join(', ')}`);
  let userChoice = readline.question();
  userChoice = simplifyChoice(userChoice.toLowerCase());
  console.clear();

  while (!Object.values(VALID_CHOICES).includes(userChoice)) {
    prompt("That's not a valid choice, please choose again");
    userChoice = simplifyChoice(readline.question().toLowerCase());
  }

  // computer choice
  getComputerChoice();

  prompt(`You chose ${userChoice}, computer chose ${getComputerChoice()}`);
  let winner = returnWinner(userChoice, getComputerChoice());

  // adding score to winner
  addScore(winner);
  console.log(`${winner} won this round!`);

  // count of number of wins
  prompt(`You won ${userScore} times, computer won ${computerScore} times, 
  winner will be best out of 5!`);


} while ((userScore < 3) && (computerScore < 3));