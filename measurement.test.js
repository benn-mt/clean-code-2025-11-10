const {Measurement} = require("./measurement")
const {TEASPOON, TABLESPOON} = require("./volumes")

describe('Measurement...', () => {
    test('Can be compared for equality...', () => {
        expect(new Measurement(1, TEASPOON).equals(new Measurement(1, TEASPOON))).toBe(true)
        expect(new Measurement(1, TEASPOON).equals(new Measurement(3, TEASPOON))).toBe(false)
        expect(new Measurement(3, TEASPOON).equals(new Measurement(1, TEASPOON))).toBe(false)
        expect(new Measurement(1, TABLESPOON).equals(new Measurement(3, TEASPOON))).toBe(true)
        expect(new Measurement(2, TABLESPOON).equals(new Measurement(3, TEASPOON))).toBe(false)
        expect(new Measurement(2, TABLESPOON).equals(new Measurement(6, TEASPOON))).toBe(true)
        expect(new Measurement(3, TEASPOON).equals(new Measurement(1, TABLESPOON))).toBe(true)
    })
})