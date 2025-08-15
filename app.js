const hio = document.querySelector('.hio')
const ifta = document.querySelector(".ifta")
const iframe = document.querySelector(".iframe")
const video = document.querySelector(".video")
const close = document.querySelector(".close")

hio.addEventListener("click" , function(){
ifta.style.display = "block"
iframe.style.display = "block"
video.style.backgroundColor= "#2c2c2cff"
})

close.addEventListener("click" , function(){
    ifta.style.display = "none"
    video.style.backgroundColor= ""
})