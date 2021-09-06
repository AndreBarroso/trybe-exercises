const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'andre',
  password: 'Seunome123456*',
  host: 'localhost',
  database: 'cep_lookup'
}) ;

module.exports = connection;