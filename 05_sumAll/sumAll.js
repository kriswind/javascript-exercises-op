const sumAll = function(x, y) {
  if (x < 0 || y < 0) return "ERROR"
  if ((typeof x !== 'number') || (typeof y !== 'number')) return "ERROR"
  if (x > y) {
    let tmp = x
    x = y
    y = tmp
  }
  var sum = 0;
  for (var i = x; i < y + 1; i++) {
    sum += i;
  };
  return sum
};

// Do not edit below this line
module.exports = sumAll;
