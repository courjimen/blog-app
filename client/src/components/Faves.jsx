import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Faves.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Faves() {
  const [faveBlogs, setFaveBlogs] = useState([]);
  
  useEffect(() => {
    const fetchFaveBlogs = async () => {
      try {
        const res = await fetch(`http://localhost:3000/bookmarks/blogs`)
        if (res.ok) {
          const blogs = await res.json()
            setFaveBlogs(blogs);
        } else {
          console.error('Failed to fetch favorite blogs');
        }
      } catch (err) {
        console.error('Error fetching favorite blogs:', err);
      }
    }
    fetchFaveBlogs()
  }, []);

  const deleteFave = async (blogId) => {
    try {
      const res = await fetch(`http://localhost:3000/bookmarks/${blogId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        // Remove the deleted blog from the local state
        setFaveBlogs(faveBlogs.filter((blog) => blog.blog_id !== blogId))
      } else {
        console.error('Failed to delete blog')
      }
    } catch (err) {
      console.error('Error deleting blog:', err)
    }
  }

  return (
    <div className="faves-page"> 
      <h1>Your Favorite Blogs</h1>
      {faveBlogs.map((blog) => (
        <div key={blog.blog_id} className="fave-blog">
    <FontAwesomeIcon icon={faTrashAlt}
              className="delete-icon"
              onClick={() => deleteFave(blog.blog_id)}
            />
          <h2>{blog.title}</h2>
          <h3>Category: {blog.category}</h3>
          <p>{blog.content.substring(0,100)}...</p>
          <Link to={`/blogs/${blog.blog_id}`}>Read More</Link>
        </div>
      ))}
      <Link to='/'>Go Back</Link>
    </div>
  );
}

export default Faves;