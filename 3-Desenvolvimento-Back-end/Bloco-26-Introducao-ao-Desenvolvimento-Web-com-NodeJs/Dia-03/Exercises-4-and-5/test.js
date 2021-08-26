const fs = require('fs').promises;
const sinon = require('sinon');
const { expect } = require('chai');
const writeFunction = require('./writeFunction');

const OK = 'ok';

describe('Executa a função a "writeFunction"', ()=>{

 
  describe('se escreceu corretamente', () => {
    before(() => {
      sinon.stub(fs, 'writeFile').returns(OK);
    });
  
    after(() => {
      fs.writeFile.restore();
    });
    it('O valor retornado deve ser uma string', async ()=>{
      const resposta = await writeFunction('meuArquivo.txt', 'Meu texto');
      expect(resposta).to.be.a('string');
    });
    it('Retorna o valor "ok"', async ()=>{
      const resposta = await writeFunction('meuArquivo.txt', 'Meu texto');
      expect(resposta).to.be.equals('ok');
    });
  });
});