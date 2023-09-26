import React from 'react'

const Button = (props) => {
    function getStarted(e){
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
  return (
    <div>
        <button onClick={getStarted} className='bg-indigo-600 text-white py-2 px-6  rounded md:ml-8 hover:bg-indigo-400 duration-500' >
        {props.children}
        </button>
    </div>
  )
}

export default Button