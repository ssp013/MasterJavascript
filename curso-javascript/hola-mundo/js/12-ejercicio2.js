'use strict'
/*
Ejercicio 2: 
utilizando un bucle, se debe mostrar la "media " y la "suma", de los numeros introducidos por el usuario.
hasta que el usuario meta un Nº negativo, en ese caso mostrariamos el resultado.
*/ 



// media y suma..dos numeros-...hasta!!! hay un paron con un numero negativo!! mostramos la suma total y media:...
var numero1;
var suma = 0;
var contador = 0;

do{
    numero1 = parseInt(prompt("Ingrese el numero 1 : ",0));
    suma = suma + numero1;
    contador++;

    console.log(suma);
    console.log(contador);

}while(numero1 >= 0); // cuando sea mayor a 0 sigue el ciclo!
    
    console.log("la suma total es: "+suma);
    console.log("la media es: " + (suma/contador ));




























/*
//utilizamos el do while

var suma = 0 ;
var contador = 0;



do{
    var numero = parseInt(prompt("Ingrese Numeros Hasta que metas uno NEGATIVO!",0));

    if(isNaN(numero)){ // si no es un numero el que introduce el usuario, entonces el numero es 0.
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero ; // suma += numero, aquí suma se suma con numero, y ese resultado se asigna a "SUMA"
        contador++; // para ver las iteraciones q esta haciendo el bucle para calcular el bucle!
    }
    console.log(suma);
    console.log(contador);

 
    

} while(numero >= 0)// comprobar si numero es mayor o igual a cero, para que entre al bucle, al momento q sea negativo, se para el bucle / break automático!

alert("La suma de todos los números es " + suma);
alert("La Media todos los números es " + (suma/contador)    );

*/