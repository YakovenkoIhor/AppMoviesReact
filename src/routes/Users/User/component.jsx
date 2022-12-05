import { useParams, Link } from "react-router-dom";

import useGetData from '../../../hooks/useGetData'

import {url} from '../../../url/url'

const User = () => {
  let {userId} = useParams();

  const user = useGetData(`${url+userId}`, userId)

  if(!userId) {
    return (
        <main style={{ padding: "1rem" }}>
          <p>Select an invoice</p>
        </main>
    )
  }
  return (
    <main style={{
      padding: "1rem",
      background: "pink"
     }}>
      <h2>Name: {user.data.name}</h2>
      <p>User name: {user.data.username}</p>
      <p>Phone: {user.data.phone}</p>
      <p>Email: {user.data.email}</p>
      <p>Website: {user.data.website}</p>

      <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/users"
          style={{
            textDecoration: "none",
            color: "black"
          }}
          >
          <botton 
              style={{    
                background: "gray",
                borderRadius: "17px",
                padding: "4px 20px",
                textDecoration: "none",
            }}
            
            >Users</botton>
          </Link>
        </nav>
    </main>
  );
}

  export default User;