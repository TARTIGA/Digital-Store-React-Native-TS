/* @flow */
export type TAction = {
  type: string,
  payload: any,
  error?: boolean,
  act?: any,
};

export type TISODate = string;

export type TPromiseAction = Promise<TAction>;

// eslint-disable-next-line no-use-before-define
export type TThunkAction = (TDispatch) => any;

export type TDispatch = (
  TAction | TPromiseAction | TThunkAction | Array<TAction>
) => void;

export type TAddToFavorites = (number, number, () => void) => void;

export type TDeleteFromFavorites = (number, number, () => void) => void;

export type TSeoData = {
  metaTitle: string,
  metaDescription: string,
  metaKeywords: string,
};

export type TUser = {
  citySlug: string,
  cityIds: number[],
};
