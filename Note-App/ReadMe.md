# Note-Taking Application
This project is a simple web-based note-taking application.
It allows users to create, update, and delete notes dynamically within their web browser.
The notes are stored in the browser's `localStorage`, ensuring that they persist even after the page is refreshed or closed.

## Functionality
The application provides the following functionality:

Display Existing Notes: Upon loading the page, the application retrieves the existing notes from localStorage and displays them in the app area.

Create New Note: Clicking the "Add Note" button creates a new note with an empty content area. The note is inserted into the app area, and its corresponding object is added to the notes array in localStorage.

Update Note Content: Double-clicking on a note allows the user to edit its content. Changes are immediately saved to localStorage.

Delete Note: Double-clicking on a note triggers a confirmation dialog. If confirmed, the note is deleted from both the app area and localStorage.

Usage
To use this note-taking application in your project, follow these steps:

Add the following HTML elements to your page:

html
Copy code
<button id="btn">Add Note</button>
<div id="app"></div>
Include the provided JavaScript code in your project.

Customize the CSS styles as per your project's design requirements.

That's it! You can now run your project and start taking notes using the application.

Note: This application relies on the browser's localStorage to store the notes. Please make sure that the browser you are using supports this feature.

Feel free to modify the code or build upon it to add more features and enhance the note-taking experience according to your project's needs.
