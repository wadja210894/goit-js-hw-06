const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(validationInput.dataset.length)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});