const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const obj =  { message: 'pong'};
const messages = [];
const greet = [];


app.get('/ping', (req, res) => {
  res.status(200).json(obj);
});


app.post('/hello', (req, res) => {
  const { name } = req.body;
  messages.push({ "message": `Hello, ${name}!` });
  res.status(200).json({ "message": `Hello, ${name}!` })
})

app.get('/hello', (req, res) => {
  res.status(200).json(greet);
});

app.post('/greeting', (req, res) => {
  const {name, age } = req.body;
  if( age <= 17 ) return res.status(401).json({ "message": "Unauthorized" });
  greet.push({ message: `Hello, ${name}!`, age })
  res.status(200).json(greet);
});

app.get('/greeting', (req, res) => {
  res.status(200).json(greet);
});


app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001');
})