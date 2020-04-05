'use strict'

// Propiedades o métodos que nos van a permitir cambiar texto..

//transformación de textos.

var numero = 444;
var texto1 = "Bienvenido al curso de javascript curso de Victor Robles";
var texto2 = "ES MUY BUEN CURSO";


//Buscar una palabra dentro de un STRING.

//var busqueda = texto1.indexOf("curso");
//var busqueda = texto1.lastIndexOf("curso");
//var busqueda = texto1.search("curso");
//var busqueda = texto1.match("curso")
//var busqueda = texto1.match(/curso/g);//devuelve un array(colleción de resultados que contiene) con las palabras, que van con su indice a partie del 0. 

//var busqueda = texto1.substr(14,5); // empieza desde "0", desde el 14 to 5 en adelante...

//var busqueda = texto1.charAt(44); // R--> Robles.

//var busqueda = texto1.startsWith("Bienvenidos");
//var busqueda = texto1.endsWith("Robles cuso");

//var busqueda = texto1.includes("javascript");

/***************Funciones de Remplazo, separar, etc en una cadena de texto. ***********************************/

//var busqueda = texto1.replace("javascript","Python");
//var busqueda = texto1.slice(14);

//var busqueda = texto1.split(" ");// nos convierte en index del array, todas las palabras..

var busqueda = texto1.trim();




console.log(busqueda);








/*
//¿Como transformo el número a un String?
var dato = numero.toString();
   
//¿Como transformo a mayúscula?
dato = texto1.toUpperCase();

//¿Como transformo a Minúscula?
dato = texto2.toLowerCase();
//console.log(dato);

//CALCULAR LA LONGITUD DE UN TEXTO... PARA VER SI EXISTE UN TEXTO Y TENGA ALGO ADENTRO.
var nombre="Sebastian";
    nombre =["hola", "hola"];//muestra 2.en este ARRAY.
  //console.log(  nombre.length);

//¿Como concatenar?

//var textoTotal = texto1+" \n "+texto2;
var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);
*/