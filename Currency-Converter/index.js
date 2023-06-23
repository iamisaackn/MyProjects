const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

// Fetch currency options from API
fetch("https://v6.exchangerate-api.com/v6/bb674972d6642a0f38be5058/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    const currencies = Object.keys(data.conversion_rates);

    // Generate select options for currency-first
    currencies.forEach((currency) => {
      const option = document.createElement("option");
      option.value = currency;
      option.textContent = currency;
      currencyFirstEl.appendChild(option);
    });

    // Generate select options for currency-second
    currencies.forEach((currency) => {
      const option = document.createElement("option");
      option.value = currency;
      option.textContent = currency;
      currencySecondEl.appendChild(option);
    });

    // Update exchange rate and worth on initial load
    updateRate();
  })
  .catch((error) => {
    console.error("Error fetching currency options:", error);
  });

function updateRate() {
  const selectedCurrencyFirst = currencyFirstEl.value;
  const selectedCurrencySecond = currencySecondEl.value;

  // Fetch exchange rate for selected currencies
  fetch(`https://v6.exchangerate-api.com/v6/bb674972d6642a0f38be5058/latest/${selectedCurrencyFirst}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[selectedCurrencySecond];
      if (rate) {
        exchangeRateEl.textContent = `1 ${selectedCurrencyFirst} = ${rate} ${selectedCurrencySecond}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
      } else {
        exchangeRateEl.textContent = "Invalid currency selection";
        worthSecondEl.value = "";
      }
    })
    .catch((error) => {
      exchangeRateEl.textContent = "Error fetching exchange rate";
      worthSecondEl.value = "";
      console.error("Error fetching exchange rate:", error);
    });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);

