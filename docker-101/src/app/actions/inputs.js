// @flow strict

import type { LectureTopic, InputType } from '../reducers/types';
import type { Dispatch } from './types';

export type ReceiveLectureInput = {
  type: 'RECEIVE_LECTURE_INPUT',
  which: LectureTopic,
  inputs: Array<string>,
  inputType: InputType,
};

export const receiveLectureInput = (inputs: Array<string>, which: LectureTopic, inputType: InputType) => (dispatch: Dispatch) => (
  dispatch({
    type: 'RECEIVE_LECTURE_INPUT',
    which,
    inputs,
    inputType,
  })
);

export type ReceiveCourseInput = {
  type: 'RECEIVE_COURSE_INPUT',
  inputs: Array<string>,
};

export const receiveCourseInput = (inputs: Array<string>) => (dispatch: Dispatch) => (
  dispatch({
    type: 'RECEIVE_COURSE_INPUT',
    inputs,
  })
);

export type ReceiveInput = {
  type: 'RECEIVE_COURSE_INPUT' | 'RECEIVE_LECTURE_INPUT',
  which?: LectureTopic,
  inputs: Array<string>,
};

export const receiveInput = (inputs: Array<string>, which?: LectureTopic, inputType?: InputType) => (dispatch: Dispatch) => (
  (which == null || inputType == null)
    ? dispatch({
      type: 'RECEIVE_COURSE_INPUT',
      inputs,
    })
    : dispatch({
      type: 'RECEIVE_LECTURE_INPUT',
      which,
      inputs,
      inputType,
    })
);
