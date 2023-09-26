import React from 'react'
import Nav from './component/Nav'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Certifications from './pages/Certifications'
import Project from './pages/Project'

function App() {

  return (
    <div  >
      <HashRouter>
      <Nav/>
      <div className='bg-indigo-600 w-full h-screen' >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/certifications' element={<Certifications/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
      </HashRouter>
    </div>
  )
}

export default App
