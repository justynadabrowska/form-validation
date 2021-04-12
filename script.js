const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");
const errorsContainer = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");

form.addEventListener("submit", (e) => {
  const errorMessages = [];
  clearErrors();

  if (username.value.length < 6) {
    errorMessages.push("Username must be at least 6 characters long");
  }

  if (password.value.length < 10) {
    errorMessages.push("Password must be at least 10 characters long");
  }

  if (passwordConfirmation.value !== password.value) {
    errorMessages.push("Passwords need to be the same");
  }

  if (terms.checked === false) {
    errorMessages.push("Please agree to terms in order to submit the form");
  }

  if (errorMessages.length > 0) {
    showErrors(errorMessages);
    e.preventDefault();
  }
});

function clearErrors() {
  while (errorsList.children[0] != null) {
    errorsList.removeChild(errorsList.children[0]);
  }
  errorsContainer.classList.remove("show");
}

// Loop through all the children of the error-list element and remove them
// IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
// I recommend using a while loop to accomplish this task
// This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
// Also, make sure you remove the show class to the errors container

function showErrors(errorMessages) {
  errorMessages.forEach((errorMessage) => {
    const li = document.createElement("li");
    li.innerText = errorMessage;
    errorsList.appendChild(li);
  });
  errorsContainer.classList.add("show");
}
