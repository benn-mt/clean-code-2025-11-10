const {Measurement} = require("./measurement")
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, INCH, FOOT, YARD, FURLONG, MILE} = require("./volumes")

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

    test('Volumes...', () => {
        expect(new Measurement(1, TABLESPOON).equals(new Measurement(3, TEASPOON))).toBe(true)
        expect(new Measurement(1, OUNCE).equals(new Measurement(2, TABLESPOON))).toBe(true)
        expect(new Measurement(1, CUP).equals(new Measurement(8, OUNCE))).toBe(true)
        expect(new Measurement(1, PINT).equals(new Measurement(2, CUP))).toBe(true)
    })

    test('Distances...', () => {
        expect(new Measurement(1, FOOT).equals(new Measurement(12, INCH))).toBe(true)
        expect(new Measurement(3, FOOT).equals(new Measurement(1, YARD))).toBe(true)
        expect(new Measurement(220, YARD).equals(new Measurement(1, FURLONG))).toBe(true)
        expect(new Measurement(8, FURLONG).equals(new Measurement(1, MILE))).toBe(true)
    })
})