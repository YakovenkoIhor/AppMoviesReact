import React from 'react';
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"

import useGetData from '../../../hooks/useGetData'
import {detailsUrl} from '../../../url/url'

import {connect} from "react-redux";
import {setDetailsMovies} from '../../../store/movies/actions';
import {selectDetailsMovies} from '../../../store/movies/selectors';

import ButtonHomeAntd from '../../../components/AntDesign/ButtonHome';
import CardDetails from '../../../components/AntDesign/CardDetails';
import RateAntd from '../../../components/AntDesign/Rate';


const Details = ({detailsMovies, setDetailsMovies}) => {

const params = useParams()
useGetData(detailsUrl(params.movieId.slice(1)), setDetailsMovies)

  return (
    <div style={{
          fontSize: 50,
          fontWeight: 700
       }}>Movie

      <CardDetails
        src={detailsMovies.backdrop_path} 
        alt={detailsMovies.original_title}
        title={detailsMovies.title}
        date={new Date(detailsMovies.release_date).toDateString()}
        description={detailsMovies.overview}
      >
        <RateAntd
        rate = {detailsMovies.vote_average}
        />
      </CardDetails>

      <nav>
        <Link to= '/' ><ButtonHomeAntd/></Link>
      </nav>
    </div>
  );
}

const mapStateToProps = state => ({
  detailsMovies: selectDetailsMovies(state),
})
const mapDispatchToProps = {
  setDetailsMovies,
}
export default connect(mapStateToProps, mapDispatchToProps)(Details);