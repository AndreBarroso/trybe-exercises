const calcula = require('./calcula.js')

const a = Math.floor(Math.random() * 100 + 1) ;
const b = Math.floor(Math.random() * 100 + 1) ;
const c = Math.floor(Math.random() * 100 + 1) ;

calcula(a, b, 'c')
  .then((result) => console.log(`Resultado ${result}`))
  .catch((err)=> console.log(`Resultado ${err}`));
