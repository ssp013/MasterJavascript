'use strict'
//ámbito de las variables

//¿Que pasa si yo defino una variable dentro de mu función??
//Si, pk es una variable LOCAL dentro de una función.

// ¿que pasa si la quiero llamar a esa variable afuera de la función??
//No , no puedo el no esata definido globalmente!, esta variables de ahí son "locales"
function holaMundo(texto){
    var hola_mundo = "texto dentro de una función";
    console.log(texto); 
    //console.log(hola_mundo);   
}
 
var texto ="Hola mundo soy una variable global!!!";
holaMundo(texto);

//console.log(hola_mundo);  NO SE PUEDE...


//¿Que pasaría si yo quisiera acceder a numero , y que tiene un int, que pasa si quiero acceder a esa variable dentro del a funciton?
//respuesta: si se puede
/*
function holaMundo(texto){
    console.log(texto);
    console.log(numero);
    
}
var numero= 12;
var texto ="Hola mundo soy una variable global!!!";
holaMundo(texto);*/