import {
  CREATE_POST,
  SHOW_POST,
  UPDATE_POST,
  DELETE_POST,
  DELETE_ALL_POSTS,
} from "../actions/type";

const initialState = [];

function postReducer(posts = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_POST:
      return [...posts, payload];
    case SHOW_POST:
      return payload;
    case UPDATE_POST:
      return posts.map((post) => {
        if (post.id === payload.id) {
          return {
            ...post,
            ...payload,
          };
        } else {
          return post;
        }
      });
    case DELETE_POST:
      return posts.filter((post) => post.id !== payload);
    case DELETE_ALL_POSTS:
      return [];
    default:
      return posts;
  }
}

export default postReducer;
