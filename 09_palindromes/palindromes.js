const palindromes = function (word) {
  const formatWord = word.replace('!', '');
  // separate word into split array, reverse array, join array
  const reverseWord = formatWord.toLowerCase().split('').reverse().join('');
  if (word === reverseWord) return true;
};

// Do not edit below this line
module.exports = palindromes;
