const sumAll = function( numA, numB ) {
    if ( ( numA < 0 ) || ( numB < 0 ) || 
            ( !Number.isInteger(numA) ) || ( !Number.isInteger(numB) ) ) {
        return "ERROR"
    }
    if ( numB < numA ) {
        let temp = numA
        numA = numB
        numB = temp
    }

    let sum = 0
    for (let i = numA; i <= numB; i++ ) {
        sum += i
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
