export const selectPosts = state => state.posts;
export const selectPostsLength = state => state.posts.length;
export const selectTodos = state => state.todos;

export const selectPopularMovies = state => state.movies.popular;
export const selectSearchMovies = state => state.movies.search;
export const selectDetailsMovies = state => state.movies.details;