const {Chance} = require("./chance")

describe('Chance...', () => {
    test('Can be compared for equality', () => {
        expect(new Chance(0.5).equals(new Chance(0.5))).toBe(true);
    })
})