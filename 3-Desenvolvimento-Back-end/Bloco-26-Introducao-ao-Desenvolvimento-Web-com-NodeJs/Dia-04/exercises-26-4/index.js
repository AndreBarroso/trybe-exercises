const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const obj =  { message: 'pong'};
const messages = [];

app.get('/ping', (req, res) => {
  res.status(200).json(obj);
});


app.post('/hello', (req, res) => {
  const { name } = req.body;
  messages.push({ "message": `Hello, ${name}!` });
  res.status(200).json({ "message": `Hello, ${name}!` })
})


app.get('/hello', (req, res) => {
  res.status(200).json(messages);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001');
})