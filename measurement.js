const {TEASPOON, TABLESPOON} = require("./volumes")

class Measurement{
    constructor(quantity, unit){
        this._quantity = quantity;
        this._unit = unit;
    }

    equals(other){
        return this.quantityInTeaspoons() == other.quantityInTeaspoons();
    }

    quantityInTeaspoons(){
        return this._unit.quantityInTeaspoons(this._quantity);
    }
}

module.exports = {Measurement};

