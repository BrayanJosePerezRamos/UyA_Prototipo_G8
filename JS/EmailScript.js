function validateEmailForm(event) {
  const form = document.getElementById("formularioCorreo");
  const emailInput = document.getElementById("CorreoBoletin");
  const errorContainer = document.getElementById("errorMessageContainer");

  if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
    errorContainer.classList.remove("d-none");
    event.preventDefault();
  } else {
    emailInput.classList.remove("is-invalid");
    errorContainer.classList.add("d-none");
  }
}

function isValidEmail(email) {
  // Expresión regular para verificar si el email tiene un formato válido
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}