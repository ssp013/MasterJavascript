$(document).ready( function(){
//load: este metodo simplemente nos permite hacer una petición Ajax e incrustar ese resultado en un DIV.

//$("#datos").load("https://reqres.in/");
/*Get y POST: en el protocolo http, tenemos varios metodos, j query, incluye metodo get y post.
    $.get("https://reqres.in/api/users",{page:3}, function(response){
            response.data.forEach( (element , index)=> {
                    $("#datos").append("<p>"+element.first_name+ " " +element.last_name + "</p>");
            } );
    });*/
//Post:



$("#formulario").submit ( function(e){
    e.preventDefault(); //no me va a redirigir..a la página creada con el JSON.
    var usuario = {
        name: $('input[name="name"]').val(),
        web: $('input[name="web"]').val()
    };

    /* $.post($(this).attr("action"), usuario, function(response){// la url la coge desde el propio formulario..
        console.log(response);
    }).done(function(){ 
        alert("Usuario añadido correctamente");
    });*/

    //PETICIÓN AJAX: podemos manipular mucho mejor la petición AJAX.
    $.ajax({
        type:'POST',
        dataType: 'json',
        url:$(this).attr('action'),
        data: usuario,
        beforeSend:function(){
            console.log("Enviando Usuario...");
        }, // antes que se envie va a realizar esta función.
        success: function(reponde){
            console.log(reponde);
        },// en el caso que todo este correcto, se emite una funcion de callback.
        error: function(){
            console.log("A ocurrido un error");
        },
        timeout: 1000,
    });



    return false;
});


});