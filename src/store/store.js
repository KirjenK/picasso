import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './reducers/postsReducer';

const reducer = combineReducers({
  postsStore: postsReducer,
});

export const store = configureStore({ reducer });
