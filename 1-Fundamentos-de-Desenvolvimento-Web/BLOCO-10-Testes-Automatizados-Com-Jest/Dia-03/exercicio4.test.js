const stringfunctions = require('./stringfunctions');

jest.mock('./stringfunctions');

let toUpperString = stringfunctions.toUpperString;
let firstLetter = stringfunctions.firstLetter;
let concatString = stringfunctions.concatString;

describe('stringFuncitons: Exercicio 4', () => {
    it('toUpperString', () => {
        toUpperString.mockImplementation((str) => str.toLowerCase())
        toUpperString('ANDRE');
        expect(toUpperString).toHaveBeenCalled();
        expect(toUpperString('ANDRE')).toBe('andre');
     });
     it('firstLetter', () => {
        firstLetter.mockImplementation((str) => str[str.length - 1])
        firstLetter('ANDRE');
        expect(firstLetter).toHaveBeenCalled();
        expect(firstLetter('ANDRE')).toBe('E');
     });
     it('concatString', () => {
        concatString.mockImplementation((a, b, c) => a.concat(b).concat(c));
        concatString('a', 'b', 'c');
        expect(concatString).toHaveBeenCalled();
        expect(concatString).toHaveBeenCalledTimes(1);
        expect(concatString('e', 'f', 'g')).toBe('efg');
        expect(concatString).toHaveBeenCalledWith('e', 'f', 'g');
     })
});




