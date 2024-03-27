const convertToCelsius = function(fahr) {
  var cel_num = (fahr - 32) * (5/9)
  var cels = Math.round(cel_num*10)/10
  return cels
};

const convertToFahrenheit = function(cels) {
  var fahr_num = (9/5 * cels) + 32
  var fahr = Math.round(fahr_num*10)/10
  return fahr
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
