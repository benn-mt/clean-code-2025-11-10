class Chance{
    constructor(likelihood){
        this._likelihood = likelihood
    }

    equals(other){
        return this._likelihood == other._likelihood;
    }
}

module.exports = {Chance}