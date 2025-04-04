import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../styles/AddBlog.css'

library.add(faLanguage)

function AddBlog() {
  const [blog, setBlog] = useState({
    title: '',
    category: '',
    content: ''
  })

  const navigate = useNavigate()

  const handleBlogChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value })
  }

  const handleBlogSubmit = (e) => {
    e.preventDefault()
    alert('Thanks for submitting your blog!')
    navigate('/')

    setBlog({
      title: '',
      category: '',
      content: ''
    })
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
            <option value="inspirational">Inspirational</option>
            <option value="affirmation">Affirmation</option>
            <option value="encouragement">Encouragement</option>
            <option value="peaceAndProtection">Peace and Protection</option>
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
      <div id="google_translate_element">
      <FontAwesomeIcon icon={faLanguage} className="translate-icon" />
      </div>
      <button type='submit'>Submit Blog</button>
    </div>
  )
}

export default AddBlog
