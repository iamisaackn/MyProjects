# Emoji Animation

This project is a simple HTML, CSS, and JavaScript application that displays an emoji whenever the mouse is hovered over the screen. The emoji changes color and size, creating a visually appealing effect. This project was created to celebrate Pride Month and promote inclusivity.

## Demo

To see the project in action.

https://github.com/iamisaackn/happy_pride_month/assets/117882836/fad39e7d-ee73-4c57-bef7-4af152165824

## Installation

1. Clone the repository or download the project files.
2. Open the project folder.

## Usage

1. Open the `index.html` file in your preferred web browser.
2. Hover your mouse over the screen to see the pride heart emoji.
3. The heart emoji will change color and size while animating.
4. Enjoy the visual effects and celebrate Pride Month!

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

The project consists of the following files:

- `index.html`: The HTML file that serves as the entry point of the application.
- `style.css`: The CSS file that defines the styles and animations for the project.
- `index.js`: The JavaScript file that handles the mouse hover event and creates the pride heart emoji dynamically.

## Code Explanation

### HTML

The HTML file `index.html` sets up the basic structure of the web page. It includes references to the CSS and JavaScript files.

### CSS

The CSS file `style.css` defines the styles for the project. It sets the background color of the body to black and hides any overflow. The `span` selector is used to create the pride heart emoji. It sets the background image of the emoji and positions it in the center of the screen. An animation called `animate` is applied to the emoji, which gradually moves it off the screen, changes its opacity, and applies a hue rotation effect.

### JavaScript

The JavaScript file `index.js` handles the mouse hover event. It selects the `body` element from the HTML and adds an event listener for the `mousemove` event. When the mouse is moved, the event handler function is executed. It creates a `span` element dynamically and positions it at the current mouse coordinates. The size of the emoji is set randomly. The created `span` element is appended to the `body` element. After 3 seconds, the `span` element is removed from the DOM.

## Acknowledgements

I would like to thank [iconfinder.com](https://www.iconfinder.com/) for providing the pride heart emoji image used in this project.

