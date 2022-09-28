const repeatString = function (str, num) {
  let output = str;

  for (let count = 0; count < num + 1; count++) {
    output = str.repeat(count);
  }
  return output;
};
console.log(repeatString('hey', -1));

// Do not edit below this line
module.exports = repeatString;
