// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


document.getElementById("linkAgenda").addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.5)"
    document.querySelector("body").style.opacity = 0.5
    document.getElementById("fieldset-agenda").style.display = "initial"
    document.getElementById("fieldset-agenda").style.opacity = 2
    document.getElementById("fieldset-agenda").style.backgroundColor = "rgba(255,255,255)"
})
