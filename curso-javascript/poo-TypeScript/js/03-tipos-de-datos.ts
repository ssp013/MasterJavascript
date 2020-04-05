/* Variables y tipado fuerte */

//string:
//let cadena: string = "seba";

//cadena = 12;// con estos errores nos aparece ene el terminal.

//Number:
let numero: number = 12;

//bolean:true or false
let verdadero_falso: boolean = true;

//Any: significa cualquier cosa, es decir , puedo forzar a que no se ocupe el tipado fuerte.
let cualquiera: any = 11;

//Arrays: puedo tener un array, que cada tipo de datos sea un string, number or any, or boolean.
var lenguajes: Array<any> = ['PHP','JS','CSS'];
let years: number[] =[12,13,14]; // es otra forma de definir los array.-


//Múltiple tipos de datos, asignados a una variables:
//let cadena: string|number = "seba";
//cadena =12;


//TIPOS de Datos Personalizados:
type letrasONumeros = string |number;
let cadena: letrasONumeros = "seba";

//Let vs Var:
var num1 = 10;
var num2 = 12;
if(num1 == 10){
    let num1 = 44;
    var num2 = 54;
   // console.log(num1, num2);
}
console.log(num1, num2);

console.log(cadena,numero, verdadero_falso, cualquiera,lenguajes,years); 