class Unit{
    constructor(ratio, ratioUnit){
        if (ratioUnit){
            this._ratioToTeaspoons = ratio * ratioUnit._ratioToTeaspoons
        }
        else {
            this._ratioToTeaspoons = 1
        }
    }

    quantityInTeaspoons(quantity){
        return quantity * this._ratioToTeaspoons;
    }
}


const TEASPOON = new Unit()
const TABLESPOON = new Unit(3, TEASPOON)
const OUNCE = new Unit(2, TABLESPOON)
const CUP = new Unit(8, OUNCE)
const PINT = new Unit(2, CUP)
const QUART = new Unit(2, PINT)
const MILLILITRE = new Unit(0.203, TEASPOON)

module.exports = {TEASPOON, TABLESPOON, OUNCE, CUP, PINT}