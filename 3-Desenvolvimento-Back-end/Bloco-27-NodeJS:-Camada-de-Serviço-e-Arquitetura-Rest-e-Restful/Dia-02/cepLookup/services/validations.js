const Joi = require('joi');

function formatCep(cep) {
  const regex = /\d{5}-?\d{3}/;
  return regex.test(cep)
}

function bodyValidations(body) {
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: Joi.string().not().empty(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required().length(2),
  }).validate(body);

  if(error) return error;
  return false;
} 

module.exports = {formatCep, bodyValidations};
