import React from 'react';

import './styles.scss'

import { useFormik } from 'formik';

import * as Yup from 'yup';

import {Link, useNavigate } from "react-router-dom"

import {popularUrl} from '../../url/url'
import useGetData from '../../hooks/useGetData'

import {connect} from "react-redux";
import {setPopularMovies} from '../../store/movies/actions';
import {selectPopularMovies} from '../../store/movies/selectors';

import RateAntd from '../../components/AntDesign/Rate';
import ButtonSearchAntd from '../../components/AntDesign/ButtonSearch';
import CardAntd from '../../components/AntDesign/Card';

const HomeMovies = ({movies, setPopularMovies}) => {

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
      navigate(`/search/:${formik.values.search}`);
             
      formik.resetForm();    
    },    
  });
  
  let navigate = useNavigate();

  useGetData(popularUrl, setPopularMovies)
  
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row'
         }}>
          <div>
            <h1>Movies</h1>
            <p>Movie search and description</p>
          </div>
        
        <form onSubmit={formik.handleSubmit} >

          <div>
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

          <button type="submit" className='buttonSearch'><ButtonSearchAntd/></button>
        </form>

        </div>
        {!movies.results ? "Empty list": (

        <>
        <div className='popular'>Popular movies</div>

        <div className='movies'>
          
          {movies.results.map(movie => {

            return (

              <div key={movie.id} className='movie'>
                                                      
                <nav>

                  <Link to= {`/details/:${movie.id}`} >
                    
                    <CardAntd
                      src={movie.poster_path} 
                      alt={`${movie.original_title}`}
                      title={movie.title}
                      date={new Date(movie.release_date).toDateString()}
                    >
                      <RateAntd
                        rate = {movie.vote_average}
                        />
                    </CardAntd>                  
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

 const mapStateToProps = state => ({
    movies: selectPopularMovies(state)
  })
  const mapDispatchToProps = {
    setPopularMovies
  }
  export default connect(mapStateToProps, mapDispatchToProps)(HomeMovies);
