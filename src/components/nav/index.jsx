import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'

const NavBar = () => (
  <nav className="navbar">
    <NavLink exact className="navlinks" to="/">Awesome Shoping</NavLink>
  </nav>
)

export default NavBar
