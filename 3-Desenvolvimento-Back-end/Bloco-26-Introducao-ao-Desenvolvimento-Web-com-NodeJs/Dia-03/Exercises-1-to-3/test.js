const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const signalNumber = require('./mostraSinal.js')

describe('Retornar sinal do número', ()=> {
  describe('Retorna "positivo" se o número for maior que zero', () => {
    const sinal = signalNumber(1);
    it('Verifica se o retorno é uma string',()=> {
      expect(sinal).to.be.a('string');
    });
    it('Retorno: "positivo"',()=> {
      expect(sinal).to.be.equal('positivo');
    });
  });
  describe('Retorna "negativo" se o número for menor que zero', () => {
    const sinal = signalNumber(-1);
    it('Verifica se o retorno é uma string',()=> {
      expect(sinal).to.be.a('string');
    });
    it('Retorno: "negativo"',()=> {
      expect(sinal).to.be.equal('negativo');
    });
  });
  describe('Retorna "neutro" se o número for zero', () => {
    const sinal = signalNumber(0);
    it('Verifica se o retorno é uma string',()=> {
      expect(sinal).to.be.a('string');
    });
    it('Retorno: "neutro"',()=> {
      expect(sinal).to.be.equal('neutro');
    });
  });
  describe('Verifica se o valor inserido é número', () => {
    const sinal = signalNumber('a');
    it('Verifica se o retorno é uma string',()=> {
      expect(sinal).to.be.a('string');
    });
    it('Retorno: "o valor deve ser um número"',()=> {
      expect(sinal).to.be.equal('o valor deve ser um número');
    });
  });
});