import { ENTER_LOGIN } from '../actions/index'

const initialState = {
  login: {email: '', senha:'', logado: false},
};

function loginReducer (state=initialState, action) {
  switch(action.type) {
    case ENTER_LOGIN:
      return {
        ...state,
        login: {...state.login, email: action.email, senha: action.senha, logado: action.logado}
      };
      default: 
        return state;
  }
}

export default loginReducer;