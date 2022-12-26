import {SET_POPULAR_MOVIES, SET_SEARCH_MOVIES, SET_DETAILS_MOVIES} from './types';

export const setPopularMovies = (payload) => ({
  type: SET_POPULAR_MOVIES,
  payload
})
export const setSearchMovies = (payload) => ({
  type: SET_SEARCH_MOVIES,
  payload
})
export const setDetailsMovies = (payload) => ({
  type: SET_DETAILS_MOVIES,
  payload
})