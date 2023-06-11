// Select all elements with the class "rating" and store them in the variable ratingEls
const ratingEls = document.querySelectorAll(".rating");

// Select the element with the ID "btn" and store it in the variable btnEl
const btnEl = document.getElementById("btn");

// Select the element with the ID "container" and store it in the variable containerEl
const containerEl = document.getElementById("container");

// Initialize a variable selectedRating with an empty string
let selectedRating = " ";

// Attach a click event listener to each rating element
ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    // When a rating element is clicked, the following code will execute:

    // Log the text content of the clicked element or its parent element to the console
    // (this line is commented out)
    // console.log(event.target.innerText || event.target.parentNode.innerText);

    // Call the removeActive function to remove the "active" class from all rating elements
    removeActive();

    // Set the selectedRating variable to the text content of the clicked element or its parent element
    selectedRating = event.target.innerText || event.target.parentNode.innerText;

    // Add the "active" class to the clicked element
    event.target.classList.add("active");

    // Add the "active" class to the parent element of the clicked element
    event.target.parentNode.classList.add("active");
  });
});

// Attach a click event listener to the button element
btnEl.addEventListener("click", () => {
  // When the button is clicked, the following code will execute:

  // Check if a rating has been selected (selectedRating is not an empty string)
  if (selectedRating !== " ") {
    // If a rating is selected, update the content of the container element
    containerEl.innerHTML = `
      <strong> Thank You! </strong>
      <br>
      </br>
      <strong>Feedback: ${selectedRating} </strong>
      <p> We'll use your feedback to improve our customer support. </p>
    `;
  }
});

// Define a function to remove the "active" class from all rating elements
function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
