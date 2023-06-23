// Retrieve references to HTML elements
const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

// Fetch currency options from API
fetch("https://v6.exchangerate-api.com/v6/bb674972d6642a0f38be5058/latest/USD")
  .then((res) => res.json()) // Convert response to JSON
  .then((data) => {
    const currencies = Object.keys(data.conversion_rates); // Extract available currencies from the data

    // Generate select options for currency-first
    currencies.forEach((currency) => {
      const option = document.createElement("option"); // Create a new option element
      option.value = currency; // Set the option value
      option.textContent = currency; // Set the option text content
      currencyFirstEl.appendChild(option); // Append the option to the currency-first select element
    });

    // Generate select options for currency-second
    currencies.forEach((currency) => {
      const option = document.createElement("option"); // Create a new option element
      option.value = currency; // Set the option value
      option.textContent = currency; // Set the option text content
      currencySecondEl.appendChild(option); // Append the option to the currency-second select element
    });

    // Update exchange rate and worth on initial load
    updateRate(); // Call the updateRate function to update the exchange rate and worth
  })
  .catch((error) => {
    console.error("Error fetching currency options:", error); // Handle errors during currency fetch
  });

// Function to update exchange rate and worth
function updateRate() {
  const selectedCurrencyFirst = currencyFirstEl.value; // Get the selected currency from currency-first select element
  const selectedCurrencySecond = currencySecondEl.value; // Get the selected currency from currency-second select element

  // Fetch exchange rate for selected currencies
  fetch(`https://v6.exchangerate-api.com/v6/bb674972d6642a0f38be5058/latest/${selectedCurrencyFirst}`)
    .then((res) => res.json()) // Convert response to JSON
    .then((data) => {
      const rate = data.conversion_rates[selectedCurrencySecond]; // Get the exchange rate for selected currencies
      if (rate) {
        // If a valid rate exists, update the exchange rate and worth
        exchangeRateEl.textContent = `1 ${selectedCurrencyFirst} = ${rate} ${selectedCurrencySecond}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
      } else {
        // If the rate is invalid, display an error message
        exchangeRateEl.textContent = "Invalid currency selection";
        worthSecondEl.value = "";
      }
    })
    .catch((error) => {
      // Handle errors during exchange rate fetch
      exchangeRateEl.textContent = "Error fetching exchange rate";
      worthSecondEl.value = "";
      console.error("Error fetching exchange rate:", error);
    });
}

// Event listeners for currency and worth elements
currencyFirstEl.addEventListener("change", updateRate); // Listen for changes in currency-first select element
currencySecondEl.addEventListener("change", updateRate); // Listen for changes in currency-second select element
worthFirstEl.addEventListener("input", updateRate); // Listen for input changes in worth-first input element
