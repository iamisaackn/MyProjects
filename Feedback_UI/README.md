# Feedback UI
This project is a simple feedback user interface (UI) implemented using HTML, CSS, and JavaScript. It allows users to provide feedback by selecting a rating option and submitting it. The selected rating is then displayed on the screen with a thank you message.

## Demo
To view the demo live Click [Here](https://iamisaackn.github.io/Feedback_UI/)

## Project Structure
The project consists of three files:
1. `index.html` - HTML file that defines the structure of the UI.
2. `style.css` - CSS file that provides styles for the UI elements.
3. `index.js` - JavaScript file that handles the interaction and functionality of the UI.

## How to Use
To use this project, follow these steps:
1. Create an HTML file and name it index.html.
2. Copy the HTML code provided in the code snippet into the index.html file.
3. Create a CSS file and name it style.css.
4. Copy the CSS code provided in the code snippet into the style.css file.
5. Create a JavaScript file and name it index.js.
6. Copy the JavaScript code provided in the code snippet into the index.js file.
7. Save all the files in the same directory.
8. Open the index.html file in a web browser.

## Code Explanation

### JavaScript (index.js)
The JavaScript code provides the functionality for the feedback UI. Here's a breakdown of its key components:

1. Selecting Elements: The JavaScript code selects the necessary elements from the HTML file using `document.getElementById` and `document.querySelectorAll` methods.
2. Handling Rating Selection: The code attaches click event listeners to each rating element using a `forEach` loop. When a rating is clicked, the event listener updates the `selectedRating` variable with the clicked rating value and adds the "active" class to the clicked element.
3. Removing Active Class: The `removeActive` function is defined to remove the "active" class from all rating elements. It uses `forEach` to iterate over the rating elements and removes the class.
4. Submitting Feedback: When the "Send Review" button is clicked, the code checks if a rating has been selected. If a rating is selected, it updates the HTML content of the `containerEl` element to display a thank you message along with the selected rating.

### HTML (index.html)
The HTML code defines the structure of the feedback UI. It includes a container with a heading, a ratings container, and a submit button.

### CSS (style.css)
The CSS code provides the styles for the UI elements. It defines the layout, colors, and hover effects for the container, ratings, and button elements.

### Conclusion
This feedback UI project allows users to provide ratings and submit feedback. It can be easily integrated into other web applications or used as a standalone component. Feel free to customize the styles and extend the functionality to meet your specific requirements.
