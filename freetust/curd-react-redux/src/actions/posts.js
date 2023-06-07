import {
  CREATE_POST,
  SHOW_POST,
  UPDATE_POST,
  DELETE_POST,
  DELETE_ALL_POSTS,
} from "./type";

import PostService from "../services/post";

export const createPost =
  (postId, title, imageUrl, description, status) => async (dispatch) => {
    try {
      const res = await PostService.createPost({
        postId,
        title,
        imageUrl,
        description,
        status,
      });
      dispatch({
        type: CREATE_POST,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const showPost = () => async (dispatch) => {
  try {
    const res = await PostService.showPost();

    dispatch({
      type: SHOW_POST,
      payload: res.data,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updatePost = (id, data) => async (dispatch) => {
  try {
    const res = await PostService.updatePost(id, data);
    dispatch({
      type: UPDATE_POST,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    Promise.reject(err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await PostService.deletePost(id);

    dispatch({
      type: DELETE_POST,
      payload: { id },
    });
  } catch (err) {
    Promise.reject(err);
  }
};

export const deleteAllPosts = () => async (dispatch) => {
  try {
    const res = await PostService.deleteAllPosts();

    dispatch({
      type: DELETE_ALL_POSTS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    Promise.reject(err);
  }
};

export const findByTitle = (title) => async(dispatch) => {
    try {
    const res = await PostService.findByTitle(title);
    dispatch({
        type: SHOW_POST,
        payload: res.data,
    });
} catch (err) {
    Promise.reject(err);
};

};