import { mostrarHabilidades} from "./habilidades.js";

/* DARK MODE */
let botondark = document.querySelector("#btn-dark");
let todo = document.querySelector("#todo");
botondark.addEventListener("click", function () {
todo.classList.toggle("dark");
});
   
/* MENU ANVORGESA */


/* IMPORTAR FUNCION DE HABILIDADES */
document.addEventListener("DOMContentLoaded", () => {
  mostrarHabilidades();
});