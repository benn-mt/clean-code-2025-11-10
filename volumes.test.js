const {Measurement} = require("./measurement")
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON} = require("./volumes")
const {INCH, FOOT, YARD, FURLONG, MILE} = require("./lengths")

describe('Volumes...', () => {
    test('Basic equalities...', () => {
        expect(new Measurement(1, TABLESPOON).equals(new Measurement(3, TEASPOON))).toBe(true)
        expect(new Measurement(1, OUNCE).equals(new Measurement(2, TABLESPOON))).toBe(true)
        expect(new Measurement(1, CUP).equals(new Measurement(8, OUNCE))).toBe(true)
        expect(new Measurement(1, PINT).equals(new Measurement(2, CUP))).toBe(true)
        expect(new Measurement(1, QUART).equals(new Measurement(2, PINT))).toBe(true)
        expect(new Measurement(1, GALLON).equals(new Measurement(4, QUART))).toBe(true)
    })
})