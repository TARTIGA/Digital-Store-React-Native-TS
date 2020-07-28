import { combineReducers } from 'redux';
import basket from './basket';
import user from './user';
import favorites from './favorites';
import token from './token';
import orders from './orders';
import products from './products';


const rootReducer = combineReducers({
  basket,
  favorites,
  user,
  token,
  orders,
  products,
});

export default rootReducer;
