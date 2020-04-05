'use strict'
// una constante no es nada mas que un contenedor de datos,
// igual que una variables, solo que ese valor no va a ser nunca modificado su contenido!!
// es entonces, como una variable pero su valor no puede cambiar

var web="https://victorroblesweb.es";
const ip ="192.88.0.12"; // como es una constante no va  a cambiar!!

web ="https://victorroblescursos.es";
// pero si intento modificar el valor de IP, no se va a poder!
//ip = "222232"; // nos da un error!

console.log (web, ip);