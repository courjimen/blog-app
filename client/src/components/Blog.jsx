import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:3000/blogs/${id}`);
        if (res.ok) {
          const data = await res.json();
          setBlog(data);
        } else {
          console.error('Failed to fetch blog');
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
      }
    };
    fetchBlog();
  }, [id]); 

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <h3>Category: {blog.category}</h3>
      <p>{blog.content}</p>
    </div>
  );
}

export default Blog;