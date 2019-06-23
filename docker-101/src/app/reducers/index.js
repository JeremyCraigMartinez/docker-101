import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import base from './base';

export default combineReducers({
  base,
});

export function configureStore(initialState={}) {
  return createStore(
     combineReducers,
     initialState,
     applyMiddleware(thunk)
  );
}
