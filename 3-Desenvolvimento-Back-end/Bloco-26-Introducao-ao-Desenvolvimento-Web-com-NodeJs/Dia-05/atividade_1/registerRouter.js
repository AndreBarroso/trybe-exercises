const { Router } = require('express')
const router = Router();

let register = [];
const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

function validaPassword(number) {
  
  if(number.length >= 4 && number.length <= 8) {
    if (number.match(/\D/) === null) return true; 
  }
  return false;
}

router.post('/', function (req, res) {
  const { username, email, password } = req.body;
  
  if (username.length || email !== emailFormat || validaPassword(password));
  res.status(201).json({ message: 'Recipe created successfully!'});
});

module.exports = router;



