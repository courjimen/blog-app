import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import AiTranslate from './AiTranslate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const [blogs, setBlogs] = useState([])
  const [faves, setFaves] = useState([])

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

    const bookmarks = async () => {
      try {
        const res = await fetch('http://localhost:3000/bookmarks/blogs')
        if (res.ok) {
          const data = await res.json()
          setFaves(data)
        } else {
          console.error('Failed to fetch faves')
        }
      } catch (err) {
        console.error('Error fetching faves:', err)
      }
    }
    showBlogs()
    bookmarks()
  }, [])

  const showFaves = async (blogId) => {
    try {
      if (faves.includes(blogId)) {
        const deleteRes = await fetch(`http://localhost:3000/bookmarks/${blogId}`, {
          method: 'DELETE',
        })
        if (deleteRes.ok) {
          setFaves(faves.filter((id) => id !== blogId))
        } else {
          console.error('Failed to delete fave')
        }
      } else {
        const postRes = await fetch('http://localhost:3000/bookmarks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ blogId }),
        })
        if (postRes.ok) {
          setFaves([...faves, blogId])
        } else {
          console.error('Failed to add fave')
        }
      }
    } catch (err) {
      console.error('Error adding fave:', err)
    }
  }
  const deleteBlog = async (blogId) => {
    try {
      const res = await fetch(`http://localhost:3000/blogs/${blogId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        // Remove the deleted blog from the local state
        setBlogs(blogs.filter((blog) => blog.blog_id !== blogId));
      } else {
        console.error('Failed to delete blog');
      }
    } catch (err) {
      console.error('Error deleting blog:', err);
    }
  };
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
            <FontAwesomeIcon icon={faHeart}
              className={`fave-icon ${faves.includes(blog.blog_id) ? 'favorited' : ''}`}
              onClick={() => showFaves(blog.blog_id)} />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="delete-icon"
              onClick={() => deleteBlog(blog.blog_id)}
            />
            <h3>{blog.title}</h3>
            <h3>Category: {blog.category}</h3>
            <p>{blog.content.substring(0, 100)}...</p>
            <Link to={`/blogs/${blog.blog_id}`}>Read More</Link>
          </div>
        ))}
      </div>
      <Link to="/new">Add New Blog</Link>
    </div>
  )
}

export default Home