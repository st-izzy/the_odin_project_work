const repeatString = function(inputString, repeatNumber) {
    if ( repeatNumber < 0 ) { return "ERROR" } // catch negative numbers
    let outputString = "" // don't forget the quotes
    for (let i = 0; i < repeatNumber; i++ ) {
        outputString += inputString // += is cool
    }
    return outputString
};

// Do not edit below this line
module.exports = repeatString;
