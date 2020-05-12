const INITIAL_STATE = {
  items: [],
};

const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_BASKET':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
export default basketReducer;
