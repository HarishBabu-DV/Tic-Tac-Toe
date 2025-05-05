import React from 'react'
import { Link } from 'react-router'

const SplashScreen = () => {
  return (
    <section className='w-full h-screen'>
        {/* Tic Tac Toe Shape  */}
        <div>

        </div>
        <h1>Hello &#9995;</h1>
        <h1>Welcome to Tic Tac Toe </h1>
        <Link className='play-button'>
            Play
        </Link>
    </section>
  )
}

export default SplashScreen