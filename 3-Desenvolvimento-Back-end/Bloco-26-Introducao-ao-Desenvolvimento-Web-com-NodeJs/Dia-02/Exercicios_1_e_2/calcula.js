function calcula(a, b, c) {
  return new Promise((resolve, reject) => {
    if(typeof a !==  'number' || typeof b !==  'number' || typeof c !==  'number'  ) {
      return reject ('Informe apenas números')
    } else if ((a + b) * c < 50) {
      return reject ('Valor muito baixo');
    };
    resolve (`${(a + b) * c}`)
  })
}

module.exports = calcula;
