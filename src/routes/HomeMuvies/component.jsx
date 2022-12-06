import React, { useState, useEffect } from 'react';

import './styles.scss'

import { useFormik } from 'formik';

import * as Yup from 'yup';

const {REACT_APP_API_KEY} = process.env;


const HomeMuvies = () => {

  // const [movies, setMovies] = useState([])

  const formik = useFormik({
      
    initialValues: {
      search: '',
    },

    validationSchema: Yup.object({
      search: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),

    // onSubmit: values => {
        
    //   fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       title: values.title,
    //       body: values.body,
    //       userId: values.userId
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then(post => {setPosts([...posts, post])}
    //     );

    //   formik.resetForm({
    //     values: {body: ''},
    //   });

    // },
  });

  const API = 'https://api.themoviedb.org/3/movie/';
  const generateUrl = `${API}popular?api_key=${REACT_APP_API_KEY}`

  const useGetData = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(setData)
            // .catch(setError)
            // .finally(() => setLoading(false))
    },[])
    return {
        data,
        // error,
        // loading
    }
  }
  const movies = useGetData(generateUrl)
  console.log( movies.data.results);
  let tmp = movies.data.results
  tmp.map(movie => console.log(movie))
   

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
            <label htmlFor="body" >Body</label>
            <input 
              id="body"
              name="body"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>

          <button type="submit">Search</button>

        </form>

        <div>
          Popular
          {/* {movies.map(movie => {
        return (
          <span key={movie.id}>
            Title: {movie.title} <br />
          </span>
        )
      }
      )} */}
      
        </div>

      </div>
    );
  }

  export default HomeMuvies