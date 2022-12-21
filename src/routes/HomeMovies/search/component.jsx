import React, { useState, useEffect } from 'react';

import {useParams, Link} from "react-router-dom"
import './styles.scss'

import useGetData from '../../../hooks/useGetData'
import {searchUrl} from '../../../url/url'

import {connect} from "react-redux";
// import {addTodo} from '../../store/todos/actions';
import {setSearchMovies} from '../../../store/movies/actions';
import {selectSearchMovies} from '../../../store/movies/selectors';


const Search = ({setSearchMovies, searchMovies}) => {
  	
const params = useParams()

// const {data} = useGetData(searchUrl(params.query.slice(1)))

useEffect(()=>{
  fetch(searchUrl(params.query.slice(1)))
  .then(res => res.json())
  // .then(data => console.log(data.results))
  .then(data => setSearchMovies(data.results))
})

  return (
    <div style={{ background: "pink" }}>Result search
      {!searchMovies
        ? "Empty list"
        : (
        <div className='movies'>
          
          {searchMovies.map(movie => {
            return (
              <div key={movie.id} className='movie'>
                                                      
                <nav>
                  <Link to= {`/details/:${movie.id}`} >

                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.original_title}`}></img>

                    <div className="title">{movie.title}</div>

                    <div className="rate">{movie.vote_average*10+'%'}</div>

                    <div className="date">{new Date(movie.release_date).toDateString()}</div>

                  </Link>
                </nav>
              </div> 
            )
          }
        )}
      </div>
      )}
    </div>
  );
}

  // export default Search;

  const mapStateToProps = state => ({
    // movies: selectPopularMovies(state),
    searchMovies: selectSearchMovies(state),
  })
  const mapDispatchToProps = {
    setSearchMovies,
    // setPopularMovies
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Search);