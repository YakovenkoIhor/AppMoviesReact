import {NavLink, useParams, useLocation } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"

import useGetData from '../../../hooks/useGetData'
import {detailsUrl} from '../../../url/url'

const Details = () => {

const params = useParams()
const movie = useGetData(detailsUrl(params.movieId.slice(1)))
console.log(movie.data);
  return (
    <div style={{ background: "pink" }}>Movie<br/>

      <img src={`https://image.tmdb.org/t/p/w500/${movie.data.backdrop_path}`} alt={`${movie.data.original_title}`}></img>

      <div className="title">{movie.data.title}</div>

      <div className="rate">{Math.round(movie.data.vote_average*10)+'%'}</div>

      <div className="date">{new Date(movie.data.release_date).toDateString()}</div>

      <div className="description">{movie.data.overview}</div>

      <nav>
        <Link to= '/' ><button type="submit">Home</button></Link>
      </nav>
    </div>
  );
}

export default Details;