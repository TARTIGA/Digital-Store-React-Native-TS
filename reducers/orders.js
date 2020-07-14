const INITIAL_STATE = {
  orders: [],
};

const orders = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return { ...state, orders: [...action.payload] };
    default:
      return state;
  }
};
export default user;
