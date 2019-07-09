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

export function saveState(state: State) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
}

export function loadState(): State {
  const state = defaultState;
  try {
    const storedState = localStorage.getItem('state');
    if (storedState == null) return state;
    const serializedState = JSON.parse(storedState);
    return serializedState;
  } catch {
    return state;
  }
}

export function configureStore(initialState: State = loadState()) { // $FlowFixMe
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, createLogger()),
  );
}
