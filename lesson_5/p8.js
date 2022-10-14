let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

letters = Object.values(obj).flat().join('').split('');
console.log(letters);

allVowels = '';

letters.forEach(char => {
  if ('aeiou'.includes(char)) {
    allVowels += char
  }
})

console.log(allVowels);