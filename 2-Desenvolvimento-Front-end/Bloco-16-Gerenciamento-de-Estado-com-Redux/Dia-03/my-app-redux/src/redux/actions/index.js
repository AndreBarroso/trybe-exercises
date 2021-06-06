import rootReducer from '../reducers/index';
import { creatStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = creatStore(rootReducer, composeWithDevTools());
export default store;