const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        const number = 15;
        expect(myFizzBuzz(number)).toBe('fizzbuzz');
    });
    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        const number = 3;
        expect(myFizzBuzz(number)).toBe('fizz');
    });
    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        const number = 5;
        expect(myFizzBuzz(number)).toBe('buzz');
    });
    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        const number = 7;
        expect(myFizzBuzz(number)).toBe(number);
    });
    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        let number;
        if(typeof number !== 'number')
        expect(myFizzBuzz(number)).toBe(false);
    });
});