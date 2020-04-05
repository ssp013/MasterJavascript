'use strict'

// condicional IF
var edad1 = 12;
var edad2 = 30;
//si pasa esto
if(edad1 > edad2){
    //ejecuta esto
    //console.log("Edad uno es mayor que edad dos");
}else{
    //console.log("la edad uno es menor!!");
}

/*
            OPERADORES RELACIONALES
< : Menor
> : Mayor
<=: Menor o Igual
>=: Mayor o Igual
== :Exttrictamente igual
===
!= : diferente
*/

// quiero comprobar si el usuario es mayor a 18.

var edad = 4;
var nombre = "Sebastian Sanchez";

if(edad >= 18){ // mayor o igual
    console.log( nombre + " es Mayor de edad. Usted tiene : " + edad+ " años.");
    if(edad <= 33){ // si la edad es exactamente a 33!
        console.log("Todavía eres Millenial");
    }else if(edad >= 70){
        console.log("Eres viejo!!");
        }else{
        console.log("Ya no eres MIllenial");
        }
}else{
    console.log( nombre + " es Menor de edad. Usted tiene : " + edad+ " años.");
}

 
/* OPERADORES LÓGICOS!
&& : and
|| : or
! : Negación

*/

//Negación:
var year = 2018;
if(year != 2016){ // no es igual a 2016
console.log("El año no es 2016");
}
//AND
if (year>= 2000 && year <= 2020 && year != 2018 ){ // si se cumplen estas tres condiciones, nos entregaria el primer console log
    console.log("Estamos en la ERA actual");
}else{
    console.log("Estamos en la era POST moderna!");
}

//OR
if(year == 2008 || (year == 2018 && year == 2028)){ // si ocurre en uno se cumple. PODEMOS OCUPAR () PARA ENTREGAR UNA MAYOR REALSE UNA QUE OTRA!
    console.log("El años acaba en 8");
}else{
    console.log("Año no registrado!");
}

