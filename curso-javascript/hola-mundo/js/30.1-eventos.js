'use strict'


//Eventos del ratón

//ONCLICK:
window.addEventListener ('load', ()=>{// aquí los elementos del DOM, estan cargandis y nos permite poner nuestro código en nuestro Head.
function cambiarColor (){
    var bgg = button.style.background;
    if(bgg == "green"){
        button.style.background = "red";
    }else{
        button.style.background = "green";
    };
    button.style.padding = "10px";
    button.style.border = "2px solid #ccc";
    return true
};

var button = document.querySelector('#boton');
/*
EVENTO CLICK:
button.addEventListener('click', function(){
    cambiarColor();
});
*/

//EVENTO MOUSEHOVER:
button.addEventListener('mouseover',()=>{
   button.style.background = "#fffcfc";
   button.style.color = '#07ff0b';
   button.style.padding = "10px";
    button.style.border = "2px solid #ccc";
});
//Evento MouseOut:
button.addEventListener('mouseout',()=>{
    button.style.background = '#07ff0b';
    button.style.color = "#fffcfc";
    button.style.padding = "10px";
    button.style.border = "2px solid #ccc";
});

});

