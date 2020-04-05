'use strict'
var params = process.argv.slice(2);

var num1 = parseFloat(params[0]);
var num2 = parseFloat(params[1]);

var plantilla = `
la suma es : ${num1 + num2}
la resta es : ${num1 - num2}
la multiplicación es : ${num1 * num2}
la división es : ${num1 / num2}
`;
console.log(plantilla);
console.log("Hola Mundo con NodeJs.-");
