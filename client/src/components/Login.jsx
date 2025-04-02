import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const [createAcct, setCreateAcct] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    //make call to backend with authentification
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

  return (
    <div className='login-page'>
      <div className='login-form'>
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              value={loginData.username}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='text'
              id='password'
              name='password'
              value={loginData.password}
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
        
      </div>
    </div>
  )
}

export default Login