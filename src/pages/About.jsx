import React from 'react'
import me from '../assets/IMG_1049_Original.jpg'

const About = () => {
    return (
        <div className='mx-auto container flex flex-col md:flex-row gap-10 justify-center items-center text-white  p-4 pt-24 mt-12' >
            <div>
                <h1 className='text-4xl text-blue-100' >Hello, I'm </h1>
                <h1 className='text-4xl' >Toyin Salami</h1>
                <p className='text-lg mb-10'>A Frontend Web Developer with a passion for building intuitive user interface</p>
                <a className='border-2 border-gray rounded-xl px-3 py-1 bg-indigo-300 text-black' href="/contact">Hire Me</a>
            </div>
            
            <div className='max-w-[250px] ' >
            <img src={me} alt='' className='w-full aspect-square ' />
            </div>
            {/* <div className='m-auto' >
            
            </div>
            <div className='text-center text-white ' >


                <div className='mt-4' >
                    <h1 className='text-3xl' >I Am Toyin Salami</h1>
                    <p> A Frontend Developer</p>
                </div>

            </div> */}
        </div>
    )
}

export default About