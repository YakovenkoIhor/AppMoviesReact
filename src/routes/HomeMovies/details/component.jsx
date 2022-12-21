import {NavLink, useParams, useLocation } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"

import useGetData from '../../../hooks/useGetData'
import {detailsUrl} from '../../../url/url'


import {connect} from "react-redux";
import {setDetailsMovies} from '../../../store/movies/actions';
import {selectDetailsMovies} from '../../../store/movies/selectors';



const Details = ({detailsMovies, setDetailsMovies}) => {

const params = useParams()
useEffect(()=>{
  fetch(detailsUrl(params.movieId.slice(1)))
  .then(res => res.json())
  // .then(data => console.log(data))
  .then(data => setDetailsMovies(data))
})
// const movie = useGetData(detailsUrl(params.movieId.slice(1)))
// console.log(movie.data);
  return (
    <div style={{ background: "pink" }}>Movie<br/>

      <img src={`https://image.tmdb.org/t/p/w500/${detailsMovies.backdrop_path}`} alt={`${detailsMovies.original_title}`}></img>

      <div className="title">{detailsMovies.title}</div>

      <div className="rate">{Math.round(detailsMovies.vote_average*10)+'%'}</div>

      <div className="date">{new Date(detailsMovies.release_date).toDateString()}</div>

      <div className="description">{detailsMovies.overview}</div>

      <nav>
        <Link to= '/' ><button type="submit">Home</button></Link>
      </nav>
    </div>
  );
}

// export default Details;
const mapStateToProps = state => ({
  detailsMovies: selectDetailsMovies(state),
})
const mapDispatchToProps = {
  setDetailsMovies,
}
export default connect(mapStateToProps, mapDispatchToProps)(Details);