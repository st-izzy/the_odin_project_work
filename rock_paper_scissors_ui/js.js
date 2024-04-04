// variables
signs = ["🪨", "📃", "✂️"];
symbols = ["❓", "🤔", "❌", "✅", "🟰"];
let playedPlayer = symbols[0];
let playedComputer = symbols[0];
let resultCard = symbols[1];
let scoreComputer = 0;
let scorePlayer = 0;
let roundNumber = 0;
let easyMode = false;

// boards and elements
const headerBoard = document.querySelector("#header");

const scoreBoard = document.querySelector("#score");
const scoreTitle = document.querySelector("#scoreTitle");
const scoreLine = document.querySelector("#scoreLine");

const playBoard = document.querySelector("#play");
const roundCount = document.querySelector("#roundCount");
const signLine = document.querySelector("#signLine");
const resultLine = document.querySelector("#resultLine");

const signBoard = document.querySelector("#sign");

const extraBoard = document.querySelector("#extra");
// buttons
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset");

// functions

// set starting state
const gameStart = function() {
    resetButton.textContent = "Start";
    scoreBoard.style.display = "none";
    playBoard.style.display = "none";
    signBoard.style.display = "none";
};

// reset state
const gameReset = function() {
    resetButton.textContent = "Reset";
    scoreBoard.style.display = "flex";
    playBoard.style.display = "flex";
    signBoard.style.display = "flex";

    scoreTitle.textContent = "SCORE";
    scoreLine.textContent = scorePlayer + " -- " + scoreComputer;

    roundNumber = 1
    roundCount.textContent = "ROUND " + roundNumber;
    signLine.textContent = playedPlayer + " -- " + playedComputer;
    resultLine.textContent = resultCard;
};

// refresh boards
const gameRefresh = function() {
    scoreLine.textContent = scorePlayer + " -- " + scoreComputer;
    roundCount.textContent = "ROUND " + roundNumber;
    signLine.textContent = playedPlayer + " -- " + playedComputer;
    resultLine.textContent = resultCard;
};

// get computer sign
const shootComputer = function() {
    return Math.floor( Math.random() * 3 );
};

// button plays the game
const shootPlayer = function( signPlayer, signComputer ) {
    signBoard.style.display = "none";
    playedPlayer = signs[signPlayer];
    playedComputer = signs[signComputer];
    
    let signResult = signPlayer - signComputer;

    if ( ( signResult === -2 ) || ( signResult === 1 ) ) { // player wins
        winPlayer();
    } else if ( signResult === 0 ) { // draw
        winDraw();
    } else { // computer wins
        winComputer();
    };
};

// player wins
const winPlayer = function() {
    scorePlayer++;
    scoreTitle.textContent =  "🎉 SCORE 🎉";
    resultCard = symbols[3];
    gameResult()
};

// players draw
const winDraw = function() {
    scoreTitle.textContent = "🤔 SCORE 🤔";
    resultCard = symbols[4];
    gameResult()
};

// computer wins
const winComputer = function() {
    scoreComputer++;
    scoreTitle.textContent = "🤣 SCORE 🤣";
    resultCard = symbols[2];
    gameResult()
};


// hold results before refreshing
const gameResult = function() {
    gameRefresh();
    roundNumber++;
    setTimeout( gameReset(), "2000" );
};

// button behavior
resetButton.addEventListener( "click", () => {
    gameReset();
});
rockButton.addEventListener( "click", () => {
    shootPlayer( 0, shootComputer() )
});
paperButton.addEventListener( "click", () => {
    shootPlayer( 1, shootComputer() )
});
scissorsButton.addEventListener( "click", () => {
    shootPlayer( 2, shootComputer() )
})

gameStart();