'use strict'
/*
Ejercicio 8:
Crear una calculadora!
- dos numeros ingresar por pantalla
- metemos mal un numero que nos vuelva a pedir !!
- mostrar en cuerpo de la página en una !ALERTA!
- consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras.
*/
var number1 = parseInt(prompt("Ingrese el primer número : "),0);
var number2 = parseInt(prompt("Ingrese el segundo número : "),0);

while(number1 < 0 || number2 < 0 || isNaN(number1) || isNaN(number2)){ // si el numero es menor a 0 o no es un número, entra en este ciclo maligno!
    alert("INgrese un número");
    number1 = parseInt(prompt("Ingrese el primer número : "),0);
    number2 = parseInt(prompt("Ingrese el segundo número : "),0);


};
var resultado = "La suma es :"+ (number1+number2) +"<br>"+
                "La resta es :"+ (number1-number2) +"<br>" +
                "La Multiplicación es :"+ (number1*number2) +"<br>" + 
                "La División es :"+ (number1/number2) +"<br>";
var resultado2 = "La suma es :"+ (number1+number2) +"\n"+
                "La resta es :"+ (number1-number2) +"\n" +
                "La Multiplicación es :"+ (number1*number2) +"\n"+ 
                "La División es :"+ (number1/number2) +"\n";

document.write("<p>"+resultado+"</p>");
alert(resultado2);



