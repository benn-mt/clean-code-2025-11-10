class Unit{
    constructor(ratio, ratioUnit){
        if (ratioUnit){
            this._baseUnit = ratioUnit._baseUnit
            this._ratioToTeaspoons = ratio * ratioUnit._ratioToTeaspoons
        }
        else {
            this._baseUnit = this
            this._ratioToTeaspoons = 1
        }
    }

    quantityInTeaspoons(quantity){
        return quantity * this._ratioToTeaspoons;
    }

    hasSameBaseUnit(other){
        return this._baseUnit === other._baseUnit;
    }
}


const TEASPOON = new Unit()
const TABLESPOON = new Unit(3, TEASPOON)
const OUNCE = new Unit(2, TABLESPOON)
const CUP = new Unit(8, OUNCE)
const PINT = new Unit(2, CUP)
const QUART = new Unit(2, PINT)
const MILLILITRE = new Unit(0.203, TEASPOON)

const INCH = new Unit()
const FOOT = new Unit(12, INCH)
const YARD = new Unit(3, FOOT)
const FURLONG = new Unit(220, YARD)
const MILE = new Unit(8, FURLONG)

module.exports = {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, FOOT, INCH, YARD, FURLONG, MILE}