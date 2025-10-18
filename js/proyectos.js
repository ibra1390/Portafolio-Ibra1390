const proyectos = [
  {
    titulo: "AniRealm",
    descripcion: "Proyecto para buscar Anime.",
    imagen: "./images/anirealm2.png",
    enlace: "https://wdd330anirealm.netlify.app"
  },
  {
    titulo: "Rafting Site",
    descripcion: "Página para buscar rafting.",
    imagen: "./images/rafter2.png",
    enlace: "https://ibra1390.github.io/wdd130/wwr/index.html"
  },
  {
    titulo: "SleepOutside",
    descripcion: "Página de actividades al aire libre.",
    imagen: "./images/sleep2.png",
    enlace: "https://sleepoutside-team6.netlify.app"
  },
  {
    titulo: "Epic Form",
    descripcion: "Formulario de Epic Games",
    imagen: "./images/epic2.png",
    enlace: "https://ibra1390.github.io/funval/tareas/practica-2/index.html"
  }
];

function mostrarProyectos() {
  const proyectosContainer = document.querySelector("#proyectos-container");
  
  proyectos.forEach((proyecto) => {
    proyectosContainer.innerHTML += `
      <div class="relative w-64 h-80 md:w-80 md:h-96 bg-[url('./images/wanted.png')] bg-contain bg-no-repeat bg-center cursor-pointer transform hover:scale-105 transition-all duration-300 mb-1">
        <!-- Imagen del proyecto -->
        <div class="absolute top-17 md:top-24 left-0 right-0 mx-auto w-46 h-34 md:w-56 md:h-40 overflow-hidden">
          <img class="w-full h-full object-cover hover:scale-110 transition-transform duration-300" src="${proyecto.imagen}" alt="${proyecto.titulo}" />
        </div>
        
        <!-- Título y descripción -->
        <div class="absolute top-56 md:top-64 left-0 right-0 mx-auto text-center w-48 md:w-64">
          <h3 class="text-lg md:text-xl font-bold text-black">${proyecto.titulo}</h3>
          <p class="text-xs md:text-sm text-black font-medium leading-tight">${proyecto.descripcion}</p>
          <a href="${proyecto.enlace}" target="_blank"
             class="inline-block md:mt-2 md:px-4 text-black text-xs font-bold hover:underline hover:text-red-700">
            VER PROYECTO
          </a>
        </div>
      </div>
    `;
  });
}

export { mostrarProyectos };