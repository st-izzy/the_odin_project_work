// variables
let numA = 0;
let numB = 0;
let displayValue = 0;
let displayReturn = false; // digit gets set as displayValue instead of appended when true

// elements
const display = document.getElementById("display");
const btnAC = document.getElementById("btnAC");
const btnPlusMinus = document.getElementById("btnPlusMinus");
const btnPercent = document.getElementById("btnPercent");
const btnDivide = document.getElementById("btnDivide");
const btnSeven = document.getElementById("btnSeven");
const btnEight = document.getElementById("btnEight");
const btnNine = document.getElementById("btnNine");
const btnMultiply = document.getElementById("btnMultiply");
const btnFour = document.getElementById("btnFour");
const btnFive = document.getElementById("btnFive");
const btnSix = document.getElementById("btnSix");
const btnSubtract = document.getElementById("btnSubtract");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnAdd = document.getElementById("btnAdd");
const btnZero = document.getElementById("btnZero");
const btnDecimal = document.getElementById("btnDecimal");
const btnEqual = document.getElementById("btnEqual");

// functions

// displayRefresh
const displayRefresh = function() {
    display.textContent = displayValue;
}

// displayClear
const displayClear = function() {
    displayValue = 0;
    displayRefresh();
    console.log("displayClear");
}

// displayAppend
const displayAppend = function(digit) {
    if ( ( displayValue === 0 ) || ( displayReturn === true ) ) { // don't append to default zero
        displayValue = digit;
        displayReturn = false;
    } else if ( displayValue.toString().length < 9 ) { // display no more than 9 digits
        displayValue = `${displayValue}` + `${digit}`;
    }
    displayRefresh();
    console.log("displayAppend " + digit + " " + displayValue);
}

// calculation addition
const calcAdd = function(numA, numB) {
    console.log("calcAdd " + numA + " " + numB + " " + (numA + numB));
    return numA + numB;
};
calcAdd(1, 2)

// calculation subtraction
const calcSubtract = function(numA, numB) {
    console.log("calcSub " + numA + " " + numB + " " + (numA - numB));
    return numA - numB;
};
calcSubtract(3, 2)

// calculation multiplication
const calcMultiply = function(numA, numB) {
    console.log("calcMul " + numA + " " + numB + " " + (numA * numB));
    return numA * numB;
}
calcMultiply(2, 4);

// calculation division
const calcDivide = function(numA, numB) {
    console.log("calcDiv " + numA + " " + numB + " " + (numA / numB));
    return numA / numB;
}
calcDivide(8, 4);

// calculation plus or minus
const calcPlusMinus = function(digits) {
    let returnValue
    if ( digits > 0 ) {
        returnValue = digits - (digits * 2);
    } else if ( digits < 0 ) {
        returnValue = digits - (digits * 2); // JS doesn't minus * minus = positive
    };
    console.log("calcPoM " + digits + " " + returnValue);
    return returnValue
}
calcPlusMinus(-2);

// calculation equals
const calcEquals = function(operator, numA, numB) {
    switch (operator) {
        case "add":
            return calcAdd(numA, numB);
        case "subtract":
            return calcSubtract(numA, numB);
        case "multiply":
            return calcMultiply(numA, numB);
        case "divide":
            return calcDivide(numA, numB);
    }
}


// add button
//const btnAddFunc = function() {
//    displayValueHold = calcAdd();
//    displayReturn = true;
//    displayAppend(displayValueHold);
//}


// button functions
btnAC.addEventListener( "click", () => {
    displayClear();
});

btnAdd.addEventListener( "click", () => {
    btnAddFunc();
})

btnZero.addEventListener ( "click", () => {
    displayAppend(0);
});

btnOne.addEventListener( "click", () => {
    displayAppend(1);
});

btnTwo.addEventListener( "click", () => {
    displayAppend(2);
});

btnThree.addEventListener( "click", () => {
    displayAppend(3);
});

btnFour.addEventListener( "click", () => {
    displayAppend(4);
});

btnFive.addEventListener( "click", () => {
    displayAppend(5);
});

btnSix.addEventListener( "click", () => {
    displayAppend(6);
});

btnSeven.addEventListener( "click", () => {
    displayAppend(7);
});

btnEight.addEventListener( "click", () => {
    displayAppend(8);
});

btnNine.addEventListener( "click", () => {
    displayAppend(9);
});