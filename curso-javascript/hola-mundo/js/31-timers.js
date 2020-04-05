'use strict'
//TIMERS
window.addEventListener('load',()=>{
//1.- Set interval: nos permite ejecutar una función o un código, cada X segundo.
//2. Set time oout : se ejecuta solamente 1 vez.
function intervalo (){
var tiempo = setInterval(   ()=>{
    var encabezado = document.getElementById('titulo');
    if(encabezado.style.fontSize == "50px"){
        encabezado.style.fontSize = "20px";
    }else{
        encabezado.style.fontSize = "50px";
    };
 
    }, 3000);
    return tiempo;
};
    var tiempo = intervalo();
      var stop = document.querySelector("#stop");
    stop.addEventListener('click', ()=>{
            clearInterval(tiempo); // con esto paramos..
    });
    var start = document.querySelector("#start");
    start.addEventListener('click',()=>{
        intervalo(tiempo);
    });

  
});