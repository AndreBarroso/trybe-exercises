// models/Authors.js
const { ObjectId } = require('mongodb');

const connection = require('./connection');

// Cria uma string com o nome completo do autor

// Serializa o nome dos campos de snake_case para camelCase

const serialize = (authorData) => ({
 id: authorData.id,
 firstName: authorData.first_name,
 middleName: authorData.middle_name,
 lastName: authorData.last_name,
});

// Busca todos os autores do banco.

const getAll = async () => {
  return connection()
      .then((db) => db.collection('authors').find().toArray())
          .then((authors) => {
              return authors.map(({_id, firstName, middleName, lastName}) => {
                  return {id: _id, firstName, middleName, lastName}
              })
          }
             
      );
}

/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado
*/

const findById = async (id) => {

    const authorData = await connection()
        .then((db) => db.collection('authors').findOne(new ObjectId(id)));

    if (!authorData) return null;

    const { firstName, middleName, lastName } = authorData;

    return { id, firstName, middleName, lastName };
};

const create = async (firsName, middleName, lastName) => {
    connection()
        .then((db) => db.collection('authors').insertOne({firsName, middleName, lastName}));
};


  
  module.exports = {
    getAll,
    findById,
    create,
  };