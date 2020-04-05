'use strict'
window.addEventListener('load', ()=>{

var formulario = document.querySelector('#formulario');
var box_dashed = document.querySelector('.dashed'); // esta es una clase!
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', ()=>{
        

    var nombre=document.querySelector("#nombre").value;
    var apellidos=document.querySelector("#apellidos").value;
    var edad = document.querySelector("#edad").value;

    //Validar aquí el formulario:
    var alertaNombre = document.querySelector("#error_nombre");
      
    if(nombre.trim() == null || nombre.trim().length == 0 ){
        alertaNombre.innerHTML = "Error Nombre!";
        return false;
    }else{
        alertaNombre.style.display = "none";
    }
    if(apellidos.trim() == null || apellidos.trim().length == 0 ){
        alert("Los apellidos no son válidos");
        return false;
    }
    if(edad == null || edad <= 0 || isNaN(edad)){
        alert("La edad no es válida");
        return false;
    }

   //Mostrar los resultados en el DOM.
    box_dashed.style.display = "block";
    
    var p_nombre = document.querySelector("#p_nombre span")
    var p_apellidos = document.querySelector("#p_apellidos span")
    var p_edad = document.querySelector("#p_edad span")

    p_nombre.innerHTML= nombre;
    p_apellidos.innerHTML= apellidos;
    p_edad.innerHTML= edad;








        /*
         var datos_usuario =[nombre,apellidos,edad];
        var indice;

        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);

        }*/


    


  

    });

});
