import {SET_TO_FAVORITES, DELETE_FROM_FAVORITES } from '../constants';
const testState = [{
    id:0,
    label: 'Surface laptop 3',
    price: 1,
    key: 'Monitors',
  },
  {
    id:1,
    label: 'XPS laptop 13',
    price: 2,
    key: 'Smartphone',
  },];
const INITIAL_STATE = {
  items: [...testState],
};

const favorites = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TO_FAVORITES:
      return { ...state, items: [...action.payload] };
     case DELETE_FROM_FAVORITES:
      console.log(['DELETE_FROM_FAVORITES action.payload',action.payload]);
      return { ...state, items: [...action.payload] };  
    default:
      return state;
  }
};
export default favorites;
