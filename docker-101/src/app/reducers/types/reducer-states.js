// @flow strict

import type { LectureTopic } from './index';

export type BaseState = {|
  result: string | null,
  path: 'autonomy' | 'traditional',
  topic: LectureTopic,
|};

export type State = {
  base: BaseState,
}
