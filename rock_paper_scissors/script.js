// variables
let signs = ["r", "p", "s"];
let tools = ["rock", "paper", "scissors"]
let winsComputer = 0
let winsUser = 0

// Introduction
console.log("Rock Paper Scissors");
console.log("Best of five wins...");
console.log("");

// for loop five times
for ( let i = 0; i < 5; i++ ) {
    // computer chooses sign (number from 0 to 2)
    let signComputer = Math.floor(Math.random()*3);

    // prompt user for their sign
    let userInput = prompt("Shoot!");
    let signUser = signs.indexOf(userInput.charAt(0).toLowerCase()); // for 0 to 2

    // invalid inputs happen to always return as "-1"
    // because I can't get while loops working, we just set user's sign to rock
    if ( signUser < 0 ) {
        console.log('Input invalid: Assuming "rock".')
        signUser = 0
    }
/*
    // I have no clue why this keeps getting stuck in while loop
    while ( signUser < 0 ) {
        let userInput = prompt("What was that? Try again!");
        let signUser = signs.indexOf(userInput.charAt(0).toLowerCase());
    }
*/
    
    // subtract computer from user sign to determine winner
    // -2 or 1 equals user win; 0 equals draw; any other result is a loss (2, -1)
    let signResult = signUser - signComputer

    // announce result
        // win
    if ( ( signResult === -2 ) || ( signResult === 1 ) ) {
        console.log("Shoot: " + userInput + " wins")
        console.log( tools[signUser] + " beats " + tools[signComputer] )
        winsUser++ // increment user wins

        // draw, no increment
    } else if ( signResult === 0 ) {
        console.log("Shoot: " + userInput + " draws")
        console.log( "oops, we both chose " + tools[signUser] )

        // lose
    } else {
        console.log("Shoot: " + userInput + " loses")
        console.log( tools[signComputer] + " beats " + tools[signUser] )
        winsComputer++ // increment computer wins
    }

    console.log("")
};

// announce set results
console.log(winsUser + " to " + winsComputer)
if ( winsUser > winsComputer ) {
    console.log("You WIN!")
} else {
    console.log("You LOSE!")
}