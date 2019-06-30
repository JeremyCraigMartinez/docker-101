// @flow strict

import type { LectureTopic, Subject } from './index';

export type BaseState = {|
  result: string | null,
  path: 'autonomy' | 'traditional',
  topic: LectureTopic,
  subject: Subject | null,
|};

export type State = {
  base: BaseState,
}
