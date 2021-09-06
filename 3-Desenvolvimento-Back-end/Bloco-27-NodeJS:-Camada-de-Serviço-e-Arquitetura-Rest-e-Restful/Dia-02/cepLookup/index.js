const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const controller = require('./controller/cepLookup');

const errorMiddleware = require('./middlewares/error');

app.use(bodyParser.json());

app.get('/ping', controller.getPing);

// app.get('/cep', controller.getPing);

app.get('/cep/:cep', controller.getCep);

app.post('/cep', controller.postCep);

app.use(errorMiddleware);



app.listen(3000, () => {
  console.log('aplicação ouvindo porta 3000')
})