import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Navbar.css'
import { HashLink } from 'react-router-hash-link'


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <HashLink to="/#home">CODING-SHARK</HashLink>
      </div>
      <div className="nav-links">
        <li><HashLink to="/#home">Home</HashLink></li>
        <li><HashLink smooth to="/#about">About</HashLink></li>
        <li><HashLink smooth to="/#brands">Brands</HashLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
      </div>
    </nav>
  )
}

export default Navbar