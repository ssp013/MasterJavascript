'use strict'
var express = require('express');
var app = express(); //Viene del módulo.
var server = require('http').Server(app);//cargamos el servidor HTTP y le pasamos la app de express.
//Server: se la debemos pasar a Socket IO para que entienda que va a estar trabajando con socket, desde la conexión HTTP que le vamos a pasar
var io = require('socket.io')(server);//engloba la libreria http y express.

//middleware de express:ocupamos el html de client, el index.html.
app.use(express.static('client'));

//PARA HACER UNA RUTA NOSOTROS, TENEMOS QUE UTILIZAR EXPRESS:
app.get('/hola-mundo', function(req, res){
    res.status(200).send("Hola mundo desde una ruta");
})

//Vamos a enviar un mensaje por defecto:
var messages = [{
    id:1,
    text:'Bienvenido al chat privado de TATAN',
    nickname: 'Bot - ssp013'
}];
/*
--Conexión al socket:
->ON: nos permite lanzar eventos.
*/
io.on('connection', function(socket){
    console.log("El cliente con IP: "+ socket.handshake.address + " se ha conectado..");
    //Recojo el mensaje y lo emito al cliente;:
    socket.emit('messages',messages);

    socket.on('add-message', function(data){
        messages.push(data);

        io.sockets.emit('messages', messages);
    })
});



//Ahora creamos un servidor con express y ocupamos tmb la librería Http, 
server.listen(6677, function(){
    console.log("el servidor está funcionando en http://localhost:6677");
});
//vamos a lanzar el servidor con npm start.
