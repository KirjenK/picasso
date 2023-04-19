/* eslint-disable default-param-last */
import * as type from '../actions/postsActions';

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case type.POSTS_ADD:
      return action.payload;

    default:
      return state;
  }
};
