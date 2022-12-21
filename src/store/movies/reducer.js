import {SET_POSTS, REMOVE_POST, SET_POPULAR_MOVIES, SET_SEARCH_MOVIES, SET_DETAILS_MOVIES} from './types';

const initialState = {
  popular: [],
  search: [],
  details: {}
};

export const movies = (state = initialState, action) => {
  switch (action.type) {

    case SET_POPULAR_MOVIES :     
    return {
      ...state,
      popular: action.payload
    };
    case SET_SEARCH_MOVIES :     
    return {
      ...state,
      search: action.payload
    };
    case SET_DETAILS_MOVIES :     
    return {
      ...state,
      details: action.payload
    };
          
    default:
      return state; 
      
  } 
}


export const posts = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return [...new Set(action.posts)];
    case REMOVE_POST:
      console.log(action, state, 'reducer')
      return state.filter(post => post.id !== action.postId);
    default:
      return state;
  }
}
 