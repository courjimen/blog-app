import React from 'react'
import NavBar from './NavBar'
import '../styles/Home.css'
import AddBlog from './AddBlog'


function Home() {
  return (
    <div className='home-page'>
      <h1 className='home-header'>Welcome to my Blog</h1>
      <NavBar />
      <AddBlog />

    </div>
  )
}

export default Home