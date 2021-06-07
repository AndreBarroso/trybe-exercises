import {RECORD_CLIENT} from '../actions/index';

const initialState = [];

function recordClientReducer (state = initialState, action) {
  switch(action.type){
    case RECORD_CLIENT:
      return [...state, action.data];
      default:
        return state;
  }
}

export default recordClientReducer ; 
