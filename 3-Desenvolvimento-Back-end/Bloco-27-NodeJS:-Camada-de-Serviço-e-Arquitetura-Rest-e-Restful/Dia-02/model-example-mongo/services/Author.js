const Authors = require('../models/Author')

const getNewAuthor = (authorData) => {
    const { id, firstName, middleName, lastName } = authorData;
    
    const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
    
    return {
      id,
      firstName,
      middleName,
      lastName,
      name: fullName,
    };
  };

  const isValid = ( firstName, middleName, lastName) => {
    if(!firstName || typeof firstName !== 'string') return false;
    if(!lastName || typeof lastName !== 'string') return false;

    return true;
  }

  const getAll = async () => {
    const author = await Authors.getAll();

    return author.map(getNewAuthor);
  }

  const findById = async (id) => {
    const author = await Authors.findById(id);

    return getNewAuthor(author);
  }

  const create = async (firstName, middleName, lastName) => {
    const authorValid = isValid(firstName, middleName, lastName);

    if(!authorValid) return false;

    await Authors.create(firstName, middleName, lastName);

    return true;
  }

  module.exports = {
    getAll,
    findById,
    create,
  }
  