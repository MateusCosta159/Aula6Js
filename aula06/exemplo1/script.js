console.log("Olá eu sou o script")

let titulo = document.querySelector("h1")
titulo.textContent = "Este titulo foi modificado no Javascript"

let paragrafo = document.querySelector(".highlight");

paragrafo.style.background = "green";
paragrafo.style.color = "white";

let paragrafos = document.querySelectorAll("p");


let count = 0
for(p of paragrafos){
    
    if(count % 2 == 0){
        p.style.background = "black";
        p.style.color = "white";         
    }else{
        p.style.background = "white";
        p.style.color = "black";     
    }
    
    count++;
}


