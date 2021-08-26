function mostraSinal(numero) {
  if(numero > 0) return 'positivo';
  if(numero < 0 ) return 'negativo';
  return 'neutro'

};

console.log(mostraSinal(-1))

module.exports = mostraSinal;