function addToRollingBuffer2(maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

buffer = []
console.log(addToRollingBuffer2([], 4, 'a b'));
console.log(buffer)