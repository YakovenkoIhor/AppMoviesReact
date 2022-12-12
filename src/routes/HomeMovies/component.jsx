import React, { useState, useEffect } from 'react';

import './styles.scss'

import { useFormik } from 'formik';

import * as Yup from 'yup';

import {Link, useNavigate } from "react-router-dom"

import {popularUrl} from '../../url/url'
import useGetData from '../../hooks/useGetData'

const HomeMovies = () => {

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
      formik.resetForm({
        values: {search: ''},
      });    
    },    
  });
  
  let navigate = useNavigate();

  const movies = useGetData(popularUrl)
// console.log(movies.data.results);
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

          <button type="submit" onClick={() => {navigate(`/search/:${formik.values.search}`);
          }}>Search</button>
  
        </form>

        {movies.data.length === 0
        ? "Empty list"
        : (
        <div>
          Popular
          
          {movies.data.results.map(movie => {
            return (
            
              
              <div key={movie.id}>
                  
                  
                  
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

  export default HomeMovies

