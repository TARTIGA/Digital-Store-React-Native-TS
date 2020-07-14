/* @flow */
import type { TDispatch } from '../types/core';
import { GET_BASKET, START, SUCCESS, FAIL } from '../constants';

export const getBasket = () => (
  dispatch: TDispatch,
  getState,
  { fetch }
): any => {
  dispatch({ type: GET_BASKET + START });

  const { token: { token = '' } = {} } = getState();
  const url = '/';

  fetch(url, {
    method: 'GET',
    ...addJavaHeaders(token),
  })
    .then((data) => data.json())
    .then(({ result, data }) => {
      if (result === 'ok') {
        dispatch({ type: GET_BASKET + SUCCESS, payload: data });
      } else {
        dispatch({ type: GET_BASKET + FAIL, error: 'Planing error' });
      }
    })
    .catch((err) => {
      dispatch({ type: GET_BASKET + FAIL, error: err });
    });
};
