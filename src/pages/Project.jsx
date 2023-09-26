import React from 'react'
import img1 from '../assets/Screen Shot 2023-09-26 at 12.37.52 PM.jpg'
import img2 from '../assets/Screen Shot 2023-09-26 at 12.35.33 PM.jpg'
import img3 from '../assets/Screen Shot 2023-09-26 at 12.39.04 PM.jpg'
import img4 from '../assets/Screen Shot 2023-09-26 at 12.45.21 PM.jpg'


const Project = () => {
    return (
        <div className='mt-28 bg-indigo-100 md:block; '  >
            <div className='md:flex justify-center gap-10 p-8 ' >
                <div className='' >
                    <img src={img1} alt='' style={{ width: 500 }} />
                    <h3 className='text-xl font-bold pt-4 ' >A Food Gallery</h3>
                    <p className='text-xs' >Consist of different images of food, you can use the search bar to search for the type <br/> of food you like</p>
                    <a className='text-xs font-semibold ' target='_blank' href="https://github.com/Iyunadetola">See More</a>
                </div>

                <div className='mt-5 md:mt-0' >
                    <img src={img2} alt='' style={{ width: 500 }} />
                    <h3 className='text-xl font-bold pt-4 ' >A Movie App</h3>
                    <p className='text-xs' >A Movie App that allows you to search for latest movies and also to see the details of  <br/> the movies searched</p>
                    <a className='text-xs font-semibold' target='_blank' href="https://github.com/Iyunadetola">See More</a>
                </div>
            </div>

            <div className='md:flex justify-center gap-10 p-4 ' >
                <div className='mt-5 md:mt-0' >
                    <img src={img3} alt='' style={{ width: 500 }} />
                    <h3 className='text-xl font-bold pt-4 ' >An Intro Section App</h3>
                    <p className='text-xs' >An app that allows you to make remote work and get your team in synchronization <br/> no matter the location</p>
                    <a className='text-xs font-semibold pb-4' target='_blank' href="https://github.com/Iyunadetola">See More</a>

                </div>

                <div className='mt-5 md:mt-0' >
                    <img src={img4} alt='' style={{ width: 500 }} />
                    <h3 className='text-xl font-bold pt-4 ' >Coursera React Portolio</h3>
                    <p className='text-xs' >This project was built during the time i was taking the Meta Avanced React <br/> Course on Coursera.</p>
                    <a className='text-xs font-semibold' target='_blank' href="https://github.com/Iyunadetola">See More</a>

                </div>
            </div>

        </div>
    )
}

export default Project