import { Routes, Route } from "react-router-dom";

import HomeMovies from '../../routes/HomeMovies'
import Search from '../../routes/HomeMovies/search'
import User from '../../routes/Users/User'
import Error from '../../routes/Error'
import Posts from '../../routes/Posts'

const MainMovies = () => {

  return (
      <Routes>

        <Route path="/" element={<HomeMovies />} />
        
        <Route path="/search/:query" element={<Search/>} />

        {/* <Route path="users/:userId" element={<User/>} />

        <Route path="*" element={<Error />} />

        <Route path="posts" element={<Posts />} /> */}

      </Routes>
  )
}

  export default MainMovies;