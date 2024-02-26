function validateEmail() {
    // Get the value of the email input field
    var email = document.getElementById("email").value;

    // Define a regular expression (regex) pattern to validate email addresses
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Test the email against the regex pattern
    // If the email does not match the pattern (i.e., it's not a valid email format), show an alert and return false
    if (!re.test(email)) {
        alert("Invalid email format");
        return false;
    }

    // If the email matches the pattern (i.e., it's a valid email format), return true
    return true;
}

