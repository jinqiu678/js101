let statement = "The Flintstones Rock";
// expresses frequency of each string element
// input is string, output is object
// data structure is object
/* Algorithm: 
** initialize empty object
** loop through string 
** check if object has own property, if not initialize each element as key to 1
** else +1 to value
** return new object
*/

count = {};
strArray = statement.split('');

strArray.forEach(ele => {
  if (count.hasOwnProperty(ele)) {
    count[ele] = count[ele] + 1;
  } else if (ele !== ' ') {
    count[ele] = 1;
  }
})

console.log(count);
// output: { T: 1, h: 1, e: 2, F: 1, l: 1, ... }