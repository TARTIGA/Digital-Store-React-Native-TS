import { combineReducers } from 'redux';
import basket from './basket';
import user from './user';

const rootReducer = combineReducers({
  basket,
  user,
});

export default rootReducer;
