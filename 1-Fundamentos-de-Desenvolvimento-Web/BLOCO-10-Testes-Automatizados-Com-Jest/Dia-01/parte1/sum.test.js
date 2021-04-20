const { test, expect } = require('@jest/globals');
const sum  = require('./sum');

describe('Função sum', () => {
    test('Soma de 2 + 2 = 4', () => expect(sum(2, 2)).toBe(4));
    test('Soma de 0 + 0 = 0', () => expect(sum(0, 0)).toBe(0));
    test('Retorna error se receber uma string', () => 
        expect(() => {sum(1, '1')}).toThrow()
    );
    test('Retorna error com a (frase parameters must be numbers) se receber uma string', () => 
        expect(() => {sum(1, '1')}).toThrowError(new Error('parameters must be numbers'))
    );
    
});