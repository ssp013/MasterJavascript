var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//DECORADOR:
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta Estampada con el logo de  : " + logo);
        };
    };
}
//Aplico del decorador a la clase, nunca se cierra con ;
//Al fianl lo que hace un decorador, es adicionar una funcionalidad Extra a cualquier clase y darle unos meta-datos
//o caracteristicas diferentes, cada vez que yo le aplico el decorador:
var Camiseta = /** @class */ (function () {
    //Métodos(funciones o acciones que puede ejecutar el objeto)
    //constructor:
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Adidas')
        //Clase (Molde del objeto. En donde vamos a crear un objeto con caracteristicas similares) CamelCase para la Class
    ], Camiseta);
    return Camiseta;
}());
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
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("fas", "asd", "asda", "asda", 12);
console.log(camiseta);
camiseta.estampacion();
var sudadera_nike = new Sudadera("Rojo", "Manga Larga", "Nike", "L", 12);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Negrooo");
console.log(sudadera_nike);
