const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const controller = require('./controller/cepLookup');

app.use(bodyParser.json());

app.get('/ping', controller.getPing);

// app.get('/cep', controller.getPing);

app.get('/cep/:cep', controller.getCep);



app.listen(3000, () => {
  console.log('aplicação ouvindo porta 3000')
})