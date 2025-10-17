import { mostrarHabilidades} from "./habilidades.js";
import { mostrarProyectos } from "./proyectos.js";

/* DARK MODE */
let botondark = document.querySelector("#btn-dark");
let todo = document.querySelector("#todo");
botondark.addEventListener("click", function () {
todo.classList.toggle("dark");
});
   
/* MENU ANVORGESA */
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("change", () => {
  if (burger.checked) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

/* IMPORTAR FUNCION DE HABILIDADES */
document.addEventListener("DOMContentLoaded", () => {
  mostrarHabilidades();
});

/* IMPORTAR FUNCION DE PROYECTOS */
document.addEventListener("DOMContentLoaded", () => {
  mostrarProyectos();
});
