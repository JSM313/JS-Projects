// * Blur event triggers as soon as we finish our entered value.
// Form Blur Event
document.querySelector("#name").addEventListener("blur", validateName);

document.querySelector("#zip").addEventListener("blur", validateZip);

document.querySelector("#email").addEventListener("blur", validateEmail);

document.querySelector("#phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.querySelector("#name");

  const regex = /^[a-z]{2,10}$/i;

  if (!regex.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateZip() {
  const zip = document.querySelector("#zip");

  const regex = /^[0-9]{6}$/;

  if (!regex.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.querySelector("#email");

  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!regex.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

function validatePhone() {
  const phone = document.querySelector("#phone"),
    // regex = /^[0-9]{10}$/;
    regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!regex.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
