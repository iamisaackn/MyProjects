// Get the button element and store it in the btnEl variable
const btnEl = document.getElementById("btn");

// Get the joke element and store it in the jokeEl variable
const jokeEl = document.getElementById("joke");

// Define the API key
const apiKey = "s7hrJiC06YHzY/KGSKJY/A==2j7TlUBB6mHmL5ep";

// Set the options for the fetch request
const options = {
  method: 'GET',
  headers: { "X-Api-Key": apiKey },
};

// Define the API URL to fetch a single dad joke
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// Define an async function named getJoke to fetch and update the joke
async function getJoke() {
  try {
    // Display "Updating..." while fetching the joke
    jokeEl.innerText = "Updating...";

    // Disable the button and change the text to "Loading..."
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    // Fetch the joke from the API
    const response = await fetch(apiURL, options);
    const data = await response.json();

    // Enable the button and change the text back to "Tell me a joke"
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    // Update the joke text with the fetched joke
    jokeEl.innerText = data[0].joke;
    // console.log(data[0].joke);
  } catch (error) {
    // Handle errors by displaying an error message
    jokeEl.innerText = "An error happened. Please try again later.";

    // Enable the button and change the text back to "Tell me a joke"
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
  }
}

// Add a click event listener to the button, which calls the getJoke function
btnEl.addEventListener("click", getJoke);
