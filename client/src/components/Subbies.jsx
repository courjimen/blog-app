import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/Login.css'
import AiTranslate from './AiTranslate'

function Subbies() {

  const [subscribe, setSubscribe] = useState({
    firstName: '',
    username: '',
    email: '',
    contentPref: ''
  })

  const navigate = useNavigate()

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for subscribing!')
    navigate('/')
  }

  const handleSubscribeChange = (e) => {
    setSubscribe({ ...subscribe, [e.target.name]: e.target.value })
  }

  return (
    <div className='subbie-form'>
      <h2>Subscribe to my Blog!</h2>
      <form onSubmit={handleSubscribeSubmit}>

        {/* First Name */}
        <div>
          <label htmlFor='firstName'>First Name<span className="required-star">*</span></label>
          <input
            type='text'
            id='firstName'
            name="firstName"
            value={subscribe.firstName}
            onChange={handleSubscribeChange}
            required
          />
        </div>

        {/* username */}
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name="username"
            value={subscribe.username}
            onChange={handleSubscribeChange}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor='email'>Email<span className="required-star">*</span></label>
          <input
            type='email'
            id='email'
            name="email"
            value={subscribe.email}
            onChange={handleSubscribeChange}
            required
          />
        </div>

        {/* Preferences */}
        <div>
          <label htmlFor='contentPref'>Content Preferences</label>
          <select
            id='contentPref'
            name="contentPref"
            value={subscribe.contentPref}
            onChange={handleSubscribeChange}
          >

          <option value="">Select Preference</option>
          <option value="Inspirational">Inspirational</option>
          <option value="Affirmation">Affirmation</option>
          <option value="Encouragement">Encouragement</option>
          <option value="Peace and Protection">Peace and Protection</option>
          </select>
        </div>

        <AiTranslate />
        <button type='submit'>Subscribe</button>
      </form>
      <br/>
      <Link to='/'>Go Back Home</Link>
    </div>
  )
}

export default Subbies