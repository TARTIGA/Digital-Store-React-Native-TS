import { GET_PRODUCTS, START, SUCCESS, FAIL } from './constants';

const INITIAL_STATE = {
  items: [],
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_PRODUCTS}${START}`:
      return { ...state, items: [] };
    case `${GET_PRODUCTS}${SUCCESS}`:
      return { ...state, items: [...action.payload] };
    case `${GET_PRODUCTS}${FAIL}`:
      return { ...state, items: [] };
    default:
      return state;
  }
};
export default user;
