'use strict'
$(document).ready(function(){




    reloadLinks();
    $("#add_button")
    .removeAttr('disabled')
    .click(function(){
      // $('#menu').html(' <li><a href="https://'+    $("#add_link").val()+'"</a></li>' );
      $('#menu').prepend(' <li><a href="https://'+    $("#add_link").val()+'"</a></li>' );
      $('#add_link').val("");
       reloadLinks();
    });




 
    
});

function reloadLinks(){
    $('a').each(function(index){
        //seleccionar de estos <aref> y selecoonar los textos de esos atributos
        var that = $(this);
        var enlace = $(this).attr("href");
        that.attr('target','_blank');
        that.text(enlace); 
    });

}