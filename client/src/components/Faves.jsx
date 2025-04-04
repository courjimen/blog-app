import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Faves.css';

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

  return (
    <div className="faves-page">
      <h1>Your Favorite Blogs</h1>
      {faveBlogs.map((blog) => (
        <div key={blog.blog_id} className="fave-blog">
          <h3>{blog.title}</h3>
          <h3>Category: {blog.category}</h3>
          <p>{blog.content}</p>
          <Link to={`/blogs/${blog.blog_id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default Faves;