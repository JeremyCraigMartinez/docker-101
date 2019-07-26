// @flow strict

import type { InputState } from './types/reducer-states';
import type { Action } from '../actions/types';

const defaultLectureInput = () => ({
  lecturePre: [],
  lecturePost: [],
  assignmentPre: [],
  assignmentPost: [],
});
export const defaultState = {
  coursePre: [],
  courseFirstThird: [],
  courseSecondThird: [],
  coursePost: [],
  concepts: defaultLectureInput(),
  containers: defaultLectureInput(),
  images: defaultLectureInput(),
  network: defaultLectureInput(),
  services: defaultLectureInput(),
  volume: defaultLectureInput(),
};

export default (state: InputState = defaultState, action: Action) => {
  switch (action.type) {
    case 'RECEIVE_LECTURE_INPUT':
      return {
        ...state,
        [action.which]: {
          ...state[action.which],
          [action.inputType]: action.inputs,
        },
      };
    case 'RECEIVE_COURSE_INPUT':
      return {
        ...state,
        [action.inputType]: action.inputs,
      };
    default:
      return state;
  }
};
