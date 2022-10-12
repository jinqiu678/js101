let numbers = [1, 2, 3, 4];

// first way
counter = 0
while(counter < numbers) {
  numbers.pop();
  counter++
}

// second way
numbers.splice(0, numbers.length);

// third way 
numbers.length = 0;
