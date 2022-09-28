const repeatString = function (str, num) {
  for (let count = 0; count < num + 1; count++) {
    str.repeat(count);
  }
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
