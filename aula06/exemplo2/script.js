document.getElementById("btnMostrar").addEventListener("click", () => {
    let minhaDiv = document.getElementById("minhaDiv")
    minhaDiv.classList.add("timao")
})

document.getElementById("texto").addEventListener("keypress", () => { 
    let elemento = document.getElementById("texto")
    elemento.value = elemento.value.toUpper();
})