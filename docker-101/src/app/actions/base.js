// @flow strict

import type { LectureTopic } from '../reducers/types';
import type { Dispatch } from './types';

export type SimpleAction = {
  type: 'SIMPLE_ACTION',
  payload: string,
};

export const simpleAction = () => (dispatch: Dispatch) => (
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action',
  })
);

export type SelectTopic = {
  type: 'SELECT_TOPIC',
  topic: LectureTopic,
};

export const selectTopic = (topic: LectureTopic) => (dispatch: Dispatch) => (
  dispatch({
    type: 'SELECT_TOPIC',
    topic,
  })
);
