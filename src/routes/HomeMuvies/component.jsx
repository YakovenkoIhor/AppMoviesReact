import React, { useState, useEffect } from 'react';

import './styles.scss'

import { useFormik } from 'formik';

import * as Yup from 'yup';

import {Link, useNavigate } from "react-router-dom"

import {popularUrl} from '../../url/url'
import useGetData from '../../hooks/useGetData'

const HomeMovies = () => {
  const [res, setRes] = useState([])

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
      
     setRes(values.search)
    
      formik.resetForm({
        values: {search: ''},
      });    
      
    },
    
  });
  
  let navigate = useNavigate();
  const goSearch = () => {navigate(`/search/:${res}`, { state: res})};

  const movies = useGetData(popularUrl)
   
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
              value={formik.values.search}
            />
          </div>

          <button type="submit" onClick={goSearch}  >Search</button>

          {/* onClick={goSearch} */}
            {/* <nav>
              <Link to="/search"><button type="submit">Search</button></Link>
            </nav> */}
  
        </form>

        {movies.data.length === 0
        ? "Empty list"
        : (
        <div>
          Popular
          
          {movies.data.results.map(movie => {
            return (
              <span key={movie.id}>
                  Title: {movie.title} <br />
              </span>
            )
          }
        )}
      </div>
      )}
      </div>

    );
  }

  export default HomeMovies

