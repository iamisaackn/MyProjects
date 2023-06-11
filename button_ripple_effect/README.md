# Button Ripple Effect
This project demonstrates a button with a ripple effect implemented using HTML, CSS, and JavaScript.

## Usage
Clone the repository or download the project files.
Open the index.html file in your web browser.
## Description
The project consists of the following files:

1. `index.html`: The HTML file that contains the structure of the webpage.
2. `style.css`: The CSS file that defines the styles for the webpage.
3. `index.js`: The JavaScript file that implements the button's ripple effect.

## HTML Structure
The HTML structure is as follows:

The HTML file sets up the basic structure of the webpage and includes the CSS and JavaScript files.

## CSS Styles
The CSS styles are defined in the `style.css` file.

The CSS styles define the appearance of the button and the ripple effect. The `.btn` class represents the button, while the `::before` pseudo-element creates the ripple effect.

## JavaScript Logic
The JavaScript logic is implemented in the `index.js` file.

The JavaScript code adds an event listener to the button element. When the mouse is moved over the button (`mouseover` event), the position of the mouse cursor is captured, and the `--xPos` and `--yPos` custom CSS properties of the button element are updated to create the ripple effect.

