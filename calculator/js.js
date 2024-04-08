// variables
let numA = 0;
let numB = 0;
let numC = 0;
let operationQueue = "none";
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
    numA = 0;
    numB = 0;
    numC = 0;
    operationQueue = "none";
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
    return +numA + +numB;
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
    numC = numA / numB
    if ( numC.toString().length > 9 ) {
        numC = parseFloat( numC.toString().slice(0, 10) );
    }
    console.log("calcDiv " + numA + " " + numB + " " + numC);
    return numC;
}
calcDivide(8, 4);

// calculation plus or minus
const calcPlusMinus = function(digits) {
    numC = 0
    if ( digits > 0 ) {
        numC = digits - (digits * 2);
    } else if ( digits < 0 ) {
        numC = digits - (digits * 2); // JS doesn't minus * minus = positive
    };
    console.log("calcPoM " + digits + " " + numC);
    return numC;
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
        case "none":
            return numA;
    }
}


// btnPlusMinus function
const funcPlusMinus = function() {
    displayValue = calcPlusMinus(displayValue);
    displayRefresh();
}

// btnPercent function
const funcPercent = function() {
    displayValue = calcDivide(displayValue, 100);
    if ( (operationQueue === "add") || (operationQueue === "subtract") ) {
        displayValue = calcMultiply(numA, displayValue);
    }
    displayRefresh();
    funcEqual();
}

// btnDivide
const funcDivide = function() {
    displayReturn = true;
    if ( !(operationQueue === "none") ) {
        funcEqual();
    };
    numA = displayValue;
    operationQueue = "divide";
    console.log("funcDiv " + numA + " " + operationQueue)
}

// btnMultiply
const funcMultiply = function() {
    displayReturn = true;
    if ( !(operationQueue === "none") ) {
        funcEqual();
    };
    numA = displayValue;
    operationQueue = "multiply";
    console.log("funcMlt " + numA + " " + operationQueue)
}

// btnSubtract function
const funcSubtract = function() {
    displayReturn = true;
    if ( !(operationQueue === "none") ) {
        funcEqual();
    };
    numA = displayValue;
    operationQueue = "subtract";
    console.log("funcSub " + numA + " " + operationQueue)
}

// btnAdd function
const funcAdd = function() {
    displayReturn = true;
    if ( !(operationQueue === "none") ) {
        funcEqual();
    };
    numA = displayValue;
    operationQueue = "add";
    console.log("funcAdd " + numA + " " + operationQueue + " " + displayValue)
    displayRefresh();
};

// btnEqual function
const funcEqual = function() {
    displayReturn = true;
    numB = displayValue;
    numC = numA;
    numA = calcEquals(operationQueue, numA, numB);
    displayValue = numA;
    console.log("funcEqual " + numC + " " + operationQueue + " " + numB + " " + displayValue);
    operationQueue = "none";
    displayRefresh();
}


// button behaviors
btnAC.addEventListener( "click", () => { // all clear
    displayClear();
});

btnPlusMinus.addEventListener( "click", () => { // plus or minus
    funcPlusMinus();
});

btnPercent.addEventListener( "click", () => { // change to percent
    funcPercent();
});

btnDivide.addEventListener( "click", () => {
    funcDivide();
})

btnMultiply.addEventListener( "click", () => {
    funcMultiply();
})

btnSubtract.addEventListener( "click", () => { // subtract button
    funcSubtract();
})

btnAdd.addEventListener( "click", () => { // add button
    funcAdd();
})

btnEqual.addEventListener( "click", () => { // equal button
    funcEqual();
})

btnDecimal.addEventListener( "click", () => { // decimal button
    displayAppend(`.`);
})

btnZero.addEventListener ( "click", () => { // num 0
    displayAppend(0);
});

btnOne.addEventListener( "click", () => { // num 1
    displayAppend(1);
});

btnTwo.addEventListener( "click", () => { // num 2
    displayAppend(2);
});

btnThree.addEventListener( "click", () => { // num 3
    displayAppend(3);
});

btnFour.addEventListener( "click", () => { // num 4
    displayAppend(4);
});

btnFive.addEventListener( "click", () => { // num 5
    displayAppend(5);
});

btnSix.addEventListener( "click", () => { // num 6
    displayAppend(6);
});

btnSeven.addEventListener( "click", () => { // num 7
    displayAppend(7);
});

btnEight.addEventListener( "click", () => { // num 8
    displayAppend(8);
});

btnNine.addEventListener( "click", () => { // num 9
    displayAppend(9);
});