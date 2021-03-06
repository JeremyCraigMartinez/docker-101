// @flow strict

import type { State } from '../../reducers/types/reducer-states';

// Actions
import type { SimpleAction, SelectTopic } from '../base';
import type { ReceiveLectureInput, ReceiveCourseInput } from '../inputs';

export type Action =
  SimpleAction |
  SelectTopic |
  ReceiveLectureInput |
  ReceiveCourseInput;

export type GetState = () => State;
export type Actions = Action | ThunkAction | Promise<Action> | Array<Action> | Array<Promise<Action>>; // eslint-disable-line no-use-before-define
export type Dispatch = (action: Actions) => void;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void | Promise<void | boolean>;
