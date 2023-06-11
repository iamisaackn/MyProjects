// Select the element with class "container" and assign it to the variable containerE1
const containerE1 = document.querySelector(".container");

// Select the element with class "btn" and assign it to the variable btnE1
const btnE1 = document.querySelector(".btn");

// Select the element with class "popup-container" and assign it to the variable popupContainerE1
const popupContainerE1 = document.querySelector(".popup-container");

// Select the element with class "close-icon" and assign it to the variable closeIconE1
const closeIconE1 = document.querySelector(".close-icon");

// Add a click event listener to the btnE1 element
btnE1.addEventListener("click", () => {
    // Add the "active" class to the containerE1 element
    containerE1.classList.add("active");
    // Remove the "active" class from the popupContainerE1 element
    popupContainerE1.classList.remove("active");
});

// Add a click event listener to the closeIconE1 element
closeIconE1.addEventListener("click", () => {
    // Remove the "active" class from the containerE1 element
    containerE1.classList.remove("active");
    // Add the "active" class to the popupContainerE1 element
    popupContainerE1.classList.add("active");
});
