import { combineReducers } from 'redux';
import basket from './basket';
import user from './user';
import orders from './orders';

const rootReducer = combineReducers({
  basket,
  user,
  orders,
});

export default rootReducer;
