// 1. Hacer un menu (navbar) que tenga un logo el icono de menu y adentro 4 enlaces que esten ocultos. Hacer un addEventListener al menu para desplegar los elementos.

//   EJ 1
const lista = document.getElementById("lista");
const input = document.getElementById("toggle-menu");

input.addEventListener("click", () => {
    lista.classList.toggle("mostrar");
});