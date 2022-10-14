/*
Display the initial empty 3x3 board.
Ask the user to mark a square.
Computer marks a square.
Display the updated board state.
If it's a winning board, display the winner.
If the board is full, display tie.
If neither player won and the board is not full, go to #2
Play again?
If yes, go to #1
Goodbye!
*/

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

let readline = require('readline-sync');
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function joinOr(arr, delimiter = ', ', lastDelimiter = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${lastDelimiter} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) + ` ${lastDelimiter} ${arr[arr.length - 1]}`;
  }
}

function prompt(input) {
  console.log(`=> ${input}`);
}

function displayBoard(board) {
  // console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeboard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim(); // removing white spaces from using input

    if (emptySquares(board).includes(square)) break;

    prompt("Not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function offense(line, board) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === COMPUTER_MARKER).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function defense(line, board) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === HUMAN_MARKER).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerChoosesSquare(board) {
  let square;

  // offense first

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = offense(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  // defense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = defense(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square && board[5] === INITIAL_MARKER) {
    square = 5;
  }

  // just pick a random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }


  board[square] = COMPUTER_MARKER;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}
// at bottom of program
let playerScore = 0;
let computerScore = 0;
const NUM_WINS_NEEDED = 5;

function calculateScore(winner) {
  if (winner === 'Player') {
    playerScore++;
  } else if (winner === 'Computer') {
    computerScore++;
  }
}
function displayScore() {
  prompt(`Playerscore: ${playerScore}`);
  prompt(`Computerscore: ${computerScore}`);
  prompt('Winner needs to win 5 games');
}

while (playerScore < NUM_WINS_NEEDED || computerScore < NUM_WINS_NEEDED) {
  let board = initializeboard();
  let firstUser;

    while (true) {
      prompt('Who should go first? (computer / human)')
      firstUser = readline.question();
      if (firstUser === 'computer' || firstUser === 'human') break;
      prompt('invalid selection');
    }

  while (true) {
    if (firstUser === 'computer')
    {
      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      displayBoard(board);

      playerChoosesSquare(board);
     if (someoneWon(board) || boardFull(board)) break;

    } else {

      displayBoard(board);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }
  
  
  }

  displayBoard(board);

  let winner = detectWinner(board)

  if (someoneWon(board)) {
    prompt(`${winner} won!`);
  } else {
    prompt("It's a tie!");
  }

  calculateScore(winner);
  displayScore()

  
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
  
}

prompt('Thanks for playing Tic Tac Toe!');