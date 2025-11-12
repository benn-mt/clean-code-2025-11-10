const {Measurement} = require("./measurement")
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON} = require("./volumes")
const {INCH, FOOT, YARD, FURLONG, MILE} = require("./lengths")

describe('Measurement...', () => {
    test('Can be compared for equality...', () => {
        expect(new Measurement(1, TEASPOON).equals(new Measurement(1, TEASPOON))).toBe(true)
        expect(new Measurement(1, TEASPOON).equals(new Measurement(3, TEASPOON))).toBe(false)
        expect(new Measurement(3, TEASPOON).equals(new Measurement(1, TEASPOON))).toBe(false)
        expect(new Measurement(1, TABLESPOON).equals(new Measurement(3, TEASPOON))).toBe(true)
        expect(new Measurement(2, TABLESPOON).equals(new Measurement(3, TEASPOON))).toBe(false)
        expect(new Measurement(2, TABLESPOON).equals(new Measurement(6, TEASPOON))).toBe(true)
        expect(new Measurement(3, TEASPOON).equals(new Measurement(1, TABLESPOON))).toBe(true)

        expect(new Measurement(1, OUNCE).equals(new Measurement(1, OUNCE))).toBe(true)
        expect(new Measurement(1, OUNCE).equals(new Measurement(6, TEASPOON))).toBe(true)
        expect(new Measurement(6, TEASPOON).equals(new Measurement(1, OUNCE))).toBe(true)

        expect(new Measurement(1, INCH).equals(new Measurement(1, TEASPOON))).toBe(false)
    })
})