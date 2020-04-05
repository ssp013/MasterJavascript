' use strict'
var mongoose = require ('mongoose');
var app = require('./app');
var port = 3700; //localhost:3700

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio' ,{ useNewUrlParser:true }) 
    .then( () =>{
        console.log("Conexión correcta con BD");
        /* Una vez que realice la conexión a la BD dentro de este THEN, debo ejecutar la creación del servidor: */
        app.listen(port, ()=>{ 
            console.log("Servidor Corriendo correctamente en la URL localHost : 3700");
        });
        
    })
    .catch( (err)=> {console.log(err) } );
    