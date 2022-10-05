function lowerInitial(word) {
  if (word.length === 0) {       // If word contains an empty String,
    return '-';                  // return a dash instead of proceeding.
  }

  return word[0].toLowerCase();  // word is guaranteed to have at least
}                                // 1 character, so word[0] never evaluates as undefined.

console.log(lowerInitial(undefined));