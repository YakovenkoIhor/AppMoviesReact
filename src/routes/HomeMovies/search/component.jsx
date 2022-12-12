import {useParams, Link} from "react-router-dom"

import useGetData from '../../../hooks/useGetData'
import {searchUrl} from '../../../url/url'

const Search = () => {
  	
const params = useParams()

const movies = useGetData(searchUrl(params.query.slice(1)))

  return (
    <div style={{ background: "pink" }}>Result search
      {movies.data.length === 0
        ? "Empty list"
        : (
        <div>
          
          {movies.data.results.map(movie => {
            return (
              <span key={movie.id}>
                  Title: {movie.title} <br />
                  <nav>
                    <Link to= {`/details/:${movie.id}`} ><button type="submit">Details</button></Link>
                  </nav>
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