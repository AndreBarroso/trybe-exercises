const sum  = require('./sum');

describe('Função sum', () => {
    test('Soma de 2 + 2 = 4', () => expect(sum(2,2)).toBe(4));
});