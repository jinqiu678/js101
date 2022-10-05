// PSEUDO CODE
// function with 3 inputs (loan amount, monthly interest rate,
// loan duration)
// caculate monthly payment and assign to variable and change into dollar format
// return the variable
// test for edge cases
//  -Check for negative numbers and zero
//  -Check for empty inputs
//  -Check for non-numberic inputs
// annual interest rate instead of monthly interest rates
// payments or loan amount accounting floats or with dollar signs

const readline = require('readline-sync');

function prompt(input) {
  return console.log('=>', input);
}

// Testing invalid Number
function invalidNumber(number) {
  return number === '' ||
         number <= 0   ||
         Number.isNaN(Number(number));
}
/*
console.log(invalidNumber('a'));
console.log(invalidNumber(0));
console.log(invalidNumber(-100));
console.log(invalidNumber(''));
console.log(invalidNumber('100%'));
*/

let loanAmount = readline.question('What is the loan amount? ');
while (invalidNumber(loanAmount)) {
  prompt('Not a valid number');
  loanAmount = readline.question('What is the loan amount? ');
}

let apr = readline.question('What is the apr? ');
while (invalidNumber(loanAmount)) {
  prompt('Not a valid number');
  apr = readline.question('What is the apr? ');
}

let loanDuration = readline.question('What is the loan amount in months? ');
while (invalidNumber(loanAmount)) {
  prompt('Not a valid number');
  loanDuration = readline.question('What is the loan amount in months? ');
}

function mortgageCalculator(loanAmount, apr, loanDuration) {
  loanAmount = parseFloat(loanAmount); // incase trailing symbols
  apr = parseFloat(apr) / 100; // incase trailing symbols
  loanDuration = parseFloat(loanDuration); // incase trailing symbols

  let monthlyPayment = loanAmount *
  (apr / (1 - Math.pow((1 + apr), (-loanDuration))));
  return monthlyPayment;
}

console.log(`$${parseFloat(mortgageCalculator(loanAmount, apr, loanDuration).toFixed(2))}`);