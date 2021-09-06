const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'andre',
  password: 'Seunome123456*',
  host: 'localhost',
  database: 'model_example'
}) ;

module.exports = connection;