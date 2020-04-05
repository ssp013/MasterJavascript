'use strict'

//BLUCLE WHILE
/*puedo hacer un bucle indefnidido, va a cumnplir de una doncicion, cuando se cumple esa condicion sale!.*/

var year = 2018;

while(year != 1991){
    //ejecutan esto!
    console.log("Estamos en el año "+ year);
    if(year == 2000){ // cuando year llega a 2000, CORTA la ejecución del bucle!!
        break;
    }
    year --; 
    // aplicamos un operador de incremento, para ir sumando un numero mas incrementandolo, cuando llege al 2051 no llege al bucle!
};
 
// do while
var years = 30;
do{
    //alert("Solo cuando sea diferente a 20");
    years-- ;
}while(years > 25)
// como year es 25 ya no se seguiria ejecutando!!