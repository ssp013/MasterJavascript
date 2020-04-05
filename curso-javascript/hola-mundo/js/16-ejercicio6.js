'use strict'
/* 
El sistema nos debe decir si un umero es !PAR o !IMPAR
Debe tener un si no es valido que no pida de nuevo el numero

- que nos diga es PAR o Impar. 
- Ventana que pida numero.
- comprobar si que si no es un numer nos pida de nuevo el  numero
- muestre en pantalla si es par o no

*/

var number = parseInt(prompt("INgrese un Numeo acá!!"),0);

while( isNaN(number) || number<=0 ){ // if is not a number or the number is less to 0, then ,continue in the bucle
    number = parseInt(prompt("INgrese un Numeo acá!!"),0);
}
if( number%2 != 0 ){
    console.log(number + " --> es Impar!")

}else{
    console.log(number + " --> es Par!")
};

/*

var numero = parseInt(prompt("Ingrese Numero",0 ));

while( isNaN(numero) ){

    numero =  parseInt(prompt("Ingrese Numero",0 ));
}
if(numero % 2 == 0){
    alert("Es un numero Par");
} else{
    alert("Es impar!");

};
*/