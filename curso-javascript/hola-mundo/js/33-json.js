'use stric'
//JSON: 
/*
Nos permite hacer una especie de array asociativo.
almacenamos información asociativa.
- Podemos enviar y recibir datos de una manera ligera y muy simpple
- por ejemplo con MONGODB: almacena su información de esa manera, no presenta tablas, tiene documentos que son JSON y tienen los datos
guardados ahí, es una manera muy rapida para trabajar...
puedo tener un array dentro de un objeto y tmb array dentro de un objeto.-

 */
window.addEventListener('load',()=>{
var pelicula = {
    titulo: 'batman vs Superman',
    year: '2017',
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo:"La verdad duele" , year : 2016 , pais : "Francia"},
    pelicula
];


var divResultado =document.querySelector('#peliculas');
var indice;

for (indice in peliculas){

    var p = document.createElement("p");
    p.append(peliculas[indice].titulo+ " - "+ peliculas[indice].year + " - "+ peliculas[indice].pais);
    divResultado.append(p);

};
});