/* DARK MODE */

let botondark = document.querySelector("#btn-dark");
let todo = document.querySelector("#todo");
botondark.addEventListener("click", function () {
todo.classList.toggle("dark");
});
   
/* MENU ANVORGESA */
const burguer = document.getElementById('.burguer');
const menu = document.getElementById('menu');

burguer.addEventListener('click', () => {
    menu.classList.toggle('active')
    burguer.classList.toggle('active')
})

document.querySelectorAll('nav-link').forEach()