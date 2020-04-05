'use strict'
window.addEventListener('load', ()=>{
/*
Vamos a crear un formulario que nos permita agregar películas:
 */

//PRIMERO seleccionamos nuestro formulario
var formulario = document.querySelector("#formpeliculas");
formulario.addEventListener('submit',()=>{
    var titulo = document.querySelector('#addpelicula').value;
    if(titulo.length >= 1 ){
        localStorage.setItem(titulo,titulo);  
    }else{
   
    };
});
//Ahora debo recorrer todos los elementos que están en el LocalStorage, para poder ponerlos en el DOM:
var ul = document.querySelector("#peliculasList");


for(var i in localStorage){
  
   if(typeof localStorage[i] == "string"){
    var li = document.createElement("li");
    li.append(localStorage[i]);
    ul.append(li);
   }
    
};

//Poner un formulario que nos permita borrar las películas del DOM.
var formulariob = document.querySelector("#formBorrarPeliculas");
formulariob.addEventListener('submit',()=>{
    var titulo = document.querySelector("#borrarPelicula").value;

    if(titulo.length >= 1){
       localStorage.removeItem(titulo);
    }
   
  
});



});