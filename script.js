document.addEventListener("DOMContentLoaded", function () {
  const myButton = document.querySelector("#btn");
  let form = document.querySelector("#form");
  myButton.addEventListener("click", function () {
    console.log(form.password.value);
    console.log(form.username.value);
    console.log(form.checkbox.value);
  });
});
