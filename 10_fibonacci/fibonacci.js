const fibonacci = function(n) {
  n = parseInt(n);
  if (n < 0) return "OOPS";
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;
  let next;

  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
