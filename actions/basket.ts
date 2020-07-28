/* @flow */
import type { TDispatch } from '../types/core';
import {SET_TO_BASKET, DELETE_FROM_BASKET, GET_BASKET,START,SUCCESS, FAIL  } from 'app/constants';
//addHeaders import

export const setToBasket = (payload) => ({
	type: SET_TO_BASKET,
	payload
});

export const deleteFromBasket = (payload) => ({
	type: DELETE_FROM_BASKET,
	payload
});

export const getBasketItems = () => (
  dispatch: TDispatch,
  getState,
  { fetch }
): any => {
  dispatch({ type: GET_BASKET + START });

  const {
    token: { token = '' } = {},
  } = getState();
  const url = '/';

  fetch(url, {
    method: 'GET',
    ...addHeader(token),
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
