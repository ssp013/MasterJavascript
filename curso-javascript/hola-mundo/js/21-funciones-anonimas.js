'use strict'
//funcion anónimas: es una función que no tiene nombre


/*var pelicula = function(nombre){
    return "la pelicula es " + nombre;
};*/

//calback; es una función que se ejecuta dentro de otra función.
// es una función anónima que no tiene nombre, y se le pasa como parametro a otra función.
// es un parametro (como funcion) a otra funcion.

//sumaYmuestra y sumaPorDos: van a presentar una función de Call Back,
// pk yo le voy a pasar una función cuando yo imboque a esto.

// aquí tengo dos funciones anónimas que estoy utilizando como "Call back"

 function sumame (numero1, numero2 ,sumaYmuestra ,sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar); 

    return sumar;

}
//FUNCIONES FLECHAS:

sumame(5,7, (dato) => {
    console.log("Suma y muestra: "+ dato);

}, (dato) => {
    console.log("Suma * dos "+(dato*2));

}
);










/*
sumame(5, 7, function(dato){
    console.log("La suma es : " + dato);
},
  function(dato){
      console.log("La suma por 2 : "+ (dato*2));

  });
  */