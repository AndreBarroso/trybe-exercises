const getUserName = require('./getUserName');

describe('Testes getUserName usando async await', () => {
    describe('Quando o id existe', () =>{
        it('Se o ID for 3, o retorno deve ser Mark', async () => {
            expect.assertions(1);
            const data = await getUserName(3);
            expect(data).toBe('Mark');
        })
    });

    describe('Quando o id não existe', () =>{
        it('Se o ID for 1, { error: User with 1 not found.}', async () => {
            expect.assertions(1);
            try {
                await(getUserName(1))
            } catch (error) {
                expect(error).toEqual({ error: 'User with ' + 1 + ' not found.' });
            }
        })
    });
});