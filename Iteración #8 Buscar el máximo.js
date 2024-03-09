const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(param) {
  const wordCount = {};
  for (let i = 0; i < param.length; i++) {
    if (wordCount[param[i]]) {
      wordCount[param[i]]++;
    } else {
      wordCount[param[i]] = 1;
    }
  }
  return wordCount;
}

console.log(repeatCounter(counterWords));