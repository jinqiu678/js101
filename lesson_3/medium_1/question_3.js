function factors(number) {
  if (number < 0 || number === 0) {
    return "Number can't be negative or 0!";
  }
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

console.log(factors(16));
console.log(factors(0));
console.log(factors(-5));