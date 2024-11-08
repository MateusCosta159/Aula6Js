document.querySelector(".highligth").classList.remove("highligth");

let titulo  = document.getElementById("js");

titulo.classList.add("highligth");

titulo.classList.remove("highligth")

titulo.classList.toggle("highligth");




let elemento = document.createElement("p");

elemento.id = "pCriado"

elemento.className = "highlight"

elemento.textContent = "Eu fui criado dinamicamente";

document.body.appendChild(elemento);

document.body.removeChild(titulo);

document.body.insertBefore(titulo, document.body.children[3])

titulo.remove()