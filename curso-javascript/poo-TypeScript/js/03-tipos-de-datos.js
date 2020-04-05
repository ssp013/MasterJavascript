/* Variables y tipado fuerte */
//string:
//let cadena: string = "seba";
//cadena = 12;// con estos errores nos aparece ene el terminal.
//Number:
var numero = 12;
//bolean:true or false
var verdadero_falso = true;
//Any: significa cualquier cosa, es decir , puedo forzar a que no se ocupe el tipado fuerte.
var cualquiera = 11;
//Arrays: puedo tener un array, que cada tipo de datos sea un string, number or any, or boolean.
var lenguajes = ['PHP', 'JS', 'CSS'];
var years = [12, 13, 14]; // es otra forma de definir los array.-
var cadena = "seba";
//Let vs Var:
var num1 = 10;
var num2 = 12;
if (num1 == 10) {
    var num1_1 = 44;
    var num2 = 54;
    // console.log(num1, num2);
}
console.log(num1, num2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
