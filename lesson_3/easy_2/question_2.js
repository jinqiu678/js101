// first way using reverse
let numbers = [1, 2, 3, 4, 5];
let reverse = numbers.slice().reverse();
console.log(reverse); 
console.log(numbers);

// second way
numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]