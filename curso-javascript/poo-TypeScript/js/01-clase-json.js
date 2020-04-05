
/*Crearemos una clase bicicleta */
var bicicleta = {
    color: 'rojo',
    modelo: ' bmx',
    frenos:'De discos',
    velocidadMaxima: '60km',
    cambiaColor: function (nuevo_color){
        this.color = nuevo_color;
        console.log(this);
    }
};
console.log(bicicleta);
/* secciones , en donde podría organizar la información de esta forma */
/*propiedad cambir color */
bicicleta.cambiaColor("Azul");

/*
Esta manera de organizar el código para mi, la veo muy buena, cuando no podemos utilizar una POO más potente,
o más grande.
Para organizar nuestras variables de esta manera, lo veo muy bueno.
Se pueden seguir creando metodos, que hagan varios tipos de acciones en un objeto JSON.


- podría organizar mi código eje: funciones para seguir o dejar de seguir, se refiere a organizar todo en la misma entidad.
O en la mismo fichero y que todo este organizado en un objeto de este tipo.
De forma que la entidad sería el seguimiento, donde todos esos métodos o caracteristicas...son métodos que estan
relacionados  con el seguimiento, que hacen una acción con esa funcionalidad, 
Luego tener diferentes propiedades, que serían las variables  y las funciones o métodos de la clase.
- al final, que tenemos una clase definida,puedo llamar esta clase de cualquier otro sitio.



*/