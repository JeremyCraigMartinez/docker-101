// @flow strict

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // $FlowFixMe
import { createLogger } from 'redux-logger';
import type { Reducer } from 'redux';

import base, { defaultState as baseDefaultState } from './base';
import type { State } from './types/reducer-states';
import type { Action } from '../actions/types';

const reducers: Reducer<State, Action> = combineReducers({
  base,
});

export default reducers;

export const defaultState = {
  base: baseDefaultState,
};

export type Reducers = typeof reducers;

export function configureStore(initialState: State = defaultState) { // $FlowFixMe
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, createLogger()),
  );
}
