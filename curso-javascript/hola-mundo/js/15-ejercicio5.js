'use strict'
/*
Ejercicio 5: mostrar todos los numeros divisores de un numero introducidos en un prompt!!!
*/

//Numeros divisores! ejemplo: 10- divisores son: 1,2,5,10

var numero1 = parseInt(prompt("Ingrese Numero "),0);

for(var i = 1;i <= numero1;i++){
    if( numero1%i == 0){
        console.log(i);
    };

};


























/*
var numero = parseInt(prompt("Ingrese new numero",1)); // 10--> 1, 2, 10, va introducir el usuario

//ocupamos un FOR, pk vamos del numero 1 hasta el que se ingresa por el usuario!


for(var i = 1; i <= numero ; i++){


    if(numero%i == 0){

    console.log(i); // me da todos los numero, ahora debo mostrar sus devisores

    };


}
*/