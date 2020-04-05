'use strict'
window.addEventListener('load', ()=>{
/* LocalStorage (HTML5 WEB storgage): podemos guardar información en nuestro navegador WEB a modo de sesión.
Y que esta información persista  y este disponible durante la navegación de las diferentes páginas, de nuestra página web.
-> suele usar en MIN stack, Angular, proyectos web, compartir datos en X sessiones.
-> en pHP, no se ocupa el localStorage.
-> es una memoria que tenemos en nuestro navegador guardada.
¿Como sabemos si nuestro navegador es compatible?

//Comprobar si LocalStorage Existe:
if (typeof (Storage) !=='undefined'){
    console.log("LocalStorage Disponible");
}else{
    console.log("Incompatible con LocalStorage ");
}
*/
// Guardar Datos en LocalStorage:
localStorage.setItem('titulo','Curso de Symfony de Víctor Robles');

//Recuperar elemento e insertarlo en una etiqueta en HTML.
var dato = localStorage.getItem("titulo");
var cajaDiv = document.querySelector("#datos");

var p = document.createElement("p");
p.append(dato);
cajaDiv.append(p);

//Guardar Objetos (JSON) en el LocalStorage:
/*OJO:
- en el LocalStorage, gmetodo Post o enviar una información por una API.
Suele ser necesario convertir esos datos en un STRING.
para enviar datos vía HTTP, no se envian datos en JSON puro, sino que en STRING.
debe ser un string o Num, obligatoriamente..
Objeto JSON to  STRING!!
 */
var usuario ={
    nombre:"Sebastián",
    email:"ssp013@gmail.com",
    web:"sspdev.cl"
};
localStorage.setItem("usuario",JSON.stringify(usuario));
//Recuperar Objetos (JSON) en el LocalStorage:
/*¿Como puedo transformar de un JSON STRING a un JSON para que lo utilize JS?
JSON.parse();
Lo que hago con esto es convertir el JSON String en un objeto de JS usable.

*/
var userjs = JSON.parse(localStorage.getItem("usuario"));
//Puedo manejar ahora en JS:
p = document.createElement("p");
p.append(userjs.nombre +"-"+userjs.email + "-"+userjs.web );
cajaDiv.append(p);

//Eliminar elementos del LocalStorage --> localStorage.removeItem("usuario"); 
localStorage.clear(); 

});