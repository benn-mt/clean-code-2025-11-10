const {Chance} = require("./chance")

describe('Chance...', () => {
    test('Can be compared for equality', () => {
        expect(new Chance(0.5).equals(new Chance(0.5))).toBe(true);
        expect(new Chance(0.6).equals(new Chance(0.5))).toBe(false);
        expect(new Chance(0.5).equals(new Chance(0.6))).toBe(false);
        expect(new Chance(0.1).equals(new Chance(0.9))).toBe(false);
        expect(new Chance(0.75).equals(new Chance(0.75))).toBe(true);
    })
})