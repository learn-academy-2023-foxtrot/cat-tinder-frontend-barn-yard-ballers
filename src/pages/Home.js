import React from 'react'
import cowLogo from "../assests/cows.webp"
import { NavLink } from "react-router-dom"
import { Button } from 'reactstrap'

function Home() {
  return (
    < div className='main-container'>
    <h1>Welcome to Bovine Mingle</h1>
      <h3>The best site to meet up with other cows!</h3>
      <br />
      <br />
      <img
        alt="logo"
        src={cowLogo}
        style={{
          height: 300,
          width: 300,
          borderRadius: 25
        }}
      />
      <br />
      <br />
      <Button>
        <NavLink to={`/cowindex`} className="nav-link">
          Click to view more
        </NavLink>
      </Button>
    </div>
  )
}

export default Home