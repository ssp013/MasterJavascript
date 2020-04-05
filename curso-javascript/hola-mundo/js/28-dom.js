'use strict'

//DOM - Document Object Model

//Definir una función

function cambiaColor(color){
    caja.style.background = color;
    caja.style.color = color;
};

//Conseguir elementos con un ID cncreto.

//var caja = document.getElementById("micaja")
//El query selector es una manera más sencilla de seleccionar un elemento de la página.
var caja = document.querySelector("#caja");
caja.padding = "20px";
caja.style.background = "green";
caja.style.color = "white";


//Conseguir elementos por su etiqueta.
var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

//modificar uno de esos elementos.

//Recorrer todos divs que hay:
//todosLosDivs.forEach((valor,indice) => { NO lo puedo hacer con un forEach, pk no analiza los HTML.
var valor;
//me agrega 3 undifined hace varias iteraciones, se debe hacer un condicional, para que tenga encuenta solo los elementos del HTML.(4divs)


for ( valor in todosLosDivs){
  if(typeof todosLosDivs[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    document.querySelector("#miseccion").append(parrafo);  
}
seccion.append(hr);

}

//var contenidoEnTexto = todosLosDivs[2].textContent;
/*---------------------- Conseguir elementos por su clase ---------------------- */

var todosLosDivs = document.getElementsByTagName('div');

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');

var div;
for ( div in todosLosDivs){
    if(todosLosDivs[div].className == "rojo"){
        todosLosDivs[div].style.background="red";
    }else if(todosLosDivs[div].className == "amarillo"){
        todosLosDivs[div].style.background="yellow";
    };
}
/*---------------------- QUERY SELECTOR---------------------- 
recomendado; para ID, o un elemento un ID concreto o el primer elemento de una etiqueta o una clase., no para muchas etiquetas.
*/
var id = document.querySelector("#encabezado"); 
console.log(id);

var classRojo = document.querySelector(".rojo"); // no me saca el array completo como el :document.getElementsByClassName('rojo');
console.log(classRojo);

//OJO:  Para seleccionar mucho elementos existe el método querySelectorAll:
var etiqueta = document.querySelectorAll("div"); // no me saca el array completo como el :document.getElementsByClassName('rojo');
console.log(etiqueta);