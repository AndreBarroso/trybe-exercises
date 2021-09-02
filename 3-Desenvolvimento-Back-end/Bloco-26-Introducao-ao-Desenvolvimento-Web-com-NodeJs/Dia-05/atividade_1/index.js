const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const registerRouter = require('./registerRouter');
app.use('/user', registerRouter);


// let recipes = [];
// app.post('/user', function (req, res) {
//   const { id, name, price } = req.body;
//   recipes.push({ id, name, price});
//   res.status(201).json({ message: 'Recipe created successfully!'});
// });

app.listen(3001, () => { console.log('Ouvindo na porta 3001') });