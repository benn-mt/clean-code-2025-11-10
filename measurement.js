const {TEASPOON, TABLESPOON} = require("./volumes")

class Measurement{
    constructor(quantity, unit){
        this._quantity = quantity;
        this._unit = unit;
    }

    equals(other){
        return this._quantityInBaseUnit() === other._quantityInBaseUnit()
                && this._unit.isCompatibleWith(other._unit);
    }

    _quantityInBaseUnit(){
        return this._unit.quantityInBaseUnit(this._quantity);
    }
}

module.exports = {Measurement};

