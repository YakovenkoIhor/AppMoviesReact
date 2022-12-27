import React from 'react';
import {useParams, Link} from "react-router-dom"

import './styles.scss'

import useGetData from '../../../hooks/useGetData'
import {searchUrl} from '../../../url/url'

import {connect} from "react-redux";
import {setSearchMovies} from '../../../store/movies/actions';
import {selectSearchMovies} from '../../../store/movies/selectors';

import RateAntd from '../../../components/AntDesign/Rate';
import CardAntd from '../../../components/AntDesign/Card';

const Search = ({setSearchMovies, searchMovies}) => {
  	
const params = useParams()

useGetData(searchUrl(params.query.slice(1)), setSearchMovies)

  return (

    <div style={{
          fontSize: 50,
          fontWeight: 700
       }}>{params.query.slice(1)}

      {!searchMovies.results
        ? "Empty list"
        : (

        <div className='movies'>

          {searchMovies.results.map(movie => {

            return (

              <div key={movie.id} className='movie'>
                                                      
                <nav>

                  <Link to= {`/details/:${movie.id}`} >
                    
                  <CardAntd
                      src={movie.poster_path} 
                      alt={movie.original_title}
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
      )}
    </div>
  );
}

  const mapStateToProps = state => ({
    searchMovies: selectSearchMovies(state)
  })
  const mapDispatchToProps = {
    setSearchMovies
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Search);