import {NavLink, useParams, useLocation } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"

import useGetData from '../../../hooks/useGetData'
import {detailsUrl} from '../../../url/url'

const Details = () => {

const params = useParams()
const movie = useGetData(detailsUrl(params.movieId.slice(1)))

  return (
    <div style={{ background: "pink" }}>movies<br/>
      <span>{movie.data.title}</span>
      <nav>
        <Link to= '/' ><button type="submit">Home</button></Link>
      </nav>
    </div>
  );
}

export default Details;