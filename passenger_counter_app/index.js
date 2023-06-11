/** Step 1: Retrieve the element with the id "save-btn" and store it in the variable saveEl */
let saveEl = document.getElementById("save-btn");

/** Step 2: Retrieve the element with the id "count-el" and store it in the variable countEl */
let countEl = document.getElementById('count-el');

/** Step 3: Initialize the variable count to 0 */
let count = 0;

/** Step 4: Output the value of saveEl to the console */
console.log(saveEl);

/** Step 5: Define a function named increment */
function increment() {
    /** Step 6: Increase the value of count by 1 */
    count += 1;

    /** Step 7: Set the text content of countEl to the value of count */
    countEl.textContent = count;
}

/** Step 8: Define a function named save */
function save() {
    /** Step 9: Convert the value of count to a string and concatenate it with " | " */
    let countStr = count + " | ";

    /** Step 10: Append countStr to the existing text content of saveEl */
    saveEl.textContent += countStr;

    /** Step 11: Set the text content of countEl to 0 */
    countEl.textContent = 0;

    /** Step 12: Reset the value of count to 0 */
    count = 0;
}


