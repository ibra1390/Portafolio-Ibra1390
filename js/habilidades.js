const habilidades = [
  { nombre: "HTML", 
    nivel: "intermedio", 
    fruta: "./images/fruta1.png", 
    icono: "./images/html.png" 
  },
  { nombre: "CSS", 
    nivel: "intermedio", 
    fruta: "./images/fruta2.png", 
    icono: "./images/css.png" 
  },
  { nombre: "JavaScript", 
    nivel: "basico", 
    fruta: "./images/fruta4.png", 
    icono: "./images/js.png" 
  },
  { nombre: "Git", 
    nivel: "intermedio", 
    fruta: "./images/fruta5.png", 
    icono: "./images/git.png" 
  },
  { nombre: "TailwindCSS", 
    nivel: "basico", 
    fruta: "./images/fruta6.png", 
    icono: "./images/tailwind.png" 
  },
  { nombre: "MySQL", 
    nivel: "avanzado", 
    fruta: "./images/fruta3.png", 
    icono: "./images/mysql.png" 
  }
];

function mostrarHabilidades() {
  let skills = document.querySelector("#skills");
  habilidades.forEach((habilidad) => {
  skills.innerHTML += `<div class="bg-[url(${habilidad.fruta})] h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 
                          bg-contain bg-no-repeat bg-center 
                          hover:bg-[url(${habilidad.icono})]">
                      </div>`;
                    });
}

export {mostrarHabilidades};