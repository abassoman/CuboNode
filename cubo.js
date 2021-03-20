class Cubo{
    constructor( ladoA, ladoB, ladoC){
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
    volumen(){
        return this.ladoA * this.ladoB * this.ladoC;
    }
}

module.exports = {
    Cubo
}