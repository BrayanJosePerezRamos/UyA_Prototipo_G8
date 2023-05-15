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
