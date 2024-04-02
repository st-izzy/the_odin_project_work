const removeFromArray = function(inputArray, ...numbers) {
    let outputArray = []
    inputArray.forEach( (num) => {
        if (!numbers.includes(num)) {
            outputArray.push(num)
        }
    })
    return outputArray
};

// Do not edit below this line
module.exports = removeFromArray;
