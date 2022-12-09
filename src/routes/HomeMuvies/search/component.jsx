import {NavLink, useParams, useLocation } from "react-router-dom"
import React, { useState, useEffect } from 'react';

import useGetData from '../../../hooks/useGetData'
import {searchUrl} from '../../../url/url'

const Search = () => {

const { state } = useParams()
console.log(useLocation().state);

const movies = useGetData(searchUrl(useLocation().state))

  return (
    <div style={{ background: "pink" }}>Result search
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

  export default Search;