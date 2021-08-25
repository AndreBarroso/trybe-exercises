function valida(a, b, c) {
  return new Promise((resolve, reject) => {
    if(typeof a !==  'number' || typeof b !==  'number' || typeof c !==  'number'  ) {
      return reject ('Informe apenas números')
    } else if ((a + b) * c < 50) {
      return reject ('Valor muito baixo');
    };
    resolve (`${(a + b) * c}`)
  })
}

valida(1,1,1)
  .then((result) => console.log(`Resultado: ${result}`))
  .catch((err)=> console.log(`Resultado: ${err}`));

valida(30,30,50)
  .then((result) => console.log(`Resultado: ${result}`))
  .catch((err)=> console.log(`Resultado: ${err}`));

  valida(1,1,'x')
  .then((result) => console.log(`Resultado: ${result}`))
  .catch((err)=> console.log(`Resultado: ${err}`));
