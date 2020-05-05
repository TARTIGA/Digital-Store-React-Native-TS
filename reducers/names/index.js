const INITIAL_STATE = {
  names: ['TIM', 'CAT'],
};

const namesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FILM':
      return { ...state, names: [...state.names, action.payload] };
    default:
      return state;
  }
};
export default namesReducer;
