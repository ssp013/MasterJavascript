'use strict'

//Eventos:

//Eventos del Ratón:
/*----------------EVENT LOAD----------------------------- */
window.addEventListener('load', ()=>{
function cambiarColor(){
    var  bg = boton.style.background;

    if(bg =="green"){
        boton.style.background="red";
       
    }else{
        boton.style.background ="green";
      
    };
    boton.style.padding="10px";
    boton.style.border="1px solid #ccc";
    return true;
};
// para que se vea bien el código , no mezclar el HTML con JS.
//Event: click.
var boton = document.querySelector('#boton');
    boton.addEventListener('click',function(){
    cambiarColor();
    this.style.border = "10 px solid black"; // OPERADOR THIS, DENTRO DEL EVENTO CLICK!
    });

    /*-------EFECTO HOVER DE LOS BUTTONS -----------*/
//Event Mouse Hover: Cuando tu pasas por encima por un boton , te cambia de color..
boton.addEventListener('mouseover', function(){
    boton.style.background= "yellow";

});
//Event Mouseout: Salgo del raton, mouseOut, así hago el efecto Hover.
boton.addEventListener('mouseout', function(){
    boton.style.background= "#ccc";

});


    /*-------Eventos de presionar Tecla y con el foco. -----------*/
var input = document.querySelector('#campo_nombre');
//Focus; presiono dentro del input, me sale el evento focus.
input.addEventListener('focus', function(){
   console.log("[focus]Estas dentro del input");

});
//Blur: es lo mismo que el focus, pero cuando salimos del FOCUS.
input.addEventListener('blur', function(){
    console.log("[blur]Estas fuera del input");
 });

//keydown: sucede cuando pulsas una tecla dentro del input...
input.addEventListener('keydown', function(event){
    console.log("[keydown]Estas pulsando una tecla.", String.fromCharCode(event.keyCode));
 });
 //String.fromCharCode(event.keyCode) --> Sirve para capturar cosas del teclado.,Una por Una: A-V_C-B-D
 //Convierte este caracte de código a un String.
 
//keypress: cuando haya pulsado ya una tecla 
input.addEventListener('keypress', function(event){
    console.log("[keypress]Estas Tecla presionada .", String.fromCharCode(event.keyCode));
 });

//keyup: Nos permite capturar el evento cuando levanto el 'dedo' de la 'tecla'.
input.addEventListener('keyup', function(event){
    console.log("[KeyUp] Tecla soltada .", String.fromCharCode(event.keyCode));
 });
});//Cerramos el Event Load-.-.-.-.-.- 
