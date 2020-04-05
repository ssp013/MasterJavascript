'use strict'
/*Vamos Hacer que el cliente se pueda conectar a nuestro Socket y nos indique en  nuestro console.log;
el mensaje de que alguien se conecto. 
- forceNew: esto hace que la conexión se fuerze.
Si queremos controlar el socket a nivel local, debemos ocupar la IP LOCAL.
*/
var socket = io.connect('http://192.168.1.69:6677',{'forceNew':true});
//Cliente va a recojer ese mensaje:
socket.on('messages',function(data){
    console.log(data);
    render(data); //cuando el socket me envíe esos mensajes, y reciba el evento,  yo lanzo esa función y me actualiza los datos
});
//Creamos una funcion para pintar esos objetos de la consola al HTML:
function render(data){
    var html = data.map(    function(message, index){
//Recorremos ese mensaje.MAP-> itera en los elementos del array data, el contenido de cada indice, lo guarda en cada index y el mensaje en message.
        return(`
            <div class="message">
                <strong>${message.nickname}</strong> dice: 
                <p>${message.text}</p>
            </div>
        `);//Nos permite interpolar o imprimir dentro de esa cadena variables.
    }).join(' ');
    var div_msgs = document.getElementById('messages');
    div_msgs.innerHTML = html;
    div_msgs.scrollTop = div_msgs.scrollHeight;
}

function addMessage(e){
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };
    document.getElementById('nickname').style.display = 'none';
    socket.emit('add-message', message);
    return false;
}