import React, { useState, useEffect } from 'react';

import './styles.scss'

import { useFormik } from 'formik';

import * as Yup from 'yup';

import {Link, useNavigate } from "react-router-dom"

import {popularUrl} from '../../url/url'
import useGetData from '../../hooks/useGetData'

import {connect} from "react-redux";
import {setSearchMovies} from '../../store/movies/actions';
import {setPopularMovies} from '../../store/movies/actions';
import {selectSearchMovies} from '../../store/movies/selectors';
import {selectPopularMovies} from '../../store/movies/selectors';


const HomeMovies = ({searchMovies, setSearchMovies, setPopularMovies, movies}) => {

  const formik = useFormik({
      
    initialValues: {
      search: '',
    },

    validationSchema: Yup.object({
      search: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
    }),

    onSubmit: values => {  
      setSearchMovies(formik.values.search)
      navigate(`/search/:${formik.values.search}`);
             
      formik.resetForm({
        values: {search: ''},
      });    
    },    
  });
  
  let navigate = useNavigate();

  // const movies = useGetData(popularUrl)

  useEffect(()=>{
    fetch(popularUrl)
    .then(res => res.json())
    .then(data => setPopularMovies(data))
  })
// console.log();
    return (
      <div
      style={{
        background: "pink"
       }}
      >
        <h1>Movies</h1>

        <p>Movies information</p>

        <form onSubmit={formik.handleSubmit} >

          <div>
            <label htmlFor="search" >Body</label>
            <input 
              id="search"
              name="search"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.search}
            />
            {formik.touched.search && formik.errors.search ? (
        <div>{formik.errors.search}</div>
      ) : null}
          </div>

          <button type="submit">Search</button>
        </form>

        {setPopularMovies.data === 0
        ? "Empty list"
        : (
        <>
        <div className='popular'>Popular</div>

        <div className='movies'>
          
          {movies.map(movie => {
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
      </>
      )}
      </div>

    );
  }

  // export default HomeMovies

 const mapStateToProps = state => ({
    movies: selectPopularMovies(state),
    searchMovies: selectSearchMovies(state),
  })
  const mapDispatchToProps = {
    setSearchMovies,
    setPopularMovies
  }
  export default connect(mapStateToProps, mapDispatchToProps)(HomeMovies);
