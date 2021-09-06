const services = require('../services/cepLookup');
const servicesValidations = require('../services/validations')

function getPing (_req, res) {
  res.status(201).json({ message: "pong!" });
}

async function getCep(req, res) {
  const { cep } = req.params;
  const {status, error} = await services.getCep(cep);
  if(error) {
    return res.status(status).json(error); 
  }
  return res.status(200).json(services.getCep(cep));
}


async function postCep(req, res, next) {
  const { cep, logradouro, bairro, localidade, uf} = req.body;
  const error = servicesValidations.bodyValidations({cep, logradouro, bairro, localidade, uf});
  if(error) return next(error); 
}

module.exports = {
  getPing,
  getCep,
  postCep,
}

