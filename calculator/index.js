// index.js

// Get the display element
const display = document.querySelector('input[name="display"]');

// Function to handle button clicks
function handleButtonClick(value) {
  display.value += value;
}

// Add event listeners to the buttons
const buttons = document.querySelectorAll('.calculator input[type="button"]');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.value;
    handleButtonClick(value);
  });
});
