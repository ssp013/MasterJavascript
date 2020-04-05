'use strict'
//Json placeholder: es una api rest que nos entrega datos en JSON.
//Puede ser por peticiones GET O POST.
// Recibe in json y nos devuelve una info en json.
// por el backend se guardan los datos en la bd.
//Primer rest: https://jsonplaceholder.typicode.com/users'
//otra api rest: https://reqres.in/api/users?page=2

/*
 Fetch( Ajax) y peticiones a servicios (apis rest)
 fetch--> sustito del ajax, es un metodo que hace peticiones ajax a un servidor..
 var usuarios =[];
    fetch('https://reqres.in/api/users')
    .then(data =>  data.json())
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);

    });
 */
var divUsuarios = document.querySelector("#usuarios");
var divProfesor = document.querySelector("#profesor");
var divJanet = document.querySelector("#janet");

    getUsuarios()
    .then( (data)=>data.json() )
    .then( (users)=>{
        listadoUsuarios(users.data);
        return getInfo()  
    })
    .then(data=>{
        divProfesor.innerHTML = data;
        return getjanet()
    })
    .then (data=>data.json())
    .then ( user=>{
        mostrarJanet(user.data);
     })
     .catch(error=>{

         alert(error+"Error en las peticiones!");

     });
    



function getUsuarios(){
    return fetch ('https://reqres.in/api/users');
}
function getjanet(){
    return fetch('https://reqres.in/api/users/2');
}
//Como creamos una promesa desde "0":

function getInfo(){// quiero que en esta función se me devuelva otra promesa.
    var profesor ={
        nombre:'victor',
        apellidos:'Robles',
        url:'https://victorrobles.es'
    };
return new Promise((resolve,reject)=>{
var profesor_String = "";
                    setTimeout( ()=>{
                    
                            profesor_String =  JSON.stringify(profesor);
                        if(typeof profesor_String != "string") return reject('error');
                        return resolve(profesor_String);
                    },3000);
 // el new es una palabra para instanciar UNA CLASE o CREAR UN OBJETO.
    //Resolve: la promesa se ha resuelto o Reject: la promesa no sea a resuelto.
});

}



function listadoUsuarios(usuarios){
    usuarios.map( (users,i)=>{//una especie de for para agregar estos elementos JSON al DOM

            let nombre = document.createElement('h2');
            nombre.innerHTML= i+". "+ users.first_name + " - "+users.last_name;
            divUsuarios.append(nombre);
            document.querySelector(".loading").style.display ="none";
        });

}
function mostrarJanet(user){

    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');

    nombre.innerHTML= user.first_name + " - "+user.last_name;
    avatar.src= user.avatar;
    avatar.width= "100";
    divJanet.appendChild(nombre);
    divJanet.appendChild(avatar);

    document.querySelector(".loading2").style.display = "none";

}


