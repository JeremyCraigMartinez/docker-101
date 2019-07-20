// @flow strict

import type { LectureTopic, InputType, Subject } from './index';

export type BaseState = {|
  result: string | null,
  path: 'autonomy' | 'traditional',
  topic: LectureTopic,
  subject: Subject | null,
|};

export type InputState = {
  course: [
    Array<string>, // before course
    Array<string>, // one-third course recap
    Array<string>, // two-third course recap
    Array<string>, // end of course recap
  ],
  [LectureTopic]: {
    [InputType]: Array<string>,
  }
};

export type State = {
  base: BaseState,
  inputs: InputState,
};
