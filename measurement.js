class Measurement{
    _TBSP_TO_TSP_RATIO = 3;

    constructor(quantity, unit){
        this._quantity = quantity;
        this._unit = unit;
    }

    equals(other){
        if (this._unit === "TABLESPOON") {
            return this._quantity * this._TBSP_TO_TSP_RATIO == other._quantity;
        }
        if (other._unit === "TABLESPOON") {
            return this._quantity / this._TBSP_TO_TSP_RATIO == other._quantity;
        }
        return this._quantity === other._quantity;
    }
}

module.exports = {Measurement}