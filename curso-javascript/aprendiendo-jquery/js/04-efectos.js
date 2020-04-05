$(document).ready(function(){

var caja=$('#caja');
caja.hide();
$("#ocultar").hide();

$('#mostrar').click( function(){
    $(this).hide();
    $("#ocultar").show();
    caja.fadeTo('slow', 1);
});
$('#ocultar').click( function(){
    $(this).hide();
    $("#mostrar").show();
    caja.fadeTo('slow',0);
});
//todo en uno:
$("#todoEnUno").click(function(){
    caja.slideToggle('fast');
});
$("#animar").click(function(){
    caja.animate(  {
        marginLeft:'500px',
        fontSize:'40px',
        height:'110px'
                    } , 'slow')
        .animate({
            borderRadius:'900px',
            marginTop:'80px',

        },'slow')
        .animate({
            marginLeft:'0px',
            borderRadius:'0px',
        },'slow')
        .animate({
            borderRadius:'100px',
            marginTop:'0px',
        },'slow')
        .animate(  {
            marginLeft:'500px',
            fontSize:'40px',
            height:'110px'
                        } , 'slow')
    });



});