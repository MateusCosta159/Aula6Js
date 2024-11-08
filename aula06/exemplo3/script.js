document.addEventListener("mousemove", (e) =>{
    let elem = document.getElementById("box")
    elem.style.left = e.clientX + "px"
    elem.style.top = e.clientY + "px"

    console.log(e.clientX + " " + e.clientY)
})