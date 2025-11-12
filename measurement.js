const {TEASPOON, TABLESPOON} = require("./volumes")

class Measurement{
    _TBSP_TO_TSP_RATIO = 3;

    constructor(quantity, theunit){
        this._quantity = quantity;
        this._unit = theunit;
    }

    equals(other){
        if (this._unit === TABLESPOON) {
             return this._quantity * this._TBSP_TO_TSP_RATIO == other._quantity;
        }
        if (other._unit == TABLESPOON) {
            return this._quantity / this._TBSP_TO_TSP_RATIO == other._quantity;
        }
        return this._quantity == other._quantity;
    }
}

module.exports = {Measurement};

