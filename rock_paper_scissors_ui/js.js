// variables
signs = ["🪨", "📃", "✂️"];
symbols = ["❓", "🤔", "❌", "✅", "🟰"];
let playedPlayer = symbols[0];
let playedComputer = symbols[0];
let scoreTitleContent = "SCORE"
let resultCard = symbols[1];
let scoreComputer = 0;
let scorePlayer = 0;
let scoreResult = "LOSE";
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

// refresh boards
const gameRefresh = function() {
    scoreTitle.textContent = scoreTitleContent;
    scoreLine.textContent = scorePlayer + " -- " + scoreComputer;
    roundCount.textContent = "ROUND " + roundNumber;
    signLine.textContent = playedPlayer + " -- " + playedComputer;
    resultLine.textContent = resultCard;
};

// reset state
const gameReset = function() {
    resetButton.textContent = "Reset";
    scoreBoard.style.display = "flex";
    playBoard.style.display = "flex";
    signBoard.style.display = "flex";

    gameRefresh()
};

// finish state
const gameFinish = function() {
    resetButton.textContent = "Play Again"
    playBoard.style.display = "none";
    signBoard.style.display = "none";

    scoreTitleContent = "🎆🎉🥳 You " + scoreResult + " 🥳🎉🎆"
    gameRefresh();
}

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
    scoreTitleContent =  "🎉 SCORE 🎉";
    resultCard = symbols[3];
    gameResult()
};

// players draw
const winDraw = function() {
    scoreTitleContent = "🤔 SCORE 🤔";
    resultCard = symbols[4];
    gameResult()
};

// computer wins
const winComputer = function() {
    scoreComputer++;
    scoreTitleContent = "🤣 SCORE 🤣";
    resultCard = symbols[2];
    gameResult()
};


// update round number and determine if the game is finished or continues
const gameResult = function() {
    gameRefresh();
    roundNumber++;

    if ( roundNumber === 6 ) {
        if ( scorePlayer > scoreComputer ) {
            scoreResult = "WIN"
        } else if ( scorePlayer < scoreComputer ) {
            scoreResult = "LOSE"
        } else {
            scoreResult = "DREW"
        }
        gameFinish();
    } else {
        gameReset();
    }
};

// button behavior
resetButton.addEventListener( "click", () => {
    playedPlayer = symbols[0];
    playedComputer = symbols[0];
    scoreTitleContent = "SCORE"
    resultCard = symbols[1];
    scoreComputer = 0;
    scorePlayer = 0;
    roundNumber = 1;
    easyMode = false;
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