const fs = require('fs').promises;
function readFileSimpsons() {
  const simpons = 'simpsons.json';
  return fs.readFile(simpons, 'utf-8')
  .then((result)=> {
    return JSON.parse(result);
  })
  .catch((err)=> err.message);
}

function idAndName() {
  readFileSimpsons()
    .then((result)=> result.forEach(({id, name}) => {
      console.log(`${id} - ${name}`)
    })  );
}

function getPersonById(identity) {
  return new Promise((resolve, reject) => {
    readFileSimpsons()
    .then((result) => {
      const seach = result.some(({id}) => id === identity);
      
      if(!seach) return reject('id não encontrado');
      resolve (result.find(({id})=> id === identity ))
    
    })
  })
}

// getPersonById('100000')
// .then((result)=> console.log(result))
// .catch((err) => console.log(err))

function modifyFile() {
  readFileSimpsons()
    .then((result) => {
      const indexes = [];
      result.forEach(({id}, index)=> {
        if(id === '10' || id === '6') {
          indexes.push(index);
        }
      })
      if(indexes.length !== 0) {
        indexes.forEach((element, index)=> {
          result.splice(element - index, 1);
        });
      }
      return JSON.stringify(result)
    })
    .then((result)=> {
      return fs.writeFile('./simpsons.json', result)
    })
    .then(()=> console.log('Arquivo escrito com sucesso'))
    .catch((err) => console.log(`Erro ao escrever no arquivo ${err}`))
}

function modifyFile() {
  readFileSimpsons()
    .then((result) => {
      const indexes = [];
      result.forEach(({id}, index)=> {
        if(id === '10' || id === '6') {
          indexes.push(index);
        }
      })
      if(indexes.length !== 0) {
        indexes.forEach((element, index)=> {
          result.splice(element - index, 1);
        });
      }
      return JSON.stringify(result)
    })
    .then((result)=> {
      return fs.writeFile('./simpsons.json', result)
    })
    .then(()=> console.log('Arquivo escrito com sucesso'))
    .catch((err) => console.log(`Erro ao escrever no arquivo ${err}`))
}

async function createFuncSimpsonFamily() {
  let file;
  const newFile = [];
  try {
    file = await readFileSimpsons();
  } catch (err) {
    return console.log(`Erro ao ler o arquivo: ${err.message}`)
  }
  file.forEach((e)=> {
    if(e.id == '1' || e.id == '2' || e.id == '3' || e.id == '4') {
      newFile.push(e);
    }
  })
  console.log(newFile);
  try {
    fs.writeFile('./simpsonFamily.json', JSON.stringify(newFile));
  } catch(err){
    return console.log(`Erro ao escrever no arquivo ${err.message}`)
  }
}
// createFuncSimpsonFamily()

function readSimpsonsFamily() {
  const simpons = 'simpsonFamily.json';
  return fs.readFile(simpons, 'utf-8')
  .then((result)=> {
    resultJson = JSON.parse(result);
    return resultJson;
  })
  .catch((err)=> err.message);
}

async function addNelsonMuntz() {
  let content = [];
  try {
    content =  await readSimpsonsFamily();
    await content.push({'id': '11', 'name': ' Nelson Muntz'});
    console.log(content)
    await fs.writeFile('simpsonFamily.json', JSON.stringify(content))
  }catch(err) {
    console.log(`Erro ao ler o arquivo: ${err.message}`)
  }
}

// addNelsonMuntz();

async function addChangePerson() {
  try {
    content =  await readSimpsonsFamily();
    console.log(content)
    const newContent = await content.map((element) => {
      const {id, name} = element;
      if(name === 'Nelson Muntz') {
        return {
          id, 
          name: 'Maggie Simpson'
        }
      }
      return element;
    });
    console.log(newContent);
    await fs.writeFile('simpsonFamily.json', JSON.stringify(content))
  }catch(err) {
    console.log(`Erro ao ler o arquivo: ${err.message}`)
  }
}

// addChangePerson()





