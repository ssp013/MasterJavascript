'user stric'

//prueba con let y var
/*

Diferencia entre el LET y Var , es el alcance que tienen las variables y
como actuan en función de los diferentes bloques.-

*/

//prueba con var

var numero = 40;
console.log(numero);//valor  40
if (true){
    var numero = 50;
    console.log(numero); //valor 50
}
console.log(numero); //valor 50

//prueba con LET

let texto ="curso JS victor robles web.es";
console.log(texto); // valor es el ""

if(true){
    let texto = " Curso Laravel 5"; //mi logica en js, es que voy a actualizar mi variable! 
    console.log(texto);
    // como let trabaja en función a bloques, lo que hace es crear esa variable nueva con un nuevo valor solo en ese "IF"
}
//si hago un let afuera del if
console.log(texto);

/*
Lo que hace es crear en ese bloque "IF" con un significado, afuera del IF, actua con el significado Original!!
- es asi como let, define las variables en funcion de bloques solamente!


*/