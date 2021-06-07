export const ENTER_LOGIN = 'ENTER_LOGIN';
export const RECORD_CLIENT = 'RECORD_CLIENT';


export const dataLogin = (email, senha, logado) => ({
  type: ENTER_LOGIN,
  email,
  senha,
  logado,
});

export const recordClient = (nome, idade, email) => ({
  type: RECORD_CLIENT,
  data: {nome,
  idade,
  email,
  }
});