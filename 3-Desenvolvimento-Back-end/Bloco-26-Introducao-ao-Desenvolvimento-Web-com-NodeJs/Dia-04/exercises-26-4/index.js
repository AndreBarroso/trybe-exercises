const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const obj =  { message: 'pong'};

app.get('/ping', (req, res) => {
  res.status(200).json(obj);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001');
})