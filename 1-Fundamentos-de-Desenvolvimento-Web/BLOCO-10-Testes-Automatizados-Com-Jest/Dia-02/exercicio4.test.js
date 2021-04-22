const { getRepos } = require('./getRepos');

describe('getRepos - Exercicio 4', () => {
    it(`Verificase tem sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator`, async () => {
            const url = 'https://api.github.com/orgs/tryber/repos';
            const repositorio1 = 'sd-01-week4-5-project-todo-list';
            const repositorio2 = 'sd-01-week4-5-project-meme-generator';
            const verify = await getRepos(url);
            const test = verify.some(element => element === repositorio1 );
            expect(test).toBe(true);
    });
});