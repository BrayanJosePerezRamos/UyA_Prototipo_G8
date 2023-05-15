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

// function validateContactForm(){
//   const form = document.getElementById("myForm");
//   const nombreInput = document.getElementById("nombre");
//   const emailInput = document.getElementById("email");
//   const descripcionInput = document.getElementById("descripcion");
//   const nombreError = document.getElementById("nombreError");
//   const emailError = document.getElementById("emailError");
//   const descripcionError = document.getElementById("descripcionError");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let isValid = true;

//     if (isNameEmpty(nombreInput.value)) {
//       nombreInput.classList.add("is-invalid");
//       nombreError.style.display = "block";
//       isValid = false;
//     } else {
//       nombreInput.classList.remove("is-invalid");
//       nombreError.style.display = "none";
//     }

//     if (!isValidEmail(emailInput.value)) {
//       emailInput.classList.add("is-invalid");
//       emailError.style.display = "block";
//       isValid = false;
//     } else {
//       emailInput.classList.remove("is-invalid");
//       emailError.style.display = "none";
//     }

//     if (!isValidDescription(descripcionInput.value)) {
//       descripcionInput.classList.add("is-invalid");
//       descripcionError.style.display = "block";
//       isValid = false;
//     } else {
//       descripcionInput.classList.remove("is-invalid");
//       descripcionError.style.display = "none";
//     }

//     if (isValid) {
//       form.submit();
//     }
//   });
// }
function validateNameField() {
  const nombreInput = document.getElementById("nombre");
  const nombreError = document.getElementById("nombreError");

  function isNameEmpty(name) {
    return name.trim() === "";
  }

  function handleInputChange() {
    if (isNameEmpty(nombreInput.value)) {
      nombreInput.classList.add("is-invalid");
      nombreError.style.display = "block";
    } else {
      nombreInput.classList.remove("is-invalid");
      nombreError.style.display = "none";
    }
  }

  nombreInput.addEventListener("input", handleInputChange);
}

function validateEmailField() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  function handleInputChange() {
    if (!isValidEmail(emailInput.value)) {
      emailInput.classList.add("is-invalid");
      emailError.style.display = "block";
    } else {
      emailInput.classList.remove("is-invalid");
      emailError.style.display = "none";
    }
  }

  emailInput.addEventListener("input", handleInputChange);
}

function validateDescriptionField() {
  const descripcionInput = document.getElementById("descripcion");
  const descripcionError = document.getElementById("descripcionError");

  function isDescriptionEmpty(description) {
    return description.trim() === "";
  }

  function handleInputChange() {
    if (isDescriptionEmpty(descripcionInput.value)) {
      descripcionInput.classList.add("is-invalid");
      descripcionError.style.display = "block";
    } else {
      descripcionInput.classList.remove("is-invalid");
      descripcionError.style.display = "none";
    }
  }

  descripcionInput.addEventListener("input", handleInputChange);
}

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", () => {
  validateNameField();
  validateEmailField();
  validateDescriptionField();
});


function validateContactForm() {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    isValid = validateNameField() && isValid;
    isValid = validateEmailField() && isValid;
    isValid = validateDescriptionField() && isValid;

    if (isValid) {
      form.submit();
    }
  });
}
