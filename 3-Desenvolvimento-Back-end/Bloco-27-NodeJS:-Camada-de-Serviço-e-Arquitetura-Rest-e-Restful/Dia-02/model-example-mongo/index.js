const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./services/Author');

const User = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
 const authors = await Author.getAll();

 res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
    const { firstName, middleName, lastName } = req.body;

    const author = Author.create(firstName, middleName, lastName );

    if (!author) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }


    res.status(201).json({ firstName, middleName, lastName } );
});


app.post('/user', User.isUserValid, User.insertUser );

app.get('/user', User.getUsers );

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`Ouvindo a porta ${PORT}`);
});
