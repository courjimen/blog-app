import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import AiTranslate from './AiTranslate'

function Login() {
  const [loginData, setLoginData] = useState({
    username: ''
  })

  const [createAcct, setCreateAcct] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: ''
  })

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', loginData)
  }

  const handleCreateAcctSubmit = (e) => {
    e.preventDefault();
    console.log('Create account submitted:', createAcct)
    navigate('/')
  }

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const handleCreateAcctChange = (e) => {
    setCreateAcct({ ...createAcct, [e.target.name]: e.target.value })
  }

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <div className='login-page'>
      <div className='login-form'>
        <h2>Login</h2>
        <AiTranslate />
        <form onSubmit={handleLoginSubmit}>

          {/* Username */}
          <div>
            <label htmlFor='username'>Username<span className="required-star">*</span></label>
            <input
              type='text'
              id='username'
              name='username'
              value={loginData.username}
              onChange={handleLoginChange}
              required
            />
          </div>
        
          <button type='submit'>Sign In</button>
        </form>
      </div>

      <div className='divider'>OR</div>

      <div className='create-acct'>
        <h2>Create an Account</h2>
        <form onSubmit={handleCreateAcctSubmit}>

          {/* First Name */}
          <div>
            <label htmlFor='firstName'>First Name<span className="required-star">*</span></label>
            <input
            type='text'
            id='firstName'
            name="firstName"
            value={createAcct.firstName}
            onChange={handleCreateAcctChange}
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
            value={createAcct.lastName}
            onChange={handleCreateAcctChange}
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
            value={createAcct.email}
            onChange={handleCreateAcctChange}
            required
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor='username'>Username<span className="required-star">*</span></label>
            <input
            type='text'
            id='username'
            name="username"
            value={createAcct.username}
            onChange={handleCreateAcctChange}
            required
            />
          </div>
          <button type='submit'>Create Account</button>
          <button className='go-back' onClick={handleGoBack}>Go Back</button>
        </form>
      </div>
    </div>
  )
}

export default Login