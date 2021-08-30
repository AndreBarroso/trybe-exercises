const express = require('express');
const bodyParser = require('body-parser');
const readFile = require('./readFunction.js')
const writeFile = require('./writeFunction.js')

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

app.get('/simpsons', async (req, res) => {
  const read = await readFile('simpsons.json')
    .catch(()=> res.status(500).send('Internal Server Error'));
  res.status(200).json(read);
})

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const ArrayRead = await readFile('simpsons.json')
    .catch(()=> res.status(500).send('Internal Server Error'));
  element = ArrayRead.find((e)=> parseInt(e.id)===parseInt(id));
  return res.status(200).send(element);
})

app.post('/simpsons/:id', async (req, res) => {
  const { id, name } = req.body;
  const ArrayRead = await readFile('simpsons.json')
    .catch(()=> res.status(500).send('Internal Server Error'));

  if (ArrayRead.map(({ id }) => id).includes(id)) {
   return res.status(409).json({ message: 'id already exists' });
  }
  
  
  ArrayRead.push({ id, name });

  await simpsonsUtils.setSimpsons(ArrayRead);

  res.status(204).end();

})



app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001');
})