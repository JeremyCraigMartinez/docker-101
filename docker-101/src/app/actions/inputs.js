// @flow strict

import type { LectureTopic, CourseInputType, InputType } from '../reducers/types';
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
  inputType: CourseInputType,
};

export const receiveCourseInput = (inputs: Array<string>, inputType: CourseInputType) => (dispatch: Dispatch) => (
  dispatch({
    type: 'RECEIVE_COURSE_INPUT',
    inputs,
    inputType,
  })
);

export type ReceiveInput = {
  type: 'RECEIVE_COURSE_INPUT' | 'RECEIVE_LECTURE_INPUT',
  which?: LectureTopic,
  inputs: Array<string>,
};

export const receiveInput = (inputs: Array<string>, which?: LectureTopic, inputType?: InputType) => (dispatch: Dispatch) => (
  (which == null || inputType == null)
    ? null
    : dispatch({
      type: 'RECEIVE_LECTURE_INPUT',
      which,
      inputs,
      inputType,
    })
);
