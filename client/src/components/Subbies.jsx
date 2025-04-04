import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Subbies() {

  const [subscribe, setSubscribe] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contentPref: ''
  })

  const navigate = useNavigate()

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    console.log('Thanks for subscribing:', subscribe)
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

        {/* Last Name */}
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            name="lastName"
            value={subscribe.lastName}
            onChange={handleSubscribeChange}
            required
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
          <option value="inspirational">Inspirational</option>
          <option value="affirmation">Affirmation</option>
          <option value="encouragement">Encouragement</option>
          <option value="peaceAndProtection">Peace and Protection</option>
          </select>
        </div>


        <button type='submit'>Subscribe</button>
      </form>
    </div>
  )
}

export default Subbies