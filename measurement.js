const {TEASPOON, TABLESPOON} = require("./volumes")

class Measurement{
    constructor(quantity, unit){
        this._quantity = quantity;
        this._unit = unit;
    }

    equals(other){
        return this.quantityInTeaspoons() == other.quantityInTeaspoons()
                && this._unit.hasSameBaseUnit(other._unit);
    }

    quantityInTeaspoons(){
        return this._unit.quantityInTeaspoons(this._quantity);
    }
}

module.exports = {Measurement};

