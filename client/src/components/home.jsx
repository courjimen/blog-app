import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-page'>
        <nav className='nav-bar'>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/Subscribe">Subscribe</Link>
                </li>
                <li>
                    <Link to="/Favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
        
    </div>
  )
}

export default Home