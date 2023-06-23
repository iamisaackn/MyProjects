const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/bb674972d6642a0f38be5058/latest/${currencyFirstEl.value}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currencySecondEl.value];
            if (rate) {
                exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
                worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
            } else {
                exchangeRateEl.innerText = "Invalid currency selection";
                worthSecondEl.value = "";
            }
        })
        .catch((error) => {
            exchangeRateEl.innerText = "Error fetching exchange rate";
            worthSecondEl.value = "";
            console.error(error);
        });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);
