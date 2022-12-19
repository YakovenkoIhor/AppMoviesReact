import {SET_POSTS, REMOVE_POST, ADD_TODO, REMOVE_TODO, CHECK_TODO, ADD_MOVIES, SET_SEARCH_MOVIES, SET_POPULAR_MOVIES} from './types';

export const setPosts = posts => ({
  type: SET_POSTS,
  posts
});
export const removePost = postId => ({
  type: REMOVE_POST,
  postId,
})

export const addTodo = (payload, payload1) => ({
  type: ADD_TODO,
  payload,
  payload1
})
export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload
})
export const checkTodo = (payload) => ({
  type: CHECK_TODO,
  payload
})


export const setSearchMovies = (payload) => ({
  type: SET_SEARCH_MOVIES,
  payload
})
export const setPopularMovies = (payload) => ({
  type: SET_POPULAR_MOVIES,
  payload
})