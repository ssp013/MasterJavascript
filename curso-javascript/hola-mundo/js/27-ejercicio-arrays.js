'use strict'
/*EJercicio
1. pida 6 numeros por pantalla y los meta en un array.
2. mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola.
3. Ordenarlos y mostrarlos.
4. Invertir su orden y mostrarlos.
5. mostrar cuantos elementos tiene el array.
6. busqueda de un valor introducido por el usuario, que nos diga si lo encuentra  y su indice.
(se valorará el uso de funciones).

*/
function mostrarPorPantalla(elemento, titulo){
    document.write("<h1>"+titulo+"</h1>");
    document.write("<ul>");
    document.write("</ul>");

};



var numero = new Array;
for (var i = 0 ; i < 6 ;i++){
    numero[i] = parseInt(prompt("Ingrese un número : ",0));
};
console.log(numero);