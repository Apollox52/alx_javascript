// passwordValidation.js

document.addEventListener("DOMContentLoaded", function() {
  const passwordForm = document.getElementById("passwordForm");
  const errorParagraph = document.getElementById("error");

  passwordForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Retrieve the entered password
      const passwordInput = document.getElementById("password");
      const password = passwordInput.value;

      // Validate the password
      const isValid = validatePassword(password);

      if (isValid) {
          // Allow form submission
          passwordForm.submit();
      } else {
          // Display error message
          errorParagraph.textContent = "Password does not meet the criteria.";
      }
  });

  function validatePassword(password) {
      // Password criteria
      const minLength = 8;
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasDigit = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*]/.test(password);

      // Check all criteria
      return (
          password.length >= minLength &&
          hasUppercase &&
          hasLowercase &&
          hasDigit &&
          hasSpecialChar
      );
  }
});
