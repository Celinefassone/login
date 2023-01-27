document.addEventListener("DOMContentLoaded", function () {
  const myButton = document.querySelector("#btn");
  myButton.addEventListener("click", function () {
    console.log(this);
  });
});
