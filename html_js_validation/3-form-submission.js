document.addEventListener("DOMContentLoaded", function() {
  const myForm = document.getElementById("myForm");
  const errorParagraph = document.getElementById("error");
  const successParagraph = document.getElementById("success");

  // Event listener for form submission
  myForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
      handleFormSubmit();
  });

  function handleFormSubmit() {
      // Retrieve form field values
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");

      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();

      // Validate form fields
      if (nameValue === "" || emailValue === "") {
          // Display error message if any required field is empty
          errorParagraph.textContent = "Please fill in all required fields.";
          successParagraph.textContent = ""; // Clear success message
      } else {
          // Clear error message
          errorParagraph.textContent = "";

          // Perform additional validation if needed

          // Display success message
          successParagraph.textContent = "Form submitted successfully!";
          // You can submit the form programmatically if needed
          // myForm.submit();
      }
  }
});
