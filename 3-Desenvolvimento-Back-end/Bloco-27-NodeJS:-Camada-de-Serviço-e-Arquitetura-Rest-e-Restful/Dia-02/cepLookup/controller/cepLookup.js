const services = require('../services/cepLookup');

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

module.exports = {
  getPing,
  getCep
}