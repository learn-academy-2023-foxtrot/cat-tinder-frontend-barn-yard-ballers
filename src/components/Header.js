import React from 'react'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import cowLogo from "../assests/cows.webp"
import './Header.css'

function Header() {
  return (
    <div className='header-container'>Header
    <Nav className="header-nav">
      <NavItem>
        <NavLink to="/">
          <img
            src={cowLogo}
            alt="Cow Tinder logo with outline of cow"
            className="cow-logo"
          />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/cowindex" className="nav-link">
          Meet the Cows
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/cownew" className="nav-link">
          Add a New Cow
        </NavLink>
      </NavItem>
      <NavItem>
        <a
          target="blank"
          href="./assests/cows.webp"
          alt='cow-tinder-logo'
          className="nav-link"
        >
          Adopt a Cow!
        </a>
      </NavItem>
    </Nav>
    </div>
  )
}

export default Header