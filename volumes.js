class Unit{
    constructor(ratioToTeaspoons){
        this._ratioToTeaspoons = ratioToTeaspoons
    }

    quantityInTeaspoons(quantity){
        return quantity * this._ratioToTeaspoons;
    }
}

const TEASPOON = new Unit(1)
const TABLESPOON = new Unit(3)

module.exports = {TEASPOON, TABLESPOON}