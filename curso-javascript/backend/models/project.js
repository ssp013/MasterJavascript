'use strict'

//para crear un modelo debo importar " mongoose";
// mongoose: se encarga de trabajar con los modelos. 
var mongoose = require('mongoose');
// debo cargar el esquema de nuestro modelo:
var Schema = mongoose.Schema;
//cargar el esquema de projets, este va a ser el objeto molde,
// el cual voy a estar creando nuevos documenbtos de este tipo en nuestra base de datos.-
//Con esto ya tengo mi modelo Creado, mi esquema. ==> Puedo crear mis nuevos objetos.
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    langs:String,
    year: Number,
    image: String
});
//Ahora voy a exportar este modulo ,para poder ocupar fuera de este fichero.
// mongoose.model(ProjectSchema); =>  para cojer este esquema y utilizarlo como modelo..

module.exports = mongoose.model('Project',ProjectSchema); 
// en la BD se va a guardar en la base de datos como PROJECTS en plural
//projects --> guarda los documents en la colección. 