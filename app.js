const btn = document.querySelector('#btn')
const modal = document.querySelector(".modal")
const body = document.body
const close = document.querySelector("#close")

btn.addEventListener("click" , function(){
    modal.style.display = "block"
    body.style.backgroundColor= "#00000061"
})

close.addEventListener("click" , function(){
    modal.style.display = "none"
    body.style.backgroundColor= ""
})