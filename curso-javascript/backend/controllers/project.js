'use stric'
//este project.js --> Es el controlador de los 'projects'
/* controladores: es una especie de clases, que tiene una serie de métodos o de acciones que va poder hacer ,
relacionados con la entidad de 'projects'
*/
//Podemos hacer en un objeto JSON o crear funciones preparadas y así devolver un objeto JSON:
//Primer método: creamos una especie de Clase con un objeto JSON

/*  PARA PODER CREAR UN NUEVO PROJECTO ANTES DE  NADA DEBO IMPORTAR MI MODELO*/
var Project = require('../models/project');
var fs = require('fs'); // ocupamos la librería filesystem.
var path = require ('path'); //importamos, cargar rutas físicas desde nuestro servicio de archivos


var controller = {
    home: function(req,res){
        return res.status(200).send({
            message : 'Soy la Home'
        });
    },
    test : function( req, res){
        return res.status(200).send({
            message: 'soy el método o acción TEST del controlador de Projects'
        });
    },
//MÉTODO PARA GUARDAR UN PROJECT
    saveProject: function( req, res){
        //creamos esta variable para crear un NEW PROJECT
        var project = new Project();
        //creamos una variable "params" para recojer los datos que se envían por el body.
        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.langs = params.langs;
        project.year = params.year;
        project.image = null;

        //¿Cómo puedo guardar este objeto en la base de datos?
        project.save( (err, projectStored) =>{
            
            if(err) return res.status(500).send ({ message: 'error al guardar el documento'});
            if(!projectStored) return res.status(404).send ({ message : 'No se ha podido guardar el proyecto !'});
            return res.status(200).send ( {project : projectStored});
        });
    },
//MÉTODO PARA EN BUSCAR UN PROJECTS
    //Con esta vamos a buscar un objeto de la base de datos:
    getProject : function (req,res){
        //Vamos a recojer un valor que nos lleva por la URL:
    var projectId = req.params.id;

    if(projectId == null) return res.status(404).send ({ message: 'El proyecto no existe'});

    Project.findById (projectId, (err, project)=>{
        if(err) return res.status(500).send({ message: 'Error al devolver los datos'});
        if(!project) return res.status(404).send ({message: ' El proyecto no existe'});
        return res.status(200).send({
        project
        });
    });

    },
//MÉTODO PARA EN LISTAR TODOS LOS PROJECTS
    getProjects: function (req, res){
        Project.find({}).sort('-year').exec( (err, projects)=>{
            if(err) return res.status(500).send({ message: ' Error al devovlver los datos'});
            if(!projects) return res.status(404).send ({ message: ' los projects no existen '});
            return res.status(200).send ({ projects });
        }) // método find(), me saca todos los documentos que hay dentro de una colección de datos de "Project"
        /*Dentro de el find ({}) podemos pasarles opciones de "where"- por ejemplo: year : 2019 y me saca el objeto con ese año.

        - Utilizamos el método:  exec() ; es decir, q cuando ya nos saque los resultados vamos a ejecutar una función de callbacks
        que va a recibir un err y un array de objetos.
        - .sort('year'): con el método sort podemos ordenar por año..
        .pero si queremos ordenar del más nuevo al más antiguo: .sort('-year')
         .pero si queremos ordenar del más antigüo al más nuevo: .sort('+year')

        */
    },
//MÉTODO PARA ACTUALIZAR LOS DATOS DE UN PROJECT
updateProject: function (req, res){
    //Debemos recojer un parámetro por la URL, para indicar que objeto vamos a editar:
    var projectId = req.params.id;
    //aquí vamos a recojer todo el body de la petición, 
    //esto simplemente es el objeto completo con los datos ectualizados de nuestro objeto.
    var update = req.body;

    Project.findByIdAndUpdate(projectId, update,{new : true}, (err, projectUpdate)=>{
        if(err) return res.status(500).send ({ message: 'error en la devoluión de los datos'});
        if(!projectUpdate) return res.status(404).send ({ message : ' El project no existe para actualizar'});
        return res.status(200).send({ project: projectUpdate });
    });
    /*
    - findByIdAndUpdate() ; ocupamos este método, si le pasamos un ID un objeto se me actualiza en la BD.
         -le pasamos el 'projectId': para que este método sepa que documento de la BD debe actualizar.
        -luego el update: para sustituir los datos que estén en esta BD por
        los datos nuevos que se escribieron en el 'body' 
        - y tmb una f(x)  de Callback 
    - con el {new:true}, me devuelve el documento ya actualizado en nuestra vista!!
    */
},
//MÉTODO PARA ELIMINAR UN DOCUMENTO DE LA COLECION DE DATOS.
deleteProject: function(req, res){
    //recojemos por la url el id
    var projectId = req.params.id;


    Project.findByIdAndRemove(projectId, (err,projectRemoved)=>{
        if(err) return res.status(500).send({ message: ' No se ha podido borrar el project'});
        if(!projectRemoved) return res.status(404).send({ message: ' no se puede eliminar ese project'});
        return res.status(200).send({ 
                project: projectRemoved
        });
        
    });
    /*findByIdAndDelete: me permite borrar un documento de mi bd.

     */
},
//MÉTODO PARA SUBIR UNA IMÁGEN:
uploadImage: function (req, res){
    var projectId = req.params.id;
    var fileName = 'Imagen no subida...';
//con el connect-multipaty; vamos a poder recojer ficheros por la req ex: req.files--
    if(req.files){//caso que exista:
        //filePath: necesito los datos de la imágen
        var filePath = req.files.image.path;
        //luego necesito sacar de ahí el nombre real del archivo q se a guardado en el disco duro.
        //con esta variable vamos a guardar y  hacer un recorte del filePath, 
        //vamos a separar un string con un separador '/' 
        var fileSplit = filePath.split('/');
        //recojo el índice de fileSplit, en este caso es 1: q es el nombre del archivo!
        var fileName = fileSplit[1];
                        /*AHORA VAMOS HACER UNA MEJORA EN NUESTRO CÓDIGO, VAMOS A COMPROBAR QUE 'EXTENCIÓN' SE ESTA SUBIENDO,
                        SI LA EXTENCIÓN ES CORRECTA Y ADEMÁS VAMOS HACER SI LA EXTENCIÓN NO ES CORRECTA O NO SUBIDO BIEN EL ARCHIVO,
                        LO BORRE DE NUESTRA CARPETA UPLOADS
                        *///primero sacamos la extensión de nuestro archivo, ahora tenfo un array con 2 elementos! la parte del 'name' indice 0 del array y la 'extensión' q es el indice 1 del array 
                                var extSplit = fileName.split('\.');
                                //accedemos al indice 1 de nuestro array, donde se presenta la extensión:
                                var fileExt = extSplit[1];
                        //hacemos un condicional para comprobar si existe o no el archivo imágen:
                                    if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){


            //pasamos con el id la img que elegimos para que se guarde en la BD.{image: fileName}: para que me guarrde el nombre del fichero.
            // le agrego como tercer parámetro {new:true}; para que me devuelva el nuevo objeto guardado en la BD y no la copia anterior.
            Project.findByIdAndUpdate(projectId, {image: fileName} , {new: true}, (err, projectUpdate)=>{
                if(err) res.status(500).send ({message: ' La imágen no se ha subido'});
                if(!projectUpdate) res.status(404).send ({ message: ' La imágen o project no existe '});
                return res.status(200).send({
                    project: projectUpdate
                });
            });
    //CASO CONTRARIO SI NO ME ENCUNTRA EL ARCHIVO!! EN ESE FORMATO, DEBEMOS BORRAR ESE ARCHIVO, OCUPAMOS UNA NUEVA LIBRERÍA= "file system"
    //PARA ELLO DEBEMOS IMPORTARLO AL INICIO DE NUESTRO ARCHIVO.
            }else{
                fs.unlink(filePath, (err)=>{
                    return res.status(200).send({ message: "la extensión no es válida"});
                });
            }  
    
        }else{
            return res.status(200).send({
             message: fileName
            });
        }

           
},

//Método para obtener la imágen:
getImageFile: function(req, res){
        var file = req.params.image;
        var path_file = './uploads/'+file;
            fs.exists(path_file, (exists)=>{
                    if(exists){
                        return res.sendFile(path.resolve(path_file));
                    }
                    else{
                        return res.status(200).send({
                            message: 'No Existe la Imágen...'
                        });
                    }
            });
}


    
}; 

module.exports = controller;