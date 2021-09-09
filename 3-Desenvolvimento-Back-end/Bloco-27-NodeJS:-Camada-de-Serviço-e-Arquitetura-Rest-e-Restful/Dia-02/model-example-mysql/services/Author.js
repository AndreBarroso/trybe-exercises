const Author =  require('../models/Author');

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