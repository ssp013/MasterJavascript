'use sctric'

/* Operadores
- dentro de un lenguaje de progra, podemos hacer varias operaciones con ellos
*/
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;
// el % te saca el resto de uno de ellos!

alert("resultado de la operacion es "+" "+ operacion);


//tipo de datos
var numero_entero = 44;
var cadena_texto = "Hola que pasa "; // podemos ocupar comillas '' o " ", las comillas dobles mandan!

var verdaderoOFalso = true; // false //0(false) and 1 (true)

var numero_falso = "33"; // este es un String,
// funcion number, a la cual le paso  un numero. Me convierte esa cadena de texto en un INT
console.log(Number(numero_falso) + 7); // resultado 40, me lo convierte en un INT
console.log(parseInt(numero_falso)+7); // convierte en entero
console.log(parseFloat(numero_falso)+ 7.2); // convierte en decimal
console.log(String(numero_entero)+4); //444

//Typeof
// nos devuelve el tipo de datos de nuestras variables
console.log(typeof numero_entero); 
console.log(typeof cadena_texto); 
console.log(typeof verdaderoOFalso); 
console.log(typeof numero_falso); 


 