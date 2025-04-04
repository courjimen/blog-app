import React, { useState, useEffect} from 'react'
import NavBar from './NavBar'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import AiTranslate from './AiTranslate'


function Home() {
  const [blogs, setBlogs] = useState([])
 
  useEffect(() => {
    const showBlogs = async () => {
      try {
      const res = await fetch('http://localhost:3000/blogs')
      if (res.ok) {
        const data = await res.json()
        setBlogs(data)
      } else {
        console.error('Failed displaying blogs')
      }
    } catch (err) {
      console.error('Error displaying blogs:', err)
    }
  }
  showBlogs();
}, []);

  return (
    <div className='home-page'>
      <h1 className='home-header'>Welcome to my Blog</h1>
      <NavBar />
      <AiTranslate />

      {/* Display Blogs */}
      
        <h2>Blog Posts</h2>
        <div className='blog-list'>
        {blogs.map((blog) => (
          <div key={blog.blog_id} className='blog-square'>
            <h3>{blog.title}</h3>
            <h3>Category: {blog.category}</h3>
            <p>{blog.content.substring(0, 100)}...</p>
            <Link to={`/blog/${blog.blog_id}`}>Read More</Link>
          </div>
        ))}
      </div>
      <Link to="/new">Add New Blog</Link>
    </div>
  )
}

export default Home