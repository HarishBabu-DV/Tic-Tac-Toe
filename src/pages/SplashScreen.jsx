import React from 'react'
import { Link } from 'react-router'

const SplashScreen = () => {
  return (
    <section className='w-full h-screen py-10 flex flex-col gap-4 bg-gray-50'>
        {/* Tic Tac Toe Shape  */}
        <div className='flex items-center justify-center gap-5 h-1/2 '>
            <div className='x-shape size-[100px] '/> 
            <div className='o-shape size-[100px] '>
              <div className='size-[50px] rounded-full bg-gray-50'>
              </div>
            </div>
        </div>
        <div className='h-1/2 flex flex-col gap-8 items-center'>
          <h1 className='text-center text-2xl font-semibold'>Hello &#9995;</h1>
          <h1 className='text-center text-2xl font-semibold'>Welcome to Tic Tac Toe </h1>
            <Link className='play-button'>
                Play
            </Link>
         
        </div>
    </section>
  )
}

export default SplashScreen