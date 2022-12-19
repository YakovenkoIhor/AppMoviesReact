import {SET_POSTS, REMOVE_POST, ADD_TODO, REMOVE_TODO, CHECK_TODO} from './types';

const initialState = [];

export const todos = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TODO :     
      if(action.payload==='') return
      const newTodo = {
        id: Math.round(Math.random() * 100),
        value: action.payload,
        checked: false,
      }
      action.payload1('');
      return [
        ...state,
        newTodo
      ];

    case REMOVE_TODO :
      return state.filter(todo => action.payload !== todo.id);

    case CHECK_TODO :
      return state.map(todo => {
        if(todo.id === action.payload){
          return {...todo, checked: !todo.checked}
        }
        return todo
        });
      
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
 