const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('myRemoveWithoutCopy', () => {
    it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
        const myArray = [1, 2, 3, 4];
        expect(myRemoveWithoutCopy(myArray, 3)).toEqual([1, 2, 4]);
    });
    it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        const myArray = [1, 2, 3, 4];
        expect(myRemoveWithoutCopy(myArray, 3)).not.toEqual([1, 2, 3 ,4]);
    });
    it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
        const myArray = [1, 2, 3, 4];
        expect(myRemoveWithoutCopy(myArray, 3)).toEqual(myArray);
    });
    it('erifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
        const myArray = [1, 2, 3, 4];
        expect(myRemoveWithoutCopy(myArray, 5)).toEqual([1, 2, 3, 4]);
    });
});