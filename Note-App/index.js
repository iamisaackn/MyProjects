// Get the reference to the button element and the app element
const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

// Iterate over each note retrieved from localStorage
getNotes().forEach((note)=> {
    // Create a note element for each note and insert it before the button element
    const noteEl = createNoteEl(note.id, note.content);
    appEl.insertBefore(noteEl, btnEl);
});

// Function to create a note element
function createNoteEl(id, content){
    // Create a textarea element
    const element = document.createElement("textarea");

    // Add a class and placeholder to the element
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    // Add event listener for double-click on the element
    element.addEventListener("dblclick", ()=>{
        // Display a confirmation dialog and delete the note if confirmed
        const warning = confirm("Do you want to delete this note?");
        if(warning){
            deleteNote(id, element)
        }
    });

    // Add event listener for input changes in the element
    element.addEventListener("input", ()=>{
        // Update the note with the new content
        updateNote(id, element.value)
    });

    return element;
}

// Function to update a note
function updateNote(id, content){
    // Get the current notes from localStorage
    const notes = getNotes();
    
    // Find the target note by id
    const target = notes.filter((note)=>note.id == id)[0];
    
    // Update the content of the target note
    target.content = content;
    
    // Save the updated notes to localStorage
    saveNote(notes);
}

// Function to delete a note
function deleteNote(id, element){
    // Get the current notes from localStorage and filter out the note with the provided id
    const notes = getNotes().filter((note)=>note.id  != id);
    
    // Save the updated notes to localStorage
    saveNote(notes);
    
    // Remove the note element from the app
    appEl.removeChild(element);
}

// Function to add a new note
function addNote(){
    // Get the current notes from localStorage
    const notes = getNotes();

    // Create a new note object with a random id and empty content
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    };
    
    // Create a note element for the new note and insert it before the button element
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);

    // Add the new note object to the notes array
    notes.push(noteObj);

    // Save the updated notes to localStorage
    saveNote(notes);
}

// Function to save notes to localStorage
function saveNote(notes){
    localStorage.setItem("note-app", JSON.stringify(notes));
}

// Function to retrieve notes from localStorage
function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

// Add click event listener to the button to trigger adding a new note
btnEl.addEventListener("click", addNote);
