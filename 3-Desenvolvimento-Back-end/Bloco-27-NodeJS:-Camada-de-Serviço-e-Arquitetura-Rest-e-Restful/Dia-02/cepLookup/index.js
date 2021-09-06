const express = require('express');

const app = express();

const cepLookup = require('./controller/cepLookup');

app.get('/ping', cepLookup.getPing);

app.listen(3000, () => {
  console.log('aplicação ouvindo porta 3000')
})