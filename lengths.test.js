const {Measurement} = require("./measurement")
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON} = require("./volumes")
const {INCH, FOOT, YARD, FURLONG, MILE} = require("./lengths")

describe('Distances...', () => {
    test('Basic equalities...', () => {
        expect(new Measurement(1, FOOT).equals(new Measurement(12, INCH))).toBe(true)
        expect(new Measurement(3, FOOT).equals(new Measurement(1, YARD))).toBe(true)
        expect(new Measurement(220, YARD).equals(new Measurement(1, FURLONG))).toBe(true)
        expect(new Measurement(8, FURLONG).equals(new Measurement(1, MILE))).toBe(true)
    })
})