/*Ex1*/
let alt = document.getElementById("titulo")
alt.innerText = "Boa tarde a todos"

/*Ex2*/
let elemento = document.createElement("p");
elemento.id = "pCriado"
elemento.textContent = "Eu fui criado dinamicamente";
document.body.appendChild(elemento);

/*EX3*/


let paragrafo = document.querySelector(".highlight");
paragrafo.style.background = "black";
paragrafo.style.color = "white";

/*Ex4*/
let titulo  = document.getElementById("js");
titulo.className = "highlight"

/*EX5*/
titulo.classList.remove("highlight")

/*EX6*/
titulo.classList.toggle("highligth")

/*EX7*/
