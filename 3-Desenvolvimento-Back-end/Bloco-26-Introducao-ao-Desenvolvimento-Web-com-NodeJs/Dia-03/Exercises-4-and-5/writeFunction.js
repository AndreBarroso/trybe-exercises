const fs = require('fs').promises;


async function writeFunction(nameFile, content) {
  await fs.writeFile(nameFile, content)
  return 'ok';
};
 
module.exports = writeFunction;
