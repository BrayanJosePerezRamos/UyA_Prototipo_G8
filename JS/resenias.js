  const reseñas = {
    "reseñas": [
      {
        "titulo": "Reseña sobre Full metal alchemist",
        "nombre": "Usuario 1",
        "comentario": "El mejor anime que he visto nunca.",
        "fecha": "2023-05-01"
      },
      {
        "titulo": "Reseña sobre Naruto Shippuden",
        "nombre": "Usuario 2",
        "comentario": "El anime es muy bueno, pero el final es un poco decepcionante.",
        "fecha": "2023-05-05"
      },
      {
        "titulo": "Reseña sobre Death Note",
        "nombre": "Usuario 3",
        "comentario": "El mejor anime de detectives y drama que he visto nunca.",
        "fecha": "2023-05-10"
      }
    ]
  }

// Recorrer cada reseña del objeto
reseñas.reseñas.forEach((reseña, index) => {
  const li = document.createElement('li');
  li.classList.add('list-group-item');

  const tituloElement = document.createElement('h3');
  tituloElement.classList.add('mb-2');
  
  // Crear el elemento <a> para el enlace del título
  const enlaceTitulo = document.createElement('a');
  enlaceTitulo.href = `reseña${index + 1}.html`; // Enlace a la página de la reseña
  enlaceTitulo.textContent = reseña.titulo;
  
  // Agregar el enlace del título al elemento <h3>
  tituloElement.appendChild(enlaceTitulo);
  
  tituloElement.setAttribute('tabindex', '0');

  const comentarioElement = document.createElement('p');
  comentarioElement.textContent = reseña.comentario;
  comentarioElement.setAttribute('tabindex', '0');

  const nombreFechaElement = document.createElement('p');
  nombreFechaElement.classList.add('text-muted', 'mb-0');
  nombreFechaElement.textContent = `Por: ${reseña.nombre} - ${reseña.fecha}`;
  nombreFechaElement.setAttribute('tabindex', '0');

  li.appendChild(tituloElement);
  li.appendChild(comentarioElement);
  li.appendChild(nombreFechaElement);

  listaReseñas.appendChild(li);
});

listaReseñas.classList.add('list-group');
