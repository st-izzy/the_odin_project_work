const add = function(numA, numB) {
  return numA + numB
};

const subtract = function(numA, numB) {
  return numA - numB  
};

const sum = function(toSum) {
	let theSum = 0
  toSum.forEach( (num) => {
    theSum += num
  } )
  return theSum
};

const multiply = function(toMultiply) {
  let answer = 1
  toMultiply.forEach( (multiple) => {
    answer = answer * multiple
  } )
  return answer
};

const power = function(numA, numB) {
	return numA ** numB
};

const factorial = function(integer) {
  if ( integer === 0 ) { return 1 };
  let answer = integer
  for ( let i = 1; i < integer; i++ ) {
    answer = answer * i
  }	
  return answer
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
