const INITIAL_STATE = {
  films: ['Plus One', 'John Wick', 'Transit'],
};

const filmsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FILM':
      return { ...state, data: [...state.films, action.payload] };
    default:
      return state;
  }
};

export default filmsReducer;
