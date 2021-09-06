const services = require('../services/cepLookup');

function getPing (_req, res) {
  res.status(201).json({ message: "pong!" });
}

function getCep(req, res) {
  console.log('entrou')
 
  const { cep } = req.params;
  console.log(cep)
  if(!services.getCep(cep)) {
    return res.status(400).json( { "error": { "code": "invalidData", "message": "CEP inválido" } })
  }
}

module.exports = {
  getPing,
  getCep
}