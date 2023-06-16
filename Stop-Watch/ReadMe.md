# Timer
This project uses JavaScript to implement a timer. The timer allows you to start, stop, and reset the elapsed time.

## Live DEMO
To view the live demo [Click Here](https://iamisaackn.github.io/Stop-Watch/)

## Usage
To use the timer in your project, follow these steps:

1. Include the HTML and CSS markup in your document where you want the timer to be displayed.
2. Add the JavaScript code either inline or in an external file and include it in your document.
3. The JavaScript code provides three functions:
- `startTimer()`: Starts the timer by initializing the start time and updating the elapsed time every 10 milliseconds. It also disables the start button and enables the stop button.
- `stopTimer()`: Stops the timer by clearing the interval that updates the elapsed time. It enables the start button and disables the stop button.
- `resetTimer()`: Resets the timer by clearing the interval, setting the elapsed time to zero, and updating the display to show "00:00:00.00". It enables the start button and disables the stop button.

The code also sets up event listeners for three buttons:

- `startButtonEl`: Button element that starts the timer.
- `stopButtonEl`: Button element that stops the timer.
- `resetButtonEl`: Button element that resets the timer.

Make sure to adjust the IDs of the buttons in the HTML markup to match your own button IDs.
