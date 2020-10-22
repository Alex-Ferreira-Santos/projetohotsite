// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


document.getElementById("linkAgenda").addEventListener("click",()=>{
    document.querySelector("body").style.background = "rgba(0,0,0,0.5)"
    document.getElementById("fieldset-agenda").style.display = "initial"
    document.getElementById("fieldset-agenda").style.background = "rgb(255,255,255)"
    document.querySelector("header,main,footer").style.opacity = 0.5
    document.querySelector("img").style.opacity = 0.5
    document.querySelector("#div-links").style.opacity = 0.5
    document.querySelector("form").style.opacity = 0.5
    document.querySelector("#fieldset-agenda").style.opacity = 1
    document.querySelector("body").style.overflow = "hidden"
})


