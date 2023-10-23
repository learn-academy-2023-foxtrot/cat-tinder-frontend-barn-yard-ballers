import React from 'react'
import './Footer.css'
import {Navbar} from 'reactstrap'

function Footer() {
  return (
    <>
      <Navbar className='navbar-footer' fixed="bottom">
        <p id='footer-text'>&copy; 2023 Louis & Tori, Bovine Mingle </p>
      </Navbar>
    </>
  )
}

export default Footer