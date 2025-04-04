import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import AiTranslate from './AiTranslate'
import Subbies from './Subbies'

function Login() {
  const [loginData, setLoginData] = useState({
    username: ''
  })

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    navigate('/')
    console.log('Login submitted:', loginData)
  }

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
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

      <div className='divider'> OR </div>

      <Subbies />
    </div>
  )
}

export default Login