const {REACT_APP_API_KEY} = process.env;

const API = 'https://api.themoviedb.org/3/';

export const popularUrl = `${API}movie/popular?api_key=${REACT_APP_API_KEY}`

export const searchUrl = path => `${API}search/movie?api_key=${REACT_APP_API_KEY}&query=${path}`

export const detailsUrl = path => `${API}movie/${path}?api_key=${REACT_APP_API_KEY}`