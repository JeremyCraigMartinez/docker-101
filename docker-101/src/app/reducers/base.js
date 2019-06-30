// @flow strict

import type { BaseState } from './types/reducer-states';
import type { Action } from '../actions/types';

const params = new URLSearchParams(window.location.search);

export const defaultState = {
  result: null,
  path: params.get('path') === 'traditional' ? 'traditional' : 'autonomy',
  topic: null,
  subject: null,
};

export default (state: BaseState = defaultState, action: Action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        result: action.payload,
      };
    case 'SELECT_TOPIC':
      return {
        ...state,
        topic: action.topic,
        subject: action.subject,
      };
    default:
      return state;
  }
};
