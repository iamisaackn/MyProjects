# Random Color Generator

This is a simple website that generates random colors for a set of color containers. Each time you refresh the page, the colors of the containers will change.

## Technologies Used
- HTML
- CSS
- JavaScript

## How It Works
### HTML
The HTML code defines the structure of the webpage. It includes an `<h1>` heading element with the text "Random Color Generator" and a `<div>` element with the class "container". The JavaScript code will generate color containers inside this div.

### CSS
The CSS code styles the elements on the webpage. It sets the background image of the `<body>` element, centers the `<h1>` heading, and defines the styles for the color containers. The color containers have an orange background, a fixed width and height, white text color with a text shadow, a border, and a border radius. They are displayed as flex items with centered content.

### JavaScript
The JavaScript code is responsible for creating the color containers and generating random colors for them.

```javascript
const containerE1 = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerE1 = document.createElement("div");
    colorContainerE1.classList.add("color-container");
    containerE1.appendChild(colorContainerE1);
}

const colorContainerE1s = document.querySelectorAll(".color-container");

function generateColor(){
    colorContainerE1s.forEach(
        (colorContainerE1) => {
            const newColorCode = randomColor();
            colorContainerE1.style.backgroundColor = "#" + newColorCode;
            colorContainerE1.innerText = "#" + newColorCode;
        }
    );
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}

generateColor();
