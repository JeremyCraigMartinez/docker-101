// @flow strict

import type { Store as ReduxStore } from 'redux';
import type { Action } from '../../actions/types';
import type { State } from './reducer-states';

export type Store = ReduxStore<State, Action>;
