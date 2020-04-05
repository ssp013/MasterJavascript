'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();


var textoHora =`
    El año es:${year}
    El mes es:${mes+1}
    El día es:${dia}
    La hora es:${hora}
    Los minútos son:${minutos}
    Los Segundos son:${segundos}
`;
console.log(textoHora);

console.log(Math.ceil(Math.random()*10000));
//Math.ceil: Convierte a un número Entero.
//Math.randow; buscar un número aleatorio.
