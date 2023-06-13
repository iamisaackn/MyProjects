// Assign the API key to a variable
const apiKey = "205a5058c24c3224681b7cabf49bb122";

// Get the element with id "weather-data" and assign it to a variable
const weatherDataEl = document.getElementById("weather-data");

// Get the element with id "city-input" and assign it to a variable
const cityInputEl = document.getElementById("city-input");

// Get the first form element and assign it to a variable
const formEl = document.querySelector("form");

// Add an event listener to the form for the "submit" event
formEl.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the value of the city input field
  const cityValue = cityInputEl.value;

  // Call the getWeatherData function with the city value
  getWeatherData(cityValue);
});

// Asynchronous function to fetch weather data
async function getWeatherData(cityValue) {
  try {
    // Fetch weather data from the OpenWeatherMap API using the provided city value and API key
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
    );

    // Check if the response is not successful (status code is not in the 200-299 range)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response as JSON
    const data = await response.json();

    // Extract temperature, description, and icon from the data object
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    // Create an array of weather details
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind Speed: ${data.wind.speed}m/s`,
    ];

    // Update the weather data element with the retrieved data

    // Set the HTML content of the element with class "icon" to display the weather icon
    weatherDataEl.querySelector(".icon").innerHTML = `<img
        src="http://openweathermap.org/img/wn/${icon}.png"
        alt="Weather Icon"
      />`;

    // Set the text content of the element with class "temperature" to display the temperature
    weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;

    // Set the text content of the element with class "description" to display the weather description
    weatherDataEl.querySelector(".description").textContent = description;

    // Set the HTML content of the element with class "details" to display the weather details
    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    // Handle errors if any occur during the fetch or data processing

    // Clear the HTML content of the element with class "icon"
    weatherDataEl.querySelector(".icon").innerHTML = "";

    // Clear the text content of the element with class "temperature"
    weatherDataEl.querySelector(".temperature").textContent = "";

    // Set the text content of the element with class "description" to display an error message
    weatherDataEl.querySelector(".description").textContent =
      "An error happened. Please try again later";

    // Clear the HTML content of the element with class "details"
    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}
