const connection = require('./connection');

async function getCep(cep) {
  const [ceps] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]
  )
  if(ceps.length < 1) return null;
  return ceps;
}

async function postCep({cepFormat, logradouro, bairro, localidade, uf}) {
  try{
    return connection.execute(
      'INSERT INTO cep_lookup.ceps(cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)',
      [cepFormat, logradouro, bairro, localidade, uf]
    );
  }catch(e) {
    return(e);
  }
}

module.exports = {
  getCep,
  postCep,
}