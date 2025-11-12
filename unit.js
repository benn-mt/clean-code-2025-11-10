class Unit {
    constructor(ratio, ratioUnit) {
        if (ratioUnit) {
            this._baseUnit = ratioUnit._baseUnit;
            this._ratioToBaseUnit = ratio * ratioUnit._ratioToBaseUnit;
        }
        else {
            this._baseUnit = this;
            this._ratioToBaseUnit = 1;
        }
    }

    quantityInBaseUnit(quantity) {
        return quantity * this._ratioToBaseUnit;
    }

    isCompatibleWith(other) {
        return this._baseUnit === other._baseUnit;
    }
}
exports.Unit = Unit;
