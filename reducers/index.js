import { combineReducers } from 'redux';
import basket from './basket';
import counter from './counter';

const rootReducer = combineReducers({
  basket,
  counter,
});

export default rootReducer;
