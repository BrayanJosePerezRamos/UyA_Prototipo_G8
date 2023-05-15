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
reseñas.reseñas.forEach(reseña => {
  // Crear un elemento <li> para cada reseña
  const li = document.createElement('li');
  li.classList.add('list-group-item'); // Agregar clase de Bootstrap

  // Crear el elemento <h3> para el título de la reseña
  const tituloElement = document.createElement('h3');
  tituloElement.classList.add('mb-2'); // Agregar clase de Bootstrap
  tituloElement.textContent = reseña.titulo;

  // Crear los elementos <p> para el comentario, nombre y fecha de la reseña
  const comentarioElement = document.createElement('p');
  comentarioElement.textContent = reseña.comentario;

  const nombreFechaElement = document.createElement('p');
  nombreFechaElement.classList.add('text-muted', 'mb-0'); // Agregar clases de Bootstrap
  nombreFechaElement.textContent = `Por: ${reseña.nombre} - ${reseña.fecha}`;

  // Agregar los elementos al elemento <li>
  li.appendChild(tituloElement);
  li.appendChild(comentarioElement);
  li.appendChild(nombreFechaElement);

  // Agregar el elemento <li> al elemento <ul>
  listaReseñas.appendChild(li);
});

// Agregar clase de Bootstrap al elemento <ul>
listaReseñas.classList.add('list-group');
