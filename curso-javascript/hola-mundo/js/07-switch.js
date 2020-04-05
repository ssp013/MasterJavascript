/*          SWITCH
En el caso de que uno de los casos sea positivo, se ejecuta eso!
*/
var edad = 25;
var imprime = "";

 //ponemos la variable
switch(edad){
    case 18:
        imprime="Eres mayor de edad";
    break;
    case 25:
        imprime=" Ya eres un adulto";
    break;
    case 40:
        imprime="Crisis de los 40";
    break;
    case 75:
        imprime="Eres un anciano";
    break;
    default:
        imprime = " tu edad es neutra";
    break;
}
console.log(imprime);