const connection = require('./connection');

async function getCep(cep) {
  const [ceps] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]
  )
  if(ceps.length < 1) return null;
  return ceps;
}

module.exports = {
  getCep,
}