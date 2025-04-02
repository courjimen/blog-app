import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li className='nav-item'>
          <Link to="/">Home</Link>
        </li>
        <li className='nav-item'>
          <Link to="/login">Login</Link>
        </li>
        <li className='nav-item'>
          <Link to="/Subscribe">Subscribe</Link>
        </li>
        <li className='nav-item'>
          <Link to="/Favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar