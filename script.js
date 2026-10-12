const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const phone = document.getElementById("phone").value.trim();

    const gender = document.getElementById("gender").value;


    // Check password

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }


    // Check password confirmation

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }


    // Check phone number

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }


    // Check gender

    if (gender === "") {
        alert("Please select your gender.");
        return;
    }


    // Registration successful

    alert(
        "Registration Successful!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Gender: " + gender
    );

    // Clear form

    form.reset();

});