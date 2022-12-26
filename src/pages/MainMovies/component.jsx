import { Routes, Route } from "react-router-dom";

import HomeMovies from '../../routes/HomeMovies'
import Search from '../../routes/HomeMovies/search'
import Details from '../../routes/HomeMovies/details'
import Error from '../../routes/HomeMovies/Error'

const MainMovies = () => {

  return (
      <Routes>

        <Route path="/" element={<HomeMovies />} />
        
        <Route path="/search/:query" element={<Search/>} />

        <Route path="/details/:movieId" element={<Details/>} />

        <Route path="*" element={<Error />} />

      </Routes>
  )
}

  export default MainMovies;