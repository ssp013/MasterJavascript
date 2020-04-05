'use strict'
/*BOM- Browser Object Model
- como puedo yo trabajar con los elementos que me da el navegador WEB.
ex: tamaño de la ventana del navegador, reedirigir de una URL a otra.
- diversos metodos para trabajar con el BOM.
*/

/* -Propiedades-
1. Windows.

*/
function getBom(){
console.log("Window Height: "+window.innerHeight);
console.log("Window Height: "+window.innerWidth+"\n");

};
getBom();

function getScreen(){
    console.log("Screen Height: "+screen.height);
    console.log("Screen Width: "+screen.width);
    };
    getScreen();

//Podemos redirigir sin problems a una página.    
function redirect(url){
    window.location.href= url;
};

function abrirVentana(url){
    window.open(url,"","width=400,height=400");
};
