//INTERFAZ:
interface CamisetaBase {
   setColor (color);
   getColor();
}
//DECORADOR:
function estampar (logo:string){
   return function(target: Function){
      target.prototype.estampacion = function():void{
               console.log("Camiseta Estampada con el logo de  : "+logo);
      }
   }
}
 //Aplico del decorador a la clase, nunca se cierra con ;
 //Al fianl lo que hace un decorador, es adicionar una funcionalidad Extra a cualquier clase y darle unos meta-datos
 //o caracteristicas diferentes, cada vez que yo le aplico el decorador:
 @estampar('Adidas')
 
 //Clase (Molde del objeto. En donde vamos a crear un objeto con caracteristicas similares) CamelCase para la Class
class Camiseta implements CamisetaBase{
 //propiedades (caracteristicas del objeto )
    private color: string ;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
 //Métodos(funciones o acciones que puede ejecutar el objeto)
  //constructor:
  constructor(color, modelo, marca, talla, precio){
   this.color =color;
   this.modelo = modelo;
   this.marca = marca;
   this.talla = talla;
   this.precio = precio;
}
 public setColor(color){
    this.color= color;

 }
 public getColor(){
     return this. color;
 }
 //Pk ponemos "public" en todas las propiedades, esto significa que cuando yo instancie este objeto,
 // o sea haga un "new camiseta" y la meta dentro de una variable,  voy a tener disponible todas sus propiedades
 //para poder modificarla , podré cambiar todo esos valores.
}
//creamos nuestro objeto camiseta-->
//var camiseta = new Camiseta("Rojo","manga laga", "nike", "L", 14);
   //camiseta.setColor("rojo");
//console.log(camiseta);

/* 
camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;
*/


//var playera = new Camiseta();
//playera.setColor("Aul");

/*playera.color = "Azul";
playera.modelo =" Maga corta";
playera.marca = "Adidas";
playera.talla ="S";
playera.precio = 20;
*/


//console.log(camiseta.getColor() , playera);
/*
Creo Objetos, en donde mi molde, es mi clase!.
Si las propiedades fueran Public, Private o :
- Public: podemos acceder a las propiedades y métodos, desde cualquier lugar.
        Desde clases que la heredan y desde otras clase.
- Protected: se puede acceder a las propiedades o métodos, desde la "Clase que lo define"
         Desde cualquier otra "clase" que herede esa misma "Clase".
- Private: Significa que las propiedades o métodos, solo son accesibles desde la "clase" que los define
            es decir justo desde la clase!!! se pueden definir objetos.
            - si las propiedades son "privadas", debemos crear un "método" para que el objeto
            pueda interactuar con esas propiedaes.


*/
//CREAMOS UNA CLASE HIJAy vamos a heredar todo lo que tienen la CLASE PADRE
class Sudadera extends Camiseta{
   public capucha : boolean ;

   setCapucha(capucha:boolean){
      this.capucha = capucha;
   }
   getCapucha():boolean{
      return this.capucha;
   }
}
var camiseta = new Camiseta("fas","asd","asda","asda",12);
console.log(camiseta);
camiseta.estampacion();


var sudadera_nike = new Sudadera("Rojo", "Manga Larga","Nike","L",12);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Negrooo");
console.log(sudadera_nike);