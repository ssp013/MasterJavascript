'use strict'

$(document).ready( function () {
    //Selector de ID:
    var rojo = $('#rojo').css("background","red");
    var amarillo = $('#amarillo').css("background","yellow");
    var verde = $('#verde').css("background","green");
    //Selectores de clase:

   

    //selector de Clases:
var mi_clase = $('.zebra').css("padding", "5px");

//Cuando le damos el evento CLICK a nuestro elementos con clase "sin_borde"; nuestro elemento se le agrega la clase "ZEBRA", que esta definida en nuestro <style> CSS.

$('.sin_borde').click( function (){
   console.log("click dado");
   $(this).addClass('zebra');
});


//Seleccionar etiquetas:
var parrafos = $('p').css("cursor","pointer");
parrafos.click( function (){
    var that = $(this);
    if(!that.hasClass('grande')){
        that.addClass('grande');
    }else{
        that.removeClass('grande');
    };
 
});
//Selectores por atributos: nos permiten seleccionar la etiqueta de HTML, que tengan ciertos atributos puestos.

$('[title = "Google"]').css('background',"#ccc");
$('[title = "Facebook"]').css("background","blue");

//FIND Y PARENT:
//Poner a los enlaces como a los parrafos un margen suprior.

//$('p,a').addClass('margen-superior');

//Quiero seleccionar el elemento2, de una lista que se presenta en un div id="caja":
//para ello ocupamos el elemento 
//var busqueda = $('#caja').find('.resaltado');

//Salir a las etiquetas padres;
var busqueda = $('#caja').find('.resaltado').parent().parent().find('[title = "Google"]');// podemos ir saltando de uina etiqueta a otra..
console.log(busqueda);

});

