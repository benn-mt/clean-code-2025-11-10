const {Chance} = require("./chance")

describe('Chance...', () => {
    test('Can be compared for equality', () => {
        expect(new Chance(0.5).equals(new Chance(0.5))).toBe(true);
        expect(new Chance(0.6).equals(new Chance(0.5))).toBe(false);
        expect(new Chance(0.5).equals(new Chance(0.6))).toBe(false);
        expect(new Chance(0.1).equals(new Chance(0.9))).toBe(false);
        expect(new Chance(0.75).equals(new Chance(0.75))).toBe(true);
    })

    test('and() will return the chance of both things happening', () => {
        expect(new Chance(0.5).and(new Chance(0.5)).equals(new Chance(0.25))).toBe(true);
        expect(new Chance(1).and(new Chance(0.5)).equals(new Chance(0.5))).toBe(true);
        expect(new Chance(0.5).and(new Chance(1)).equals(new Chance(0.5))).toBe(true);
        expect(new Chance(1).and(new Chance(1)).equals(new Chance(1))).toBe(true);
        expect(new Chance(0).and(new Chance(1)).equals(new Chance(0))).toBe(true);
        expect(new Chance(1).and(new Chance(0)).equals(new Chance(0))).toBe(true);
        expect(new Chance(0.3).and(new Chance(0.7)).equals(new Chance(0.21))).toBe(true);
        expect(new Chance(0.7).and(new Chance(0.3)).equals(new Chance(0.21))).toBe(true);

        //expect(new Chance(0.4).and(new Chance(0.4))).toEqual(new Chance(0.16));
    })
})