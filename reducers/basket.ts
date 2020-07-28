import {SET_TO_BASKET, DELETE_FROM_BASKET, GET_BASKET, START,SUCCESS, FAIL  } from '../constants';

const INITIAL_STATE = {
  items: [],
};

const basket = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TO_BASKET:
      return { ...state, items: [...action.payload] };
     case DELETE_FROM_BASKET:
      return { ...state, items: [...action.payload] };  
    case `${GET_BASKET}${START}`:
      return { ...state, items: [] };
    case `${GET_BASKET}${SUCCESS}`:
      return { ...state, items: [...action.payload] };
    case `${GET_BASKET}${FAIL}`:
      return { ...state, items: [] };
    default:
      return state;
  }
};
export default basket;
