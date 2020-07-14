import { SET_TOKEN, DELETE_TOKEN } from '../constants';

const initialState = {};

const token = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TOKEN:
      return {
        token: payload.token,
        tokenExpires: payload.tokenExpires,
        refreshToken: payload.refreshToken,
        isAnonymous: payload.isAnonymous,
      };

    case DELETE_TOKEN:
      return initialState;

    default:
      return state;
  }
};
export { initialState as tokenInitialState };
