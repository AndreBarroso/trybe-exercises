export const ENTER_LOGIN = 'ENTER_LOGIN';

export const dataLogin = (email, senha) => ({
  type: ENTER_LOGIN,
  email,
  senha,
});