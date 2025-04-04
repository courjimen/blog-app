import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home';
import Login from './components/Login';
import Subbies from './components/Subbies';
import Faves from './components/Faves';
import AddBlog from './components/AddBlog';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/subscribe" element={<Subbies/>} />
        <Route path="/bookmarks/blogs" element={<Faves/>} />
        <Route path="/new" element={<AddBlog />} />
        <Route path="/blogs/:id" element={<Blog />} />
     </Routes>
    </Router>
  )
}

export default App;