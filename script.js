document.addEventListener("DOMContentLoaded", function () {
  const myButton = document.querySelector("#btn");
  const form = document.querySelector("#form");
  const checkbox = document.querySelector("#checkbox");

  let isValid = false;

  if (myButton) {
    myButton.addEventListener("click", function () {
      if (
        form.username.value.length > 0 &&
        form.password.value.length > 0 &&
        checkbox.checked
      ) {
        isValid = true;
      } else {
        isValid = false;
      }

      if (isValid) {
        alert("The form is valid");
      } else {
        alert("The form is INVALID");
      }
    });
  }
});
