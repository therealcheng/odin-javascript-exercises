const palindromes = function (word) {
  const formatWord = word.toLowerCase().replace(/[!., ]/g, '');
  // separate word into split array, reverse array, join array
  const reverseWord = formatWord.toLowerCase().split('').reverse().join('');
  if (formatWord === reverseWord) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
