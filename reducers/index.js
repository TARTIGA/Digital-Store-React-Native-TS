import { combineReducers } from 'redux';
import filmReducer from './films';
import namesReducer from './names';

const reducer = combineReducers({
  filmReducer,
  namesReducer,
});

export default reducer;
