const fibonacci = function(index) {
    index = Number(index)
    if ( index === 0 ) {
        return 0
    } else if ( index === 1 ) {
        return 1
    } else if ( index < 0 ) {
        return "OOPS"
    }
    let oldNum = 0
    let newNum = 1
    let answer = 0
    for ( let i = 1; i < index; i++ ) {
        answer = newNum + oldNum
        oldNum = newNum
        newNum = answer
    }

    return answer
};

// Do not edit below this line
module.exports = fibonacci;
