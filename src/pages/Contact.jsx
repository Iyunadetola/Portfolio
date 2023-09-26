import React from 'react'
import { IoMailOutline } from 'react-icons/io5'
import { FiPhoneCall } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className='flex text-2xl p-10 gap-10 bg-indigo-600 text-white justify-center mt-20 ' >
        <a href="mailto:aderetitoyin89@gmail.com"> 
        < IoMailOutline/>
        </a>
        <a href="tel:+2347036674899">
        < FiPhoneCall/>
        </a>
        <a href="https://github.com/Iyunadetola">
        < FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/oluwatoyin-salami-b8a54a140/">
        < FaLinkedinIn />
        </a>
    </div>
  )
}

export default Contact