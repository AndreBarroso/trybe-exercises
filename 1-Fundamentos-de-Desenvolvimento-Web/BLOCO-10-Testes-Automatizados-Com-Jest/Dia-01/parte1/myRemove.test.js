const myRemove  = require('./myRemove');

describe('myRemove', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        const myArray = [1, 2, 3, 4];
        expect(myRemove(myArray, 3)).not.toEqual(myArray);
    });
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        const myArray = [1, 2, 3, 4];
        expect(myRemove(myArray, 5)).toEqual([1, 2, 3, 4]);
    });

});
