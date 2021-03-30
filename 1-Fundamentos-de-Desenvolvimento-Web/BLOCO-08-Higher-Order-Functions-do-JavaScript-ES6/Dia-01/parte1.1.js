
const employer = (nome) => {
    const obj = {};
    const idMail = nome.toLowerCase().split(' ').join('_');
    const email = `${idMail}@trybe.com`;

    obj.nomeCompleto = nome;
    obj.email = email;
    
    return obj;
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva')
    }
    return employees;
  };

  console.log(newEmployees(employer));