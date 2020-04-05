'use strict'
//Arrays
var nombre = "Sebastián";
var nombres =["Sebastián","Juan","Victor","Andrés"];
var lenguajes = new Array("php", "JS","Go", "Java","C#","Pascal");


//console.log(lenguajes[0]); // Index:0;
//console.log(nombres.length);
/*
var elemento = parseInt(prompt("Que elemento deseas sacar del array",0));

while(elemento >= nombres.length){
    alert("Ingrese un número menor a : " + elemento);
    elemento = parseInt(prompt("Que elemento deseas sacar del array",0));
}
    alert("El dato que selecciono es :" + nombres[elemento]);

*/

/**************RECORRER UN ARRAY COMPLETO Y MOSTRAR SUS INDEX'S ************************************/

/*
for(var i = 0; i < lenguajes.length;i++){ //
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/
/*



//ForEach:
lenguajes.forEach(      (elemento, index, data) => {// aquí puedo ocupar una función de callbacK para definirla... va a recibir varios parametros..index, elementos, 
    //index y data pueden ser opcionales-...
        console.log(data); // tiene el array original....
      document.write("<li>"+"index: "+index+"Elemento : "+elemento+"</li>");


} );
document.write("</ol>");*/


//for in:

document.write("<h1>Lenguajes de programación del 2018!!!</h1>")
document.write("<ol>");
for (let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>")

};
document.write("</ol>");

//busquedas en un array...

var busqueda = lenguajes.findIndex(function(lenguaje){ // efectivamente se encuentra en el índice "0"; 
    return lenguaje == "php"; // nos devuelve true y nos muestra si esta ese lenguaje...
    // si no lo encuentra me debiera decir undefined, pk no lo encuentra.
}
);
console.log(busqueda);
// nos va a permitir , si algun precios es mayor o igual a X.
var precios = ['1','2','3','4','5'];
 var busquedaPrecios = precios.some( precio => precio >=2); // cuantos precios son mayor o igual a 2
 console.log(busquedaPrecios);