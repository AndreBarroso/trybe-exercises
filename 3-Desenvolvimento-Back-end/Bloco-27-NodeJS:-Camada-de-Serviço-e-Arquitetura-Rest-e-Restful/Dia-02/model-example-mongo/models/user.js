const connection = require('./connection');

function isUserValid(req, res, next) {
  const { firstName, lastName, email, password } = req.body;
  if(!firstName || !lastName  || !email || !password) {
    return res.status(401).json({message: 'Todos os campos devem ser preenchidos'})
  }

  if(password.length < 6) {
    return res.status(401).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres"
    })
  }
  next();
}

async function insertUser(req, res ) {
  const { firstName, lastName, email, password } = req.body;
  const newUser = { firstName, lastName, email, password }
  connection()
    .then((db) => db.collection('user').insertOne(newUser)) 
  res.status(201).json(newUser)
}



async function getUsers(_req, res ) {
  connection().then((db) => db.collection('user').find().toArray())
    .then((r) => {
      if(r.length === 0) return res.status(200).json([]);
      return res.status(200).json(r);
    });
  
}

module.exports = {isUserValid, insertUser, getUsers};
