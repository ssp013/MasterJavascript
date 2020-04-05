'use strict'
//Parámetros de Rest(resto) y Spred
function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){
    console.log("fruta 1 : "+fruta1);
    console.log("fruta 2 : "+fruta2);
    console.log(resto_de_frutas); // me las guarda en un "ARRAY"
}

//listadoFrutas("Naranja","Manzana","Sandía","Péra","Melón","COCO"); 

var frutas = ["Naranja","Manzana"]; //fruta1,fruta2--> hace un spread de parámetro...
listadoFrutas(...frutas,"Sandía","Péra","Melón","COCO"); 

/*
 Esos parámetros indefinidos... que pasa??
- para eso sirven los parámetros rest!!.
poniendo ... ; en la funciton listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    ...resto_de_frutas: me va a meter todos los valores que le esto pasando al último, en un "array".
    0:"Sandía"
    1:"Pera"
    2:"Melón"
    3:"Coco"

Array : es una colección (LISTA,ARREGLO) de valores, oredenado desde 0 hacia arriba.
}

 */