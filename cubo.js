//cubo.js

'use strict';

class Cubo{
    constructor(ladoA, ladoB, ladoC){
        this.ladoA = this.esNumero(ladoA);
        this.ladoB = this.esNumero(ladoB);
        this.ladoC = this.esNumero(ladoC);
    }
    /*constructor(lado){
        let tmp = this.esNumero(lado);
        this.ladoA = tmp;
        this.ladoB = tmp;
        this.ladoC = tmp;
    }*/
    esNumero(str){
        if(typeof str =="number"){
            return parseFloat(str);
        }
        else{
            return 0;
        }
    }
    volumen(){
        return this.ladoA * this.ladoB * this.ladoC;
    }
 
}

module.exports = {
    Cubo
}
