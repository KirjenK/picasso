export const POSTS_ADD = 'POSTS_ADD';

export const postsAdd = (post) => ({
  type: POSTS_ADD, payload: post,
});
