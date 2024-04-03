const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// a <p> with red text that says "Hey I'm red!"
const pRed = document.createElement("p")
pRed.textContent = "Hey I'm red!"
pRed.style.color = "red"
container.appendChild(pRed)

// an <h3> with blue text that says "I'm a blue h3!"
const h3Blue = document.createElement("h3")
h3Blue.textContent = "I'm a blue h3!"
h3Blue.style.color = "blue"
container.appendChild(h3Blue)

// a <div> with a black border and pink background color
const newDiv = document.createElement("div")
newDiv.classList.add("newDiv")

// inside of newDiv: another <h1> that says "I'm in a div"
const h1InDiv = document.createElement("h1")
h1InDiv.textContent = "I'm in a div"
newDiv.appendChild(h1InDiv)

// inside of newDiv: a <p> that says "ME TOO!"
const pInDiv = document.createElement("p")
pInDiv.textContent = "ME TOO!"
newDiv.appendChild(pInDiv)

// append newDiv to container after appending children
container.appendChild(newDiv)

// external on<eventType>
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// buttons is a node list
const buttons = document.querySelectorAll(".newButton");
// forEach to iterate through each button
buttons.forEach( (button) => {
    // add a 'click' listener to each
    button.addEventListener("click", () => {
        alert(button.id);
    });
})