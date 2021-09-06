const model = require('../model/cepLookup')



async function getCep(cep) {
  const badRequest =  {status: 400, error: { code: "invalidData", "message": "CEP inválido" } }
  const notFound = { status: 404, error: { code: "notFound", "message": "CEP não encontrado" } }
  const regex = /\d{5}-?\d{3}/
  if(cep === undefined || !regex.test(cep)) return badRequest;
  const modelRequest = await model.getCep(cep);
  if(!modelRequest) return notFound;
  return modelRequest;
}

module.exports = {
  getCep,
}