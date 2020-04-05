$(document).ready( function(){
   //mouse over y mouseout:

 var caja = $('#caja');
 var datos=$('#datos');
 /*
 //cuando paso el mouse por el div
 caja.mouseover(function(){
    $(this).css("background","red"); 
 });  
 //cuando salgo del sdiv.
 caja.mouseout(function(){
    $(this).css("background","green");
 });
*/
 //Evento HOVER. sirve para hacer lo mismo, pero de una manera mas efectiva, sin tanto código, pudeo metter dos funciones de callback
 function cambiaRojo(){
    $(this).css("background","red"); 
 };
 function cambiaVerde(){
    $(this).css("background","green"); 
 };
 caja.hover(cambiaRojo, cambiaVerde);

 //Evento Click:
 caja.click( function(){
    $(this).css("background","blue")
            .css("color","white");
 });
 caja.dblclick( function(){
    $(this).css("background","pink")
            .css("color","yellow");
 });
 //Focus y blur:
 var nombre = $('#nombre');
 nombre.focus(function(){
     $(this).css("border","2px solid blue");
 });
 nombre.blur(function(){    
    $(this).css("border", "initial");
    let contenido = $(this).val();//saco la info sin problemas.
    datos.text(contenido).show();// text incrustarlo en contenido y show lo uestra en el DOM.
 });
//Mousedown: click en algo presiono y mantengo/ mouseup: cuando levanto el clickeado del mouse en el objeto..
datos.mousedown(function(){
        $(this).css("border-color","gray");

});
datos.mouseup(function(){
    $(this).css("border-color","black");

});
//mouseMove: persigue el raton, caputa el mvimiento de raton.
$(document).mousemove(function(){
    //console.log("En X " + event.clientX);//nos entrega los pixeles donde se encuentra el ratón.
    //console.log("En Y " + event.clientY);
    $('body').css("cursor","none");
    var sigueme = $('#sigueme');
    sigueme.css('left',event.clientX)
            .css('top',event.clientY);
});


});