const fs = require('fs').promises;

async function readFile(arquivo) {
  const leitura = await fs.readFile(arquivo, 'utf8').catch(() => 'Erro na leitura');
  const leituraPARSE = await JSON.parse(leitura)
  return leituraPARSE;
}

module.exports = readFile;
