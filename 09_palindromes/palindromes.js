const palindromes = function (word) {
  // separate word into split array, reverse array, join array
   const reverseWord = word.split('').reverse().join('');
  if (word === reverseWord) return true;
};

// Do not edit below this line
module.exports = palindromes;
