const form = document.querySelector('.login-form');

form.addEventListener('submit', submitForm);

function submitForm(event) { 
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        email,
        password
    };
    if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(formData);
  event.currentTarget.reset();
};