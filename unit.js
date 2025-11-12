class Unit {
    constructor(ratio, ratioUnit) {
        if (ratioUnit) {
            this._baseUnit = ratioUnit._baseUnit;
            this._ratioToTeaspoons = ratio * ratioUnit._ratioToTeaspoons;
        }
        else {
            this._baseUnit = this;
            this._ratioToTeaspoons = 1;
        }
    }

    quantityInTeaspoons(quantity) {
        return quantity * this._ratioToTeaspoons;
    }

    hasSameBaseUnit(other) {
        return this._baseUnit === other._baseUnit;
    }
}
exports.Unit = Unit;
