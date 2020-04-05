'use strict'

/*
Ejercicio 3: hacer un programa que muestro los numeros que están entre: 2 numeros introducidos por el usuario!!
*/

var numero1 = parseInt(prompt("Ingrese el numero 1",0));
var numero2 = parseInt(prompt("Ingrese el numero 2",0));

for (var i = numero1 + 1 ; i <= numero2-1;i++){
  console.log("los numemeros son"+(i));
};




























/*


var numero1 = parseInt(prompt("Ingrese el numero 1",0));
var numero2 = parseInt(prompt("Ingrese el numero 2",0));
console.log("Los numero que estan entre: " + numero1 +" y " + numero2+" son : ")

for(var i = numero1; i<=numero2  ;i++){ // i --> 5; i <=numero2 --> 5 <= 10; i = i+ 1

  console.log(i);
};





*/





















/*
var numero1 = parseInt(prompt("Ingrese el Numero 1",0)); // 5
var numero2= parseInt(prompt("Ingrese el Numero 2",0)); // 10






document.write("<h1>De "+numero1+" a " +numero2 + ", están estos números : </h1>");// nos permite agregar un BODY en nuestra página!


for(var i = numero1; i <= numero2; i++ ){
    document.write(i+" <br>");
  
};










/*

Mi solución, ESTA BUENA!

var numerosEntre = numero2 - numero1 // 5
console.log("Los numeros que están entre el "+ numero1 +" y el "+ numero2 + " son : ");

for(var i = 0; i < numerosEntre - 1 ;i++){
numero1 = numero1 + 1;
console.log(numero1);

};

*/