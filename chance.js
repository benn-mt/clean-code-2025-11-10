class Chance{
    constructor(likelihood){
        this._likelihood = likelihood
    }

    equals(other){
        return this._likelihood == other._likelihood;
    }

    and(other){
        return new Chance(this._likelihood * other._likelihood)
    }
}

module.exports = {Chance}