const palindromes = function (input) {
    raw = input.replace(/\W/g, '').toLowerCase()

    for ( let i = 0 ; i < raw.length; i++ ) {
        if ( !( raw.charAt(i) === raw.charAt( raw.length - i - 1) ) ) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
