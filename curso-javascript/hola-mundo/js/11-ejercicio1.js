'use strict'
/*
Ejercicio 1: crear un programa que nos pida 2 numeros y nos diga cual es mayor o cual es menor y si son iguales. 

PLus: si los numeros no son un numero o son menores o iguales a "0", nos vuelva a pedir los datos!
con un while!

vamos hacer un while, que va a pedir el ingreso de nuevo de esas variables si son falsas.
cuando sean verdaderas los numeros de validación, me entregara el resultado..

*/ 

var numero1 = parseInt(prompt("Ingrese el primer Número :",1));
var numero2 = parseInt(prompt("Ingrese el segundo Número :",1));

while(isNaN(numero1)|| isNaN(numero2) || numero1 <= 0 || numero2 <= 0 ){
    numero1 = parseInt(prompt("Ingrese el primer Número :",1));
    numero2 = parseInt(prompt("Ingrese el segundo Número :",1));   
};

if(numero1 == numero2){
    console.log("son Iguales");
}else
if(numero1>numero2){
    console.log(numero1 +"es mayor que "+numero2);
}else{
    console.log(numero2 +"es mayor que "+numero1);
};
























/*
var numero1 = parseInt(prompt("Ingrese numero 1",0));
var numero2 = parseInt(prompt("Ingrese numero 2",0));

while(isNaN(numero1) || isNaN(numero2) || numero1<=0 || numero2<=0){ // is not a number --< true
    alert("Ingrese Números positivos!!!");
    numero1 = parseInt(prompt("Ingrese numero 1",0));
    numero2 = parseInt(prompt("Ingrese numero 2",0));

}
 if(numero1 == numero2){
    console.log("Son iguales!!");
} else if(numero1>numero2){
    console.log(" "+numero1+" es mayor que el "+numero2);
}else {
    console.log(" "+numero2+" es mayor que el "+numero1);
};

*/


















/*

var numero1 = parseInt(prompt("Ingrese Número uno : ", ));// transformamos el String to Integer..
var numero2 = parseInt(prompt("Ingrese Número dos : ", ));


//Esta sería la validación para que sea un numero y no un string o menor a 0.
while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2) ){ // si el numero 1 or 2, es menor o igual a 0
        alert("ingrese los datos correctamente!");
        numero1 = parseInt(prompt("Ingrese Número uno : ", ));
        numero2 = parseInt(prompt("Ingrese Número dos : ", )); 
};
// saldra del bucle cuando son numeros y mayores o igual a 0!   

if(numero1 ==numero2){
    alert("Los dos numero son iguales!");
}else if(numero1  > numero2 ){  
    alert("El numero mayor es : " + numero1);
    alert("El numero menor es : " + numero2);
}else if(numero1 < numero2 ){
    alert("El numero mayor es : " + numero2);
    alert("El numero menor es : " + numero1);
    
}; 



/*
https://librosweb.es/libro/javascript/capitulo-7/validacion.html
7.3.2. Validar un campo de texto con valores numéricos
Se trata de obligar al usuario a introducir un valor numérico en un cuadro de texto. La condición JavaScript consiste en:

valor = document.getElementById("campo").value;
if( isNaN(valor) ) {
  return false;
}
Si el contenido de la variable valor no es un número válido, no se cumple la condición. La ventaja de utilizar la función interna isNaN() es que simplifica las comprobaciones, ya que JavaScript se encarga de tener en cuenta los decimales, signos, etc.

A continuación se muestran algunos resultados de la función isNaN():

isNaN(3);          // false
isNaN("3");        // false
isNaN(3.3545);     // false
isNaN(32323.345);  // false
isNaN(+23.2);      // false
isNaN("-23.2");    // false
------------------------------------------
isNaN("23a");      // true
isNaN("23.43.54"); // true
*/
