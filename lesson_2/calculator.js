// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// Ask the user if they want to calculate again
// Repeat
const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}


function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let tryAgain = '';

do {
  prompt(messages('welcome', 'fr'));

  prompt(messages('firstNumber', 'fr'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('invalidNumber', 'fr'));
    number1 = readline.question();
  }

  prompt(messages('secondNumber', 'fr'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('invlaidNumber', 'fr'));
    number2 = readline.question();
  }

  prompt(messages('operationSelection', 'fr'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('chooseRightOperation', 'fr'));
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${messages('resultIs', 'fr')} ${output}`);

  prompt(messages('calculateAgain', 'fr'));
  tryAgain = readline.question().toLowerCase();
} while (tryAgain === 'yes');
