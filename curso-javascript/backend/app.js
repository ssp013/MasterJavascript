'use strict'
//aquí cargo el módulo de express y body parser para trabajar con el
var express = require ('express');
var bodyParser = require('body-parser');
var ProjectRoutes = require('./routes/project');

//aquí ejecuto express:
var app = express();

//Aquí va la configuración de ARCHIVOS DE RUTAS: 

//Aquí va la configuración de 
//Middlewares:q son una capa o un método que se ejecuta antes de ejecutar la acción de un controlador.
//crearemos uno global.
app.use(bodyParser.urlencoded({extended:false})); //configuración necesaria para body parser.
app.use(bodyParser.json()); // cualquier tipo de petición por el body me lo va a transformar en un JSON.

/*CORS*/
// Configurar cabeceras y cors: permitimos el acceso de un ORIGEN a OTRO, de un dominio a otro dominio.
// y no tenemos ningún problema para desarrollar nuestra aplicación en el FRONT-END
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//RUTAS
    // sobre escribo esas rutas dentro de la cración de un middleware:
app.use('/api', ProjectRoutes);




 



// RUTAS DE LA CLASE DE RUTAS EN NODE.JS
                /* peticiones POST */
            /* app.post('/test/:id', (req, res)=> { 
                    /*tengo la info de la petición:
                    //Yo estoy enviando datos por el BODY, que es el cuerpot de la petición por POST:
                    console.log(    req.body.nombre  );
                    /*puedo acceder a query, en el caso que yo enviara un parámetro por la url a mi web,
                    http://localhost:3700/test/?web=ssp013.com 
                    si quiero acceder a esa web:con query.
                    
                    console.log(    req.query.web   ); 
                    /* En que caso ocupo PARAMS: en el caso que yo le pase un parámetro a la URL Y así recojer parámetros por la URL.
                    , Ejemploo: /test/:id 
                            http://localhost:3700/test/88?web=ssp013.com
                            El 88 es mi id que lo paso por mi Url.
                    
                    console.log( req.params.id);

                    res.status(200).send({
                        message: "Hola Mundo desde NODEJS"
                    });
                });
                /* peticiones get 
                app.get('/', (req, res)=> {
                    res.status(200).send(
                    "<h1>Página de Inicio</h1>"
                    );
                });

                /*
                app.get('/test', (req, res)=> {
                    res.status(200).send({
                        message: "Hola Mundo desde NODEJS"
                    });
                });
            */


//Exportar
module.exports = app; // tiene toda la configuraciónd de todo nuestros middleware.

//CON TODO ESTO YA TENGO MI CONFIGURACIÓN DE EXPRESS Y BODYPARSER , para ya crear mi servidor.
//para crear mi servidor me debom ir al INDEX.JS 