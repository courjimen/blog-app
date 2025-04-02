import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home';
import Login from './components/Login';
import Subbies from './components/Subbies';
import Faves from './components/Faves';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/subscribe" element={<Subbies/>} />
        <Route path="/favorites" element={<Faves/>} />
     </Routes>
    </Router>
  )
}

export default App;