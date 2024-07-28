function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    const bio = document.getElementById('bio').value.trim();
    
    const namePattern = /^[a-zA-Z ]{2,30}$/; // Alphabets and space, 2 to 30 characters
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    const passwordPattern = /^.{6,}$/; // Minimum 6 characters for password
    const telephonePattern = /^[0-9]{10,15}$/; // Numeric characters, 10 to 15 digits
    const bioPattern = /^.{0,200}$/; // Maximum 200 characters for bio
    
    let isValid = true;
    let errorMessage = "";

    if (!namePattern.test(firstName)) {
        isValid = false;
        errorMessage += "Invalid first name. ";
    }
    if (!namePattern.test(lastName)) {
        isValid = false;
        errorMessage += "Invalid last name. ";
    }
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += "Invalid email. ";
    }
    if (!passwordPattern.test(password)) {
        isValid = false;
        errorMessage += "Password must be at least 6 characters. ";
    }
    if (password !== confirmPassword) {
        isValid = false;
        errorMessage += "Passwords do not match. ";
    }
    if (!telephonePattern.test(telephone)) {
        isValid = false;
        errorMessage += "Invalid telephone number. ";
    }
    if (!bioPattern.test(bio)) {
        isValid = false;
        errorMessage += "Bio must be less than 200 characters. ";
    }

    const errorElement = document.getElementById('error-message');
    if (!isValid) {
        errorElement.textContent = errorMessage;
    } else {
        errorElement.textContent = ""; // Clear error message
        // Normally, here you would submit the form or perform further actions
        alert('Form submitted successfully!');
        document.getElementById('validationForm').reset(); // Reset form after submission
    }
}
