const INITIAL_STATE = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  accountType: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, field };
    default:
      return state;
  }
};
export default user;
