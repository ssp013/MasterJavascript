//import {Camiseta} from './camiseta';
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion js cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new Camiseta("Rojo", "asdas", "asdas", "asdas", 12);
    };
    return Main;
}());
var main = new Main();
