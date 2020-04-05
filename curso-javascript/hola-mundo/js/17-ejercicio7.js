'use strict'
/*

Ejercicio 7: Crear la tabla de multiplicación, de un número introducido por el pantalla.

*/

var number = parseInt(prompt("INgrese el numero que desea multiplicar",1));

var contador = 10;
document.write("<h1>tabla del "+number+"</h1>")

for(var i = 1; i <= contador; i++){
    document.write(number +" x "+ i+ " = "+ (number*i)+"<br>");
}
//todas las tablas de multiplicar

for(var c= 1; c <= contador; c++){
    document.write("<h1>tabla del "+c+"</h1>")

for(var j = 1; j <= contador; j++){
    document.write(c +" x "+ j+ " = "+ (c*j)+"<br>");
}
}