function isValidEmail(email) {
  // Expresión regular para verificar si el email tiene un formato válido
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isNameEmpty(name) {
  // Comprueba si el nombre está vacío
  return name.trim() === "";
}

function isValidDescription(description) {
  // Verificar si la descripción está vacía o solo contiene espacios en blanco
  return description.trim().length > 0;
}

function isValidPassword(password) {
  // Verificar si la descripción está vacía o solo contiene espacios en blanco
  return password.trim().length > 0;
}

function validateContactForm(){
  const form = document.getElementById("myForm");
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const descripcionInput = document.getElementById("descripcion");
  const nombreError = document.getElementById("nombreError");
  const emailError = document.getElementById("emailError");
  const descripcionError = document.getElementById("descripcionError");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    if (isNameEmpty(nombreInput.value)) {
      nombreInput.classList.add("is-invalid");
      nombreError.style.display = "block";
      isValid = false;
    } else {
      nombreInput.classList.remove("is-invalid");
      nombreError.style.display = "none";
    }

    if (!isValidEmail(emailInput.value)) {
      emailInput.classList.add("is-invalid");
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailInput.classList.remove("is-invalid");
      emailError.style.display = "none";
    }

    if (!isValidDescription(descripcionInput.value)) {
      descripcionInput.classList.add("is-invalid");
      descripcionError.style.display = "block";
      isValid = false;
    } else {
      descripcionInput.classList.remove("is-invalid");
      descripcionError.style.display = "none";
    }

    if (isValid) {
      form.submit();
    }
  });
}

function validateLogin(){
  const form = document.getElementById("myForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    if (!isValidEmail(emailInput.value)) {
      emailInput.classList.add("is-invalid");
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailInput.classList.remove("is-invalid");
      emailError.style.display = "none";
    }

    if (!isValidPassword(passwordInput.value)) {
      passwordInput.classList.add("is-invalid");
      passwordError.style.display = "block";
      isValid = false;
    } else {
      passwordInput.classList.remove("is-invalid");
      passwordError.style.display = "none";
    }

    if (isValid) {
      form.submit();
    }
  });
}