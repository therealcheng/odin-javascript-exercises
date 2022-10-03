const fibonacci = function (sequence) {
  let n = 0,
    current = 0;
  previous = 1;
  previous2 = 0;
  if (sequence < 0) return 'OOPS';
  else {
    while (n < sequence) {
      current = previous + previous2;
      previous2 = previous;
      previous = current;

      n++;
    }
    return previous2;
  }
};
console.log(fibonacci('25'));

// Do not edit below this line
module.exports = fibonacci;
