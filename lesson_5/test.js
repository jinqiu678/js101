let arr = [1, 2];

result = arr.map(element => {
  console.log(element);
  return arr.pop();
}); // => [ 2, <1 empty item> ]

console.log(result);