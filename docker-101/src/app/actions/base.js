// @flow strict

import type { Dispatch } from './types';

export type SimpleAction = {
  type: 'SIMPLE_ACTION',
  payload: string,
};

export const simpleAction = () => (dispatch: Dispatch) => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action',
  });
};
