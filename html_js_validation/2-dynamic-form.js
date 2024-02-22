document.addEventListener("DOMContentLoaded", function() {
  const dynamicForm = document.getElementById("dynamicForm");
  const selectNumber = document.getElementById("selectNumber");
  const inputContainer = document.getElementById("inputContainer");
  const errorParagraph = document.getElementById("error");

  // Event listener for changes in the dropdown selection
  selectNumber.addEventListener("change", function() {
      const selectedValue = parseInt(selectNumber.value, 10);
      generateInputFields(selectedValue);
  });

  // Event listener for form submission
  dynamicForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
      validateForm();
  });

  function generateInputFields(numberOfFields) {
      // Clear previous input fields
      inputContainer.innerHTML = "";

      // Generate and append new input fields
      for (let i = 1; i <= numberOfFields; i++) {
          const inputField = document.createElement("input");
          inputField.type = "text";
          inputField.name = "field" + i;
          inputContainer.appendChild(inputField);
      }
  }

  function validateForm() {
      const inputFields = inputContainer.getElementsByTagName("input");

      // Check if any field is empty
      for (const inputField of inputFields) {
          if (inputField.value.trim() === "") {
              // Display error message
              errorParagraph.textContent = "Please fill in all fields.";
              return; // Stop further processing if any field is empty
          }
      }

      // If all fields are filled, allow form submission
      dynamicForm.submit();
  }
});
