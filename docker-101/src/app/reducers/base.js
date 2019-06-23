// @flow strict

import type { BaseState } from './types/reducer-states';
import type { Action } from '../actions/types';

export const defaultState = {
  result: null,
};

export default (state: BaseState = defaultState, action: Action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
