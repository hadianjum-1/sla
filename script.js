let Hum = document.querySelector(".hum");
let nav = document.querySelector('nav');

Hum.addEventListener("click", ()=>{
    nav.classList.toggle("show");
    console.log("press");
});

window.addEventListener("scroll",()=>{
    if(window < -10){
        console.log("working");
    }
    else{
        console.log("not working");
    }
})