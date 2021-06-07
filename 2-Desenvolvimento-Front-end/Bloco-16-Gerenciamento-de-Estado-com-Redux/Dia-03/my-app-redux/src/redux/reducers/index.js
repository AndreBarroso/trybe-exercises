import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import recordClientReducer from './recordClientReducer'

const rootReducer = combineReducers({
  loginReducer,
  recordClientReducer,
});

export default rootReducer;
