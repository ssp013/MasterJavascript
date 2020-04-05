//import {Camiseta} from './camiseta';

class Main{
    constructor(){
        console.log("Aplicacion js cargada");
    }
    getCamiseta(){
        return new Camiseta("Rojo","asdas","asdas","asdas",12);
    }
}
var main = new Main();