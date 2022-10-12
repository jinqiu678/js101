let str1 = "hello there";
let str2 = str1; // primitive gets copied instead of referenced
str2 = "goodbye!"; 
console.log(str1);

//=> hello there