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

    test('of related units can be added together...', () => {
        expect(new Measurement(1, TEASPOON).add(new Measurement(1, TEASPOON)).equals(new Measurement(2, TEASPOON))).toBe(true)
        expect(new Measurement(1, INCH).add(new Measurement(1, INCH)).equals(new Measurement(2, INCH))).toBe(true)
        expect(new Measurement(3, FOOT).add(new Measurement(3, INCH)).equals(new Measurement(39, INCH))).toBe(true)
    })
})