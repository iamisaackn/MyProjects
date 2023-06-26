// Retrieve the clock hand elements
let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

// Function to display the current time
function displayTime() {
    // Create a new Date object to get the current date and time
    let date = new Date();

    // Extract the hour, minute, and second from the Date object
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Calculate the rotation angles for the clock hands
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    // Apply the rotation transformations to the clock hands
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

// Call the displayTime function every second (1000 milliseconds)
setInterval(displayTime, 1000);
