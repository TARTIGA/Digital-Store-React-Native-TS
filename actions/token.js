import { SET_TOKEN, DELETE_TOKEN, CLEAR_STORE } from '../constants';

export function setToken({ token, tokenExpires, refreshToken, isAnonymous }) {
  return {
    type: SET_TOKEN,
    payload: {
      token,
      tokenExpires,
      refreshToken,
      isAnonymous,
    },
  };
}

export function deleteToken() {
  return {
    type: DELETE_TOKEN,
  };
}

export function clearStore() {
  return {
    type: CLEAR_STORE,
  };
}
