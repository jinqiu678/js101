const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard', 'r', 'p', 's', 'sp', 'l'];

// reassigning abbreviation to full word
function simplifyChoice(userChoice) {
  if (userChoice === 'r') {
    userChoice = 'rock'
  } else if (userChoice === 'p') {
    userCHoice = 'paper'
  } else if (userChoice === 's') {
    userChoice = 'scissors'
  } else if (userChoice === 'sp') {
    userChoice = 'spock'
  } else if (userChoice === 'l') {
    userChoice = 'lizard'
  } else
  userChoice = userChoice

  return userChoice
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
    return "computer";
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

do {
  // User choose
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let userChoice = readline.question();
  userChoice = simplifyChoice(userChoice)
  console.log(userChoice)

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice, please choose again");
    userChoice = readline.question().toLowerCase();
  }

  // computer choice
  let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length) - 1;
  let computerChoice = simplifyChoice(VALID_CHOICES[randomIndex]);

  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);
  let winner = returnWinner(userChoice, computerChoice);

  // adding score to winner
  addScore(winner);
  console.log(`${winner} won this round!`);

  // count of number of wins
  prompt(`You won ${userScore} times, computer won ${computerScore} times, 
  winner will be best out of 5!`);

} while ((userScore < 3) && (computerScore < 3));