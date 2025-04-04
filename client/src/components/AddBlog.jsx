import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/AddBlog.css'
import AiTranslate from './AiTranslate'

function AddBlog({ newBlog }) {
  const [blog, setBlog] = useState({
    title: '',
    category: '',
    content: ''
  })

  const navigate = useNavigate()

  const handleBlogChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value })
  }

  const handleBlogSubmit = async (e) => {
    e.preventDefault()
    console.log("Submit button clicked!");

    if (!blog.title.trim() || !blog.content.trim()) {
      alert('Title and Content cannot be empty.');
      return;
    }
    
    try {
      const res = await fetch('http://localhost:3000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      })

      if (res.ok) {
        alert('Blog submitted successfully!')
        setBlog({
          title: '',
          category: '',
          content: ''
        })
        navigate('/')
      } else {
        alert('Blog submission failed!')
      }
    } catch (error) {
      console.error('Error :', error)
      alert('Error adding blog: ', err)
    }
  }

  return (
    <div className='blog'>
      <h2>Add a New Blog Here</h2>
      <form onSubmit={handleBlogSubmit}>

        {/* Blog Title */}
        <div>
          <label htmlFor='title'>Blog Name:</label>
          <input
            type='text'
            id='title'
            name='title'
            value={blog.title}
            onChange={handleBlogChange}
            required
          />
        </div>

        {/* Blog Category */}
        <div>
          <label htmlFor='category'>Blog Category</label>
          <select
            id='category'
            name='category'
            value={blog.category}
            onChange={handleBlogChange}
            required
          >
            <option value="">Select Preference</option>
            <option value="Inspirational">Inspirational</option>
            <option value="Affirmation">Affirmation</option>
            <option value="Encouragement">Encouragement</option>
            <option value="Peace and Protection">Peace and Protection</option>
          </select>
        </div>

        {/* Blog Content */}
        <div className='blog-form'>
          <label htmlFor='content'>Insert your blog content:</label>
          <textarea
            type='text'
            id='content'
            name='content'
            value={blog.content}
            onChange={handleBlogChange}
            required
          />
        </div>
      </form>
      <AiTranslate />
      <button type='submit' onClick={handleBlogSubmit}>Submit Blog</button>
    </div>
  )
}

export default AddBlog
