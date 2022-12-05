import { Routes, Route } from "react-router-dom";

import HomeMuvies from '../../routes/HomeMuvies'
import Users from '../../routes/Users'
import User from '../../routes/Users/User'
import Error from '../../routes/Error'
import Posts from '../../routes/Posts'

const MainMuvies = () => {

  return (
      <Routes>

        <Route path="/" element={<HomeMuvies />} />
        
        {/* <Route path="users" element={<Users/>} />

        <Route path="users/:userId" element={<User/>} />

        <Route path="*" element={<Error />} />

        <Route path="posts" element={<Posts />} /> */}

      </Routes>
  )
}

  export default MainMuvies;