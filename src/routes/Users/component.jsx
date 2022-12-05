import {NavLink} from "react-router-dom"

import useGetData from '../../hooks/useGetData'

import {url} from '../../url/url'

const Users = () => {

const users = useGetData(url)
  return (
    <div style={{ background: "pink" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {users.data.map(({id, name}) => (
          <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 100px",
              color: isActive ? "red" : "",
              textDecoration: "none",
              background: "gray",
              borderRadius: "15px",
              color: "black"
            };
          }}
          to={`/users/${id}`}
          key={id}
        >
          {name}
        </NavLink>
        ))}
      </nav>
    </div>
  );
}

  export default Users;