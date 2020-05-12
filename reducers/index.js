import { combineReducers } from 'redux';
import films from './films';
import basket from './basket';
import counter from './counter';

const rootReducer = combineReducers({
  films,
  basket,
  counter,
});

export default rootReducer;
