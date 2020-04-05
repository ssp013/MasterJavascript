'use strict'
/* 
Funciones: es una agrupación reutilizable de un conjunto de instrucciones.
 son un grupo de ordenes agrupados con nombre concreto;

tendremos un conjunto de funciones...

cuando conduzco un coche, tengo muchas cosas que hacen el acelerar.
cuando frenamos, hay muchas funciones que se van ejecutando cuando son embocadas!!!
- capsula donde están esas ordenes guardadas.

- tipos de funciones:
*alert();
*prompt();
*document.write();
¿como podemos crear?
*/
/*
function calculadora(){
    console.log("hola soy la calculadora!!");
    console.log("si soy yo!!");
  
    return "hola soy la calculadora!"; // con esto la función me va a devolver  un valor de la función.

}

var resultado = calculadora(); // aquín invocamos nuestra función
console.log(resultado);
*/

//PARÁMETROS: son variables que alteran la lógica o el resultado que nos puede devolver una función.


/*

function calculadora(num1, num2){ // parámetros
    console.log("La suma es : "+ (num1+num2));
    console.log("La resta es : "+ (num1-num2));
    console.log("La multiplicación es : "+ (num1*num2));
    console.log("La división es : "+ (num1/num2));
 
}
//invocamos la calculadora
//calculadora(12,8); // aquí le doi los valores a los parámetros num1 y num2
//calculadora(2,2); 

for(var i =1; i <= 10;i++){
    console.log("El análisis de "+i);
    calculadora(i,8); // 1,8 -- 2,8 -- 3,8 -- 4,8 -- 5,8 -- 6,8 --7,8 -- 8,8 -- 9,8 -- 10,8
};
*/


//PARÁMETROS OPCIONALES.
/*
function calculadora(num1, num2, mostrar=false){ // parámetros

    //console.log(mostrar);// ya veo que tiene false!!

    // podemos hacer de q si mostrar es false, entonces q me muestre todo por la consola.
    if(mostrar == false){ // si viene este boleano falso, me lo muestra en la consola 

        console.log("La suma es : "+ (num1+num2));
        console.log("La resta es : "+ (num1-num2));
        console.log("La multiplicación es : "+ (num1*num2));
        console.log("La división es : "+ (num1/num2));
    }else{// si no me lo muestra en el document

        document.write("La suma es : "+ (num1+num2)+"<br>");
        document.write("La resta es : "+ (num1-num2)+"<br>");
        document.write("La multiplicación es : "+ (num1*num2)+"<br>");
        document.write("La división es : "+ (num1/num2)+"<br>");

    }
 
}

//invocamos la función
calculadora(1,4);
calculadora(1,4,true);
*/

//FUNCIONES DENTRO DE OTRAS FUNCIONES...................................................................................................
function porConsola(num1,num2){
        console.log("La suma es : "+ (num1+num2));
        console.log("La resta es : "+ (num1-num2));
        console.log("La multiplicación es : "+ (num1*num2));
        console.log("La división es : "+ (num1/num2));
}
function porPantalla(num1,num2){
    document.write("La suma es : "+ (num1+num2)+"<br>");
    document.write("La resta es : "+ (num1-num2)+"<br>");
    document.write("La multiplicación es : "+ (num1*num2)+"<br>");
    document.write("La división es : "+ (num1/num2)+"<br>");
}


function calculadora(num1, num2, mostrar=false){ 
    if(mostrar == false){ 
        porConsola(num1,num2);
    }else{
        porPantalla(num1,num2);
    }
 
}
calculadora(1,4);
calculadora(1,4,true);
calculadora(2,2,true);