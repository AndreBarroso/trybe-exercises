
function getCep(cep) {
  const regex = /\d{5}-?\d{3}/
  if(cep === undefined || !regex.test(cep)) return false;
  return true;
}

module.exports = {
  getCep,
}