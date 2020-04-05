'use strict'
var express = require('express');
var ProjectController = require ('../controllers/project');
//Servicio de las rutas:
var router = express.Router();
//importamos del paquete de connect-multyparty:
var multipart = require('connect-multiparty');
//configuramos un middleware: es algo que se ejecuta antes que se ejecute un controlador.
var multipartMiddleware = multipart({ uploadDir: './uploads'});// digo que se van a guardar los archivos en la carpeta 'uploads'

router.get('/home' , ProjectController.home );
router.post('/test' , ProjectController.test);
router.post('/saveProject', ProjectController.saveProject);
router.get('/getProject/:id', ProjectController.getProject);
router.get('/getProjects' , ProjectController.getProjects);
//hacemos una ruta por 'put' : pk este método http, funciona para la actualización de recursos de una API.
router.put('/project/:id', ProjectController.updateProject);
//Esta va a ser delete
router.delete('/project/:id', ProjectController.deleteProject);

//Es ruta post, pk vamos añadir recursos en nuestro backend. PARA poder ejecutar el middleware debemos agregarlo a una ruta;
//lo agregamos como 2 parámetro en nuestra ruta, antes del método.
router.post('/uploadImage/:id',multipartMiddleware, ProjectController.uploadImage);


//Ruta para obtener la imágen:
router.get('/getImage/:image', ProjectController.getImageFile);


module.exports = router; 