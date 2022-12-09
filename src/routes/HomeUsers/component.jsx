import {Link} from "react-router-dom"

const HomeInvoices = () => {
    return (
      <div
      style={{
        background: "pink"
       }}
      >
        <h1>Users</h1>

        <p>User information</p>

        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link 
          style={{
            textDecoration: "none",
            color: "black"
           }}
          to="/users">
            
            <botton 
                style={{    
                  background: "gray",
                  borderRadius: "17px",
                  padding: "4px 20px",
                  textDecoration: "none",
              }}
              >Users
            </botton>
            
          </Link>

          <Link 
          style={{
            textDecoration: "none",
            color: "black"
           }}
          to="/posts">
            
            <botton 
                style={{    
                  background: "gray",
                  borderRadius: "17px",
                  padding: "4px 20px",
                  textDecoration: "none",
              }}
              >Posts
            </botton>
            
          </Link>
        </nav>
      </div>
    );
  }

  export default HomeInvoices