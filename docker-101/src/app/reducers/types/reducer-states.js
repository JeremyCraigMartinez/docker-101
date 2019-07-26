// @flow strict

import type { LectureTopic, InputType, Subject } from './index';

export type BaseState = {|
  result: string | null,
  path: 'autonomy' | 'traditional',
  topic: LectureTopic,
  subject: Subject | null,
  visited: Array<LectureTopic>,
|};

export type InputState = {
  coursePre: Array<string>,
  courseFirstThird: Array<string>,
  courseSecondThird: Array<string>,
  coursePost: Array<string>,
  [LectureTopic]: {
    [InputType]: Array<string>,
  }
};

export type State = {
  base: BaseState,
  inputs: InputState,
};
