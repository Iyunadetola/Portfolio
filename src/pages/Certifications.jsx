import React from 'react'

const Certifications = () => {
    return (
        <div className='md:flex justify-around p-10 ' >
            <div>
                <h1 className='font-bold text-xl md:mt-0 mt-5 ' >University of Michigan</h1>
                <ul className='list-decimal leading-loose' >


                    <li>Introduction to HTML5</li>
                    <li>Introduction to CSS3</li>
                    <li>Interactivity with Javascript</li>
                    <li>Advanced Styling with Responsive Design</li>
                    <li>
                        Web Design for Everybody Capstone</li>
                </ul>
            </div>

            <div>
                <h1 className='font-bold text-xl md:mt-0 mt-5 ' >Meta</h1>
                <ul className='list-decimal leading-loose' >
                    <li>Introduction to Frontend Development</li>
                    <li>HTML and CSS in depth</li>
                    <li>Programming with Javascript</li>
                    <li>Version Control</li>
                    <li>React Basics</li>
                    <li>Advanced React</li>
                    <li>Principles of UX/UI Design</li>
                    <li>Front-End Developer Capstone </li>

                </ul>
            </div>


        </div>
    )
}

export default Certifications

