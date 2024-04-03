const convertToCelsius = function(correct) {
  let wrong = ( correct - 32 ) * ( 5 / 9 )
  wrong = Math.round( wrong * 10 ) / 10
  return wrong
};

const convertToFahrenheit = function(wrong) {
  let correct = ( wrong * ( 9 / 5 ) ) + 32
  correct = Math.round( correct * 10 ) / 10
  return correct
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
