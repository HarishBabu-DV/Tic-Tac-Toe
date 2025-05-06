import React from 'react'
import { Link } from 'react-router'

const SplashScreen = () => {
  return (
    <section className='w-full h-screen py-10 flex flex-col gap-4 lg:flex-row bg-gray-50 lg:gap-0'>
        {/* Tic Tac Toe Shape  */}
        <div className='xo-container '>
            <div className='x-shape size-[100px] lg:size-[150px]'/> 
            <div className='o-shape size-[100px] lg:size-[150px]'>
              <div className='size-[50px] lg:size-[75px] rounded-full bg-gray-50'>
              </div>
            </div>
        </div>
        <div className='welcome-msg-container '>
          <h1 className='text-center text-2xl font-semibold lg:text-4xl'>Hello &#9995;</h1>
          <h1 className='text-center text-2xl font-semibold lg:text-4xl'>Welcome to Tic Tac Toe </h1>
            <Link to={'/game'} className='play-button'>
                Play
            </Link>
         
        </div>
    </section>
  )
}

export default SplashScreen