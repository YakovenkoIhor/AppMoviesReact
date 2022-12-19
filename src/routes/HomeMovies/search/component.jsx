import {useParams, Link} from "react-router-dom"
import './styles.scss'

import useGetData from '../../../hooks/useGetData'
import {searchUrl} from '../../../url/url'

import {connect} from "react-redux";
// import {addTodo} from '../../store/todos/actions';

const Search = () => {
  	
const params = useParams()

const {data} = useGetData(searchUrl(params.query.slice(1)))
// console.log(data.length);
  return (
    <div style={{ background: "pink" }}>Result search
      {data.length === 0
        ? "Empty list"
        : (
        <div className='movies'>
          
          {data.results.map(movie => {
            return (
              <div key={movie.id} className='movie'>
                                                      
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

  export default Search;

  // const mapStateToProps = state => ({
  //   todos: state.todos,
  // })
  // const mapDispatchToProps = {
  //   addTodo
  // }
  // export default connect(null, mapDispatchToProps)(Search);