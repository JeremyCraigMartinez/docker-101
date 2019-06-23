// @flow strict

import type { Dispatch as ReduxDispatch } from 'redux';

import type { State } from '../../reducers/types/reducer-states';

// Actions
import type { SimpleAction } from '../base';

export type Action = SimpleAction;

export type GetState = () => State;
export type Dispatch =
  & ReduxDispatch<Action>
  & Thunk<Action>; // eslint-disable-line no-use-before-define

export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;
