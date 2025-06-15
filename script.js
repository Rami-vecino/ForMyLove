const canciones = document.querySelectorAll(".song__box");
const checkboxs = document.querySelectorAll(".open__bubble");
const opaco = document.querySelector(".thing__opaco");

canciones.forEach((song) =>{
    song.addEventListener("click" , ()=> {
        let disblocked = song.firstElementChild;
        disblocked.style = "animation: quitar 1s 1 linear both;"
    })
})

checkboxs.forEach((checkbox) =>{
    checkbox.addEventListener("change", ()=>{
        if (checkbox.checked){
            opaco.style = "display:block;z-index:20;"
        }else {
            opaco.style = "display:none;z-index:10;"
        }
    })
})

