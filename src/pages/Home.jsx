import React from 'react'
import Empty from '../component/Empty'
import About from './About'
import Project from './Project'
import Certifications from './Certifications'
import Contact from './Contact'

const Home = () => {
  return (
    <div  className=''>
        <Empty/>
        <About/>
        <Project/>
        <Certifications/>
        <Contact/>
    </div>
  )
}

export default Home