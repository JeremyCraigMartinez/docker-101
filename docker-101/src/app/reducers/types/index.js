// @flow strict

import type { Store as ReduxStore } from 'redux';
import type { Action } from '../../actions/types';
import type { State } from './reducer-states';

export type Store = ReduxStore<State, Action>;

export type LectureTopic = 'concepts' | 'containers' | 'images' | 'network' | 'services' | 'volume' | null;
export type CourseInputType =
  'coursePre' |
  'courseFirstThird' |
  'courseSecondThird' |
  'coursePost';

export type InputType =
  'lecturePre' |
  'lecturePost' |
  'assignmentPre' |
  'assignmentPost';

export type Subject = {
  week: number,
  subpath?: number,
};
