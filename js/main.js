import { mostrarHabilidades} from "./habilidades.js";
import { mostrarProyectos } from "./proyectos.js";

/* DARK MODE */
let darkButton = document.querySelector("#btn-dark");
let todo = document.querySelector("#todo");

let currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    todo.classList.add("dark");
    darkButton.checked = true;
}
    
darkButton.addEventListener("click", () => {
  todo.classList.toggle("dark");

  if (todo.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      darkButton.checked = true;
  } else {
      localStorage.setItem("theme", "light");
      darkButton.checked = false;
  }
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


/* ENVIAR FORMULARIO A CORREO */
let form = document.querySelector("#formulario");
if (form) {
  form.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form);

  let nombre = datos.get("nombre");
  let email = datos.get("email");
  let mensaje = datos.get("mensaje");

  let confirmacion = `Gracias por tu mensaje ${nombre}! Me comunicaré contigo pronto :)`;
  alert(confirmacion);
  form.reset();
  console.log(`${nombre} con email ${email} envió el siguiente mensaje: ${mensaje}`);
});
}

/* IMPORTAR FUNCION DE HABILIDADES */
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#skills")) {
    mostrarHabilidades();
  }
});

/* IMPORTAR FUNCION DE PROYECTOS */
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#proyectos-container")) {
    mostrarProyectos();
  }
});

