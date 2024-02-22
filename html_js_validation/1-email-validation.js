// emailValidation.js

document.addEventListener("DOMContentLoaded", function() {
  const emailForm = document.getElementById("emailForm");
  const errorParagraph = document.getElementById("error");

  emailForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Retrieve the entered email
      const emailInput = document.getElementById("email");
      const email = emailInput.value;

      // Validate the email
      const isValid = validateEmail(email);

      if (isValid) {
          // Allow form submission
          emailForm.submit();
      } else {
          // Display error message
          errorParagraph.textContent = "Please enter a valid email address.";
      }
  });

  function validateEmail(email) {
      // Email format validation using a regular expression
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(email);
  }
});
