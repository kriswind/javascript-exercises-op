const add = function(x, y) {
  return x + y
};

const subtract = function(x, y) {
  return x - y
};

const sum = function([...args]) {
  let total = 0;
  args.forEach(function(arg) {
    total += parseInt(arg);
  });
  return total;
};

const multiply = function([...args]) {
  let total = 0;
  args.forEach(function(arg) {
    if (total == 0) {total = arg; return;}
    total = total * arg;
  });
  return total;
};

const power = function(x, y) {
  return Math.pow(x, y)
};

const factorial = function(n) {
  //base case for 0!
  if (n == 0 || n == 1) {
    return 1;
    //recursion case
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
