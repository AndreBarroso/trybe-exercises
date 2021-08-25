const calcula = require('./calcula.js')

const a = Math.floor(Math.random() * 100 + 1) ;
const b = Math.floor(Math.random() * 100 + 1) ;
const c = Math.floor(Math.random() * 100 + 1) ;

async function main(a, b, c) {
  try {
    const calc = await calcula(a, b, c);
    return console.log(calc);
  } catch (err){
    return console.log(err);
  }
}

main(a, b, 'c');