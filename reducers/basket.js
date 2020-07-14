import SET_TO_BASKET from './constants';

const INITIAL_STATE = {
  items: [],
};

const basket = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TO_BASKET:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
export default basket;
