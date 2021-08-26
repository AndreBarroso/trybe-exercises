const fs = require('fs').promises;
const sinon = require('sinon');
const { expect } = require('chai');
const writeFunction = require('./writeFunction');

const OK = 'ok';
const FAIL = 'fail';

describe('Executa a função a "writeFunction"', ()=>{

  before(() => {
    sinon.stub(fs, 'writeFile').returns(OK);
  });

  after(() => {
    fs.writeFile.restore();
  });
  describe('se escreceu corretamente', () => {
    it('Retorna "ok"', ()=>{
      const resposta = writeFunction('meuArquivo.txt', 'Meu texto');
      expect(resposta).to.be.equals('ok');
    });
  });


  before(() => {
    sinon.stub(fs, 'writeFile')
      .throws(new Error('Erro na escrita'));
  });

  after(() => {
    fs.writeFile.restore();
  });
  describe('se não escreceu corretamente', () => {
    it('Retorna "fail"', ()=>{
      const resposta = writeFunction('meuArquivo.txt', 'Meu texto');
      expect(resposta).to.be.equals(FAIL);
    });
  });
});