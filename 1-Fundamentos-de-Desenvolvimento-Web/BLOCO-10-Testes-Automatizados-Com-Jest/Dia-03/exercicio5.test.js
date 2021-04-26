const stringfunctions = require('./stringfunctions');

describe('stringFuncitons: Exercicio 5', () => {
    it ('teste da toUpperString usando spyOn', () => {
        const first = jest.spyOn(stringfunctions, 'toUpperString');
        first.mockImplementation((str) => str.toLowerCase());
        first('ANDRE');
        expect(first).toHaveBeenCalled();
        expect(first('ANDRE')).toBe('andre');

        toUpperString.mockRestore();
        //first('andre');
        toUpperString('andre')
        //expect(first).toHaveBeenCalled();
        expect(first('andre')).toBe('ANDRE');
    });
});

