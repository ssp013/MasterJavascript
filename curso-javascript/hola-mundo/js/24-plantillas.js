'use strict'
//plantillas de texto en JavaScript

var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingrese su apellidos");


//var texto = "Mi nombre es : "+ nombre + ". Mis apellidos son: "+apellidos;
//Puedo hacer lo mismo pero con una plantilla!
var texto = `
    <h1> Hola que tal </h1>
    <h3>Mi nombre es : ${nombre}. </h3> 
    <h3>Mis apellidos son: ${apellidos}. </h3>

`;
//Esta es una plantilla en JavaScript, metiendo tmb con HTML
document.write(texto);