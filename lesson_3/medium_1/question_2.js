let munstersDescription = "The Munsters are creepy and spooky.";

munstersDescription = munstersDescription.split('');
let newString = ''

for (i of munstersDescription) {
  if (i === i.toUpperCase()) {
    newString = newString + i.toLowerCase();
  } else {
    newString = newString + i.toUpperCase();
  }
}

console.log(newString);

// Cleaner Solution

console.log(munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(""));