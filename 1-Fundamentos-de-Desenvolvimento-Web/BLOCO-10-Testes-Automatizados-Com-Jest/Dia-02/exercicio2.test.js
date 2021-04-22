const getUserName = require('./getUserName');
  describe('getUserName - exercise2 (promisse)', () => {
    describe('Verifica se passa quando adiciona um ID válido', () => {
        it('Retorna name Mark quando coloca o ID 3', () => {
            expect.assertions(1);
            return getUserName(3).then(resp => expect(resp).toBe('Mark'));
        })
        it('Retorna name Paul quando coloca o ID 4', () => {
            expect.assertions(1);
           return getUserName(4).then(resp => expect(resp).toBe('Paul'));
        })
    });
    describe('Verifica se passa quando adiciona um ID inválido', () => {
        it('Retorna { error: User with 5 not found. }', () => {
            expect.assertions(1);
            return getUserName(5)
                .catch(resp => expect(resp).toEqual({ error: 'User with ' + 5 + ' not found.' }));
        })
        it('Retorna { error: User with undefined not found. }', () => {
            expect.assertions(1);
            return getUserName()
                .catch(resp => expect(resp).toEqual({ error: 'User with ' + undefined + ' not found.' }));
        })
    });
  });