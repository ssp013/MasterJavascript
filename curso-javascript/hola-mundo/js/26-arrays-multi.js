'use strict'
/* Arrays Multidimensionales */


//console.log(cine);

//¿como puedo acceder a las categorías y quiero meterme dentro de esas categorías , ej: terror.?

//console.log(cine[0][1]);
//console.log(cine[1][2]);



/*

---Añadir un elemento al array de pelíula--- 
var elemento = "";
do{
   elemento = prompt("INgrese tu película : ");
    peliculas.push (elemento);


}while ( elemento != "ACABAR");
//Elemento pop
peliculas.pop(); // REMUEVE EL ÚLTIMO INDEX DE NUESTRO ARRAY. 
peliculas.pop(); 
peliculas.pop(); 
console.log(peliculas);

*/
//---------¿como puedo eliminar un elemento en concreto dentro de un ARRAY.---------

var categorias = ['Acción','Terror','Comedia'];
var peliculas = ['La verdad duele','La vida es bella','Gran Torino']; // arrays, boleen, numeros.. den tro del array

//ordenar el array
//peliculas.sort();

//dar vuelta el Array.
peliculas.reverse();

console.log(peliculas);




var cine = [categorias,peliculas];
var indice = peliculas.indexOf("Gran Torino");

//console.log(indice); se presenta en la posición  [2].
if (indice > -1){
    // splice--> Nos permite en base a un índice, borrar cuantos pasos yo quiera en adelante.
    // es decir, cuantos índices quiero borrar a partir de ese. 1 o 2 o3..
    //peliculas.splice(indice,1);// me elminia desde gran torino hasta 1 , osea el nomás hacia la derecha..
}
//var aTexto = peliculas.join();



//Transformar de un String a un Array..

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");


console.log(cadena_array);