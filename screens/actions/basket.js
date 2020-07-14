/* @flow */
export const getBasketItems = () => (
  dispatch: TDispatch,
  getState,
  { fetch }
): any => {
  dispatch({ type: SET_COMPLEX_PLANINGS + START });

  const {
    token: { token = '' } = {},
    city: { cityIds = [] },
    complex: { headerData: { slug = '' } } = {},
  } = getState();
  const url = '/lexsApi/complex-card/plannings-extended';
  const body = JSON.stringify({ cityIds, slug, pageIndex, pageSize });

  fetch(url, {
    method: 'POST',
    ...addJavaHeaders(token),
    body,
  })
    .then((data) => data.json())
    .then(({ result, data }) => {
      if (result === 'ok') {
        dispatch({ type: SET_COMPLEX_PLANINGS + SUCCESS, payload: data });
      } else {
        dispatch({ type: SET_COMPLEX_PLANINGS + FAIL, error: 'Planing error' });
      }
    })
    .catch((err) => {
      dispatch({ type: SET_COMPLEX_PLANINGS + FAIL, error: err });
    });
};
