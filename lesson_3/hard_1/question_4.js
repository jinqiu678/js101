function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
if (dotSeparatedWords !== 4) {
  console.log('invalid stirng') 
}
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}

