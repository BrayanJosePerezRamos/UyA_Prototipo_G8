// Obtener el elemento del input de correo y el elemento del mensaje de error
const correoInput = document.getElementById('CorreoBoletin');
const errorCorreo = document.getElementById('errorCorreo');

// Agregar un listener para el evento de submit del formulario
const formulario = document.getElementById('formularioCorreo');
formulario.addEventListener('submit', function(event) {
  // Detener el envío del formulario para manejar la validación manualmente
  event.preventDefault();

  // Obtener el valor del correo electrónico ingresado
  const correo = correoInput.value;

  // Validar el correo electrónico (ejemplo: verificar si contiene un "@")
  if (correo.includes('@')) {
    // Correo válido, borrar el mensaje de error y enviar el formulario
    errorCorreo.textContent = '';
    formulario.submit();
  } else {
    // Correo inválido, mostrar el mensaje de error y enfocar el input
    errorCorreo.textContent = 'Correo electrónico inválido. Por favor, ingresa un correo válido.';
    errorCorreo.classList.remove('visually-hidden');
    correoInput.focus();
  }
});
