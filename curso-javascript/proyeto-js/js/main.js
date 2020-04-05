$(document).ready( function(){
//Slider
if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
                mode: 'fade',
                captions: false,
                slideWidth: 1200,
                responsive: true,
                pager: true
              });
}
 
//POST:
if(window.location.href.indexOf('index') > -1){
var posts = [
        {
        title:'Prueba de título 1',
        date: 'publicado el dia : '+ moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
        content:'orem ipsum dolor sit amet, consectetur adipiscing elit Vivamus sed diam mi. Sed venenatis laoreet aliquam. Aliquam tristique velit in placerat convallis. Nunc ac neque eget arcu eleifend imperdiet eget euismod odio. Cras augue turpis, purus risus, at porta nisi finibus consectetur. Aenean nec ligula egestas, placerat augue et, imperdiet felis. Nunc et ipsum dui. Phasellus varius malesuada sem, a convallis orci ultricies id.'
        },
        {
        title:'Prueba de título 2',
        date: 'publicado el dia : '+ moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
        content:'orem ipsum dolor sit amet, consectetur adipiscing elit Vivamus sed diam mi. Sed venenatis laoreet aliquam. Aliquam tristique velit in placerat convallis. Nunc ac neque eget arcu eleifend imperdiet eget euismod odio. Cras augue turpis, purus risus, at porta nisi finibus consectetur. Aenean nec ligula egestas, placerat augue et, imperdiet felis. Nunc et ipsum dui. Phasellus varius malesuada sem, a convallis orci ultricies id.'
        },
        {
        title:'Prueba de título 3',
        date: 'publicado el dia : '+ moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
        content:'orem ipsum dolor sit amet, consectetur adipiscing elit Vivamus sed diam mi. Sed venenatis laoreet aliquam. Aliquam tristique velit in placerat convallis. Nunc ac neque eget arcu eleifend imperdiet eget euismod odio. Cras augue turpis, purus risus, at porta nisi finibus consectetur. Aenean nec ligula egestas, placerat augue et, imperdiet felis. Nunc et ipsum dui. Phasellus varius malesuada sem, a convallis orci ultricies id.'
        },
        {
        title:'Prueba de título 4',
        date: 'publicado el dia : '+ moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
        content:'orem ipsum dolor sit amet, consectetur adipiscing elit Vivamus sed diam mi. Sed venenatis laoreet aliquam. Aliquam tristique velit in placerat convallis. Nunc ac neque eget arcu eleifend imperdiet eget euismod odio. Cras augue turpis, purus risus, at porta nisi finibus consectetur. Aenean nec ligula egestas, placerat augue et, imperdiet felis. Nunc et ipsum dui. Phasellus varius malesuada sem, a convallis orci ultricies id.'
        },
        {
        title:'Prueba de título 5',
        date: 'publicado el dia : '+ moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
        content:'orem ipsum dolor sit amet, consectetur adipiscing elit Vivamus sed diam mi. Sed venenatis laoreet aliquam. Aliquam tristique velit in placerat convallis. Nunc ac neque eget arcu eleifend imperdiet eget euismod odio. Cras augue turpis, purus risus, at porta nisi finibus consectetur. Aenean nec ligula egestas, placerat augue et, imperdiet felis. Nunc et ipsum dui. Phasellus varius malesuada sem, a convallis orci ultricies id.'
                },
]
posts.forEach((item, index) =>{
        var posts = `

        <article class="posts">
        <h2>${item.title}</h2>
        
        <span class="date">${item.date}</span>
    
        <p>${item.content}                           
        </p>
        <a href="#" class="button-more">Leer más</a>
    </article>    `;

    $("#posts").append(posts);//agregamos los post a nuestro <div> POSTS..en cada iteracón de nuestro forEach
});
}
// add event to change theme in the website.

//Guardar el styles en el localStorage:


var styles = $("#theme"); //es la id de nuestro link con el css de to-green y vamos a mamnipular su color..

$("#to-green").click(()=>{
        toGreen();
        localStorage.setItem("color","green");
});
$("#to-red").click(()=>{
        toRed();  
        localStorage.setItem("color","red");
});
$("#to-blue").click(()=>{
        toBlue();
        localStorage.setItem("color","blue");
});

//localStorage theme refresh
var color_pick = localStorage.getItem("color");
if(color_pick =="blue"){
        toBlue();
}else if(color_pick=="red"){
        toRed();
}else{
        toGreen();
}

function toGreen(){
        styles.attr("href","css/green.css");
}
function toRed(){
        styles.attr("href","css/red.css");
}
function toBlue(){
        styles.attr("href","css/blue.css")
}
//Scrool auitomático arriba de la web.
$(".subir").click(  function(event) {
        event.preventDefault();
    $('html, body').animate({
            scrollTop: 0 },500);
return false;
});   
//guardar en el LocalStorage el nombre del usuario y en el caso de que exista la sesión: Mostrarla.
//Login Falso:
//Enviar el submit:
$("#login form").submit( function(){
        var form_name = $("#name").val();
        //guardamos en el LocalStorage;
        localStorage.setItem("form_name",form_name);
});

var form_name = localStorage.getItem("form_name");
//comprobar si es distinto a null e indefinido.
if (form_name != null && form_name != "undefined" ){
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong> Bienvenido, " + form_name+ " !</strong>");
        about_parrafo.append("<br> <a href='#'id='logout'> Cerrar Sesión </a>" );
        $("#login").hide();
        $("#logout").click ( function (){
                localStorage.clear();
                location.reload();
        });
}
// solo sirve cuando estoy en la página About:
if(window.location.href.indexOf('about') > -1){
                $( "#acordion" ).accordion();
}

//condicionamos el reloj:
if(window.location.href.indexOf('reloj') > -1){
setInterval( function (){
        var reloj = moment().format('hh:mm:ss a');
        $("#reloj").html (reloj);
                        },1000);
}

//Validación de form_contact:
if(window.location.href.indexOf('contact') > -1){
        //UI datepicker para el calendario:
$("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
});
        $.validate({
                lang: 'es',
                errorMessagePosition: 'top',
                scrollTopOnError: true,
              });        
}

});
