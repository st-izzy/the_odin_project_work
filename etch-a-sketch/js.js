// buttons and elements
const display = document.getElementById("display");
const rainbowButton = document.getElementById("rainbow");
const resetButton = document.getElementById("reset");
const sizeSlider = document.getElementById("sizeSlider");
const sizeReadout = document.getElementById("sizeReadout");

// button behavior
// rainbow button
let rainbowMode = false
rainbowButton.addEventListener("click", () => {
    if (rainbowMode == false) {
        rainbowMode = true
    } else {
        rainbowMode = false
    }
    console.log("rainbow " + rainbowMode)
})

// reset button
resetButton.addEventListener("click", () => {
    console.log("resetButton");
    clearGrid();
    createGrid();
})

// slider readout
sizeReadout.innerHTML = sizeSlider.value;
sizeSlider.oninput = function () {
    sizeReadout.innerHTML = this.value;
    clearGrid();
    createGrid();
}

// create a grid in the display div
const createGrid = function() {
    // the display is hard-coded 700x400 pixels; cells are square, so need to 
    // have more cells right-to-left than slider amount
    const gridResTall = sizeSlider.value; // resolution height matches slider
    const cellEdge = 400 / gridResTall; // determine cell edge length
    const gridResWide = Math.round( sizeSlider.value * ( 7 / 4 ) ); // how many more cells wide than tall?

    // first create the rows down
    for ( let i = 0; i < gridResTall; i++ ) {
        const row = document.createElement("div");
        row.className = "row";
        row.style.height = `${cellEdge}px`;
        display.appendChild(row);

        // then create the cells across
        for ( let j = 0; j < gridResWide; j++ ) {
            const newCell = document.createElement("div");
            newCell.id = i + " " + j;
            newCell.className = "cell";
            newCell.style.width = `${cellEdge}px`;
            newCell.style.height= `${cellEdge}px`;
            row.appendChild(newCell);

            // add event listener for mouseover
            newCell.addEventListener("mouseover", () => {
                if (rainbowMode) {
                    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    newCell.style.backgroundColor = `#${randomColor}`;
                } else {
                    newCell.style.backgroundColor = "black";
                }
            });
        }
    }
}

// clear grid
const clearGrid = function() {
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
}

createGrid()