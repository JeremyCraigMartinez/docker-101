// @flow strict

import type { BaseState } from './types/reducer-states';
import type { Action } from '../actions/types';

const params = new URLSearchParams(window.location.search);

export const defaultState = {
  result: null,
  path: params.get('path') === 'traditional' ? 'traditional' : 'autonomy',
  topic: null,
  subject: null,
  visited: [],
};

export default (state: BaseState = defaultState, action: Action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        result: action.payload,
      };
    case 'SELECT_TOPIC':
      const newSubject = action.subject || state.subject || {};
      const currentWeek = state.subject && state.subject.week;
      if (currentWeek && currentWeek >= 6) {
        newSubject.week = currentWeek;
      }
      const previousTopic = state.topic || action.topic;
      return {
        ...state,
        topic: action.topic,
        subject: { ...newSubject, previousTopic },
        visited: [...state.visited, action.topic],
      };
    default:
      return state;
  }
};
