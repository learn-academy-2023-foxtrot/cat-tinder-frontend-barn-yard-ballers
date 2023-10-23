import React from 'react'
import { Nav, Navbar, NavbarBrand, NavItem, Button } from "reactstrap"
import { NavLink } from "react-router-dom"
import cowLogo from "../assests/cows.webp"
import '../App.css'

function Header() {
  return (
    <>
    <Navbar className='navbar'>
          <div className='header-container'>Bovine Mingle
    <Nav className="header-nav">
        <NavbarBrand href="/">
          <img
            className="cow-logo"
            alt="Cow Tinder logo with outline of cow"
            src={cowLogo}
            style={{
              height: 60,
              width: 60,
            }}
            />
        </NavbarBrand>
      <ul className='nav-item'>
      <NavItem>
        <NavLink to="/cowindex/">
          <Button >
          Meet the Cows
          </Button>
          </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/cownew/">
          <Button>
             Add a New Cow 
            </Button>
             </NavLink>
      </NavItem>
      </ul>
    </Nav>
    </div>
    </Navbar>
    </>
  )
}

export default Header