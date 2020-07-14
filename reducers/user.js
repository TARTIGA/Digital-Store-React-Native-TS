import { SET_FIELD, GET_USER, START, SUCCESS, FAIL } from '../constants';

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
    case SET_FIELD:
      return { ...state, field };
    case `${GET_USER}${START}`:
      return { ...state };
    case `${GET_USER}${SUCCESS}`:
      return { ...state, ...action.payload };
    case `${GET_USER}${FAIL}`:
      return { ...state };
    default:
      return state;
  }
};
export default user;
