const INITIAL_STATE = {
  films: ['Plus One', 'John Wick', 'Transit'],
};

const films = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FILM':
      return { ...state, films: [...state.films, action.payload] };
    default:
      return state;
  }
};

export default films;
