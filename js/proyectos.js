const proyectos = [
  {
    titulo: "AniRealm",
    descripcion: "Proyecto para buscar y filtrar animes",
    imagen: "./images/anirealm2.png",
    enlace: "https://wdd330anirealm.netlify.app"
  },
  {
    titulo: "Rafting Site",
    descripcion: "Página para buscar lugares de rafting.",
    imagen: "./images/rafter2.png",
    enlace: "https://ibra1390.github.io/wdd130/wwr/index.html"
  },
  {
    titulo: "SleepOutside",
    descripcion: "Página dedicada a actividades al aire libre",
    imagen: "./images/sleep2.png",
    enlace: "https://sleepoutside-team6.netlify.app"
  },
  {
    titulo: "Epic Form",
    descripcion: "Formulario para hacer Login en Epic Games",
    imagen: "./images/epic2.png",
    enlace: "https://ibra1390.github.io/funval/tareas/practica-2/index.html"
  }
];

function mostrarProyectos() {
  const proyectosContainer = document.querySelector("#proyectos-container");
  if (!proyectosContainer) {
    console.log("No se encontró el contenedor de proyectos");
    return;
  }

  // Limpiar el contenedor primero (opcional)
  proyectosContainer.innerHTML = '';

  proyectos.forEach((proyecto) => {
    proyectosContainer.innerHTML += `
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <a href="${proyecto.enlace}" target="_blank" rel="noopener" class="block">
          <img class="w-full h-48 object-cover" src="${proyecto.imagen}" alt="${proyecto.titulo}" />
        </a>
        <div class="p-5">
          <a href="${proyecto.enlace}" target="_blank" rel="noopener">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${proyecto.titulo}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${proyecto.descripcion}</p>
          <a href="${proyecto.enlace}" target="_blank" rel="noopener" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ver proyecto
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    `;
  });
}

export { mostrarProyectos };