const model = require('../model/cepLookup')
const { formatCep, bodyValidations } = require('./validations');
const rescue = require('express-rescue');




async function getCep(cep) {
  const badRequest =  {status: 400, error: { code: "invalidData", "message": "CEP inválido" } }
  const notFound = { status: 404, error: { code: "notFound", "message": "CEP não encontrado" } }
  if(cep === undefined || !formatCep(cep)) return badRequest;
  const modelRequest = await model.getCep(cep);
  if(!modelRequest) return notFound;
  return modelRequest;
}


function postCep(body) {
  const error = bodyValidations(body);
  if(error) return (error);
}

module.exports = {
  getCep,
  postCep,
}