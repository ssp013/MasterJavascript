$(document).ready(function(){
    var elemento = $(".elemento");
    //draggable: podemos mover un elemento por lo página.
    elemento.draggable();
    //Como poder redimensionar los elementos, para eso ocupamos..
    elemento.resizable();
    //como hacer una lista, cuyos elementos puedan ser seleccionables.
    var lista = $(".lista_seleccionable");
        //lista.selectable();
    //Sortable: me permite ordenar los elementos como yo quiera..
    lista.sortable({
        update: function (event, ui){
            console.log("ha cambiado la Lista");
        }
    });

    //Droppable: como hacer un efecto de agarrar y soltar.
    var cajaRoja = $("#elemento-movido");
    var cajaVerde =$("#area");
    cajaRoja.draggable();
    cajaVerde.droppable({
        drop: function(){
            console.log("Has soltado algo dentro del AREA VERDE.");
        }
    });


    //efectos:
    $("#show").click( function(){
        //$(".caja-efectos ").fadeToggle();
        //$(".caja-efectos ").toggle("explode");
        //$(".caja-efectos ").toggle("blind");
        //$(".caja-efectos ").toggle("slide");
        //$(".caja-efectos ").toggle("drop");
        //$(".caja-efectos ").toggle("fold");
       // $(".caja-efectos ").toggle("puff");
       //$(".caja-efectos ").toggle("scale");
       $(".caja-efectos ").toggle("shake" ,4000);// puedo pasar velocidades o tamaños.
    })

    //TOOLTIP
   // $(document).tooltips();
    //Cuadro de diálogos, DIALOG.
    $("#lanzar-popup").click( ()=>{
          $("#popup").dialog();
    });
  //calendario:
  $("#calendario").datepicker();
  //Tabs:
  $("#pestanas").tabs();

});