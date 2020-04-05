'use strict'
/*
Ejercicio 4: mostrar todos los numeros impares que hay entre 2 Numeros ingresados por el usuario.
 */

var numero1 = parseInt(prompt("Ingrese el número 1",0));
var numero2 = parseInt(prompt("Ingrese el número 2",0));

for ( var i= numero1 ; i <= numero2; i++){
if(i%2 != 0){
    console.log("Es un número impar"+i);
}
};






























/*
var numero1 = parseInt(prompt("Ingresar numero 1 : ",0));
var numero2 = parseInt(prompt("Ingresar Numero 2: "),0);

while(numero1 < numero2){// numer 1 menor a numero2 entra al ciclo
    numero1++;
    if(numero1 % 2 !=0){ // esto quiere decir que un numero impar, es todo numero que su resto es distinto de 0.
    console.log("Es un Numero Impar: "+ numero1);
    };
}

// % --> Resto de una división entre enteros (en otros lenguajes denominado mod)
// https://es.calcuworld.com/calculadoras-matematicas/calculadora-de-resto/




*/


 /*
 var numero1 = parseInt(prompt("Ingrese el numero 1",0));
 var numero2 = parseInt(prompt("Ingrese el numero 2",0));

// Recorrer numeros que hay entre N1 y N2.

while(numero1 < numero2){
    numero1++;
    // comprobar si el numero que se esta pasando si es impar, hay q hacer un if

    if(numero1 % 2 == 0 ){ // numero/ 2 , es distinto a "0"..
        console.log(numero1+" Es Par");
    };
}
*/