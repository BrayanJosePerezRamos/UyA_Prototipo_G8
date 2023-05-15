function validateEmailForm(){
  const emailInput = document.getElementById("CorreoBoletin");
  const emailError = document.getElementById("errorCorreo");

  emailInput.addEventListener("blur", (event) => {
    const value = event.target.value;
    if (!isValidEmail(value)) {
      emailInput.classList.add("is-invalid");
      emailError.style.display = "block";
    } else {
      emailInput.classList.remove("is-invalid");
      emailError.style.display = "none";
    }
  });
  return isValidEmail(emailInput.value);
}
