// Select the container element with class "container"
const containerE1 = document.querySelector(".container");

// Create 30 color container elements and append them to the container element
for (let index = 0; index < 30; index++) {
    const colorContainerE1 = document.createElement("div"); // Create a new div element
    colorContainerE1.classList.add("color-container"); // Add the class "color-container" to the div element
    containerE1.appendChild(colorContainerE1); // Append the div element to the container element
}

// Select all the color container elements
const colorContainerE1s = document.querySelectorAll(".color-container");

// Function to generate a random color and assign it to each color container
function generateColor() {
    colorContainerE1s.forEach(
        (colorContainerE1) => {
            const newColorCode = randomColor(); // Generate a random color code
            colorContainerE1.style.backgroundColor = "#" + newColorCode; // Set the background color of the color container
            colorContainerE1.innerText = "#" + newColorCode; // Set the text inside the color container to the color code
        }
    );
}

// Function to generate a random color code
function randomColor() {
    const chars = "0123456789abcdef"; // Available characters for a hexadecimal color code
    const colorCodeLength = 6; // Length of the color code (six characters)
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length); // Generate a random number within the range of available characters
        colorCode += chars.substring(randomNum, randomNum + 1); // Append a random character from the available characters to the color code
    }
    return colorCode; // Return the generated color code
}

generateColor(); // Call the generateColor function to assign random colors to the color containers
