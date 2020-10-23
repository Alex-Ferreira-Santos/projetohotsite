function aparecePopUp(link,fieldset,button){
    document.getElementById(link).addEventListener("click",()=>{
        document.querySelector("body").style.transition = "0.2s"
        document.querySelector("body").style.background = "rgba(0,0,0,0.5)"
        document.querySelector(fieldset).style.display = "initial"
        document.querySelector(fieldset).style.background = "rgb(255,255,255)"
        document.querySelector("header,main,footer").style.opacity = 0.5
        document.querySelector("img").style.opacity = 0.5
        document.querySelector("#div-links").style.opacity = 0.5
        document.querySelector("form").style.opacity = 0.5
        document.querySelector(fieldset).style.opacity = 1
        document.querySelector("body").style.overflow = "hidden"
    })
    document.getElementById(button).addEventListener("click",()=>{
        document.querySelector("body").style.background = "rgb(255,255,255)"
        document.querySelector(fieldset).style.display = "none"
        document.querySelector("header,main,footer").style.opacity = 1
        document.querySelector("img").style.opacity = 1
        document.querySelector("#div-links").style.opacity = 1
        document.querySelector("form").style.opacity = 1
        document.querySelector(fieldset).style.opacity = 1
        document.querySelector("body").style.overflow = "auto"
    })
}
aparecePopUp("linkAgenda","#fieldset-agenda","button")
aparecePopUp("linkDicas","#fieldset-dicas","button1")

