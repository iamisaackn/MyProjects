// Step 1: Select the element with the class "navbar" and store it in the variable navbarE1
const navbarE1 = document.querySelector(".navbar");

// Step 2: Select the element with the class "bottom-container" and store it in the variable bottomContainerE1
const bottomContainerE1 = document.querySelector(".bottom-container");

// Step 3: Output the height of the navbar element to the console
console.log(navbarE1.offsetHeight);

// Step 4: Output the offset top value of the bottomContainer element to the console
console.log(bottomContainerE1.offsetTop);

// Step 5: Add a scroll event listener to the window object
window.addEventListener("scroll", () => {
    // Step 6: Check if the vertical scroll position (window.scrollY) is greater than the offset top value of bottomContainer element minus the height of the navbar element minus 50
    if (window.scrollY > bottomContainerE1.offsetTop - navbarE1.offsetHeight - 50) {
        // Step 7: If the condition is true, add the "active" class to the navbar element
        navbarE1.classList.add("active");
    } else {
        // Step 8: If the condition is false, remove the "active" class from the navbar element
        navbarE1.classList.remove("active");
    }
});

/*
This JavaScript code adds a scroll event listener to the window object.
It checks if the vertical scroll position is greater than a specific position on the page, (bottomContainerE1.offsetTop - navbarE1.offsetHeight - 50).
If the condition is true, it adds the "active" class to the navbar element; otherwise, it removes the "active" class. 
The offsetHeight property is used to get the height of the navbar element,
and the offsetTop property is used to get the distance of the bottomContainer element from the top of the document.
The console.log statements are used to output the height of the navbar element and,
 the offset top value of the bottomContainer element to the console for debugging purposes.
*/
