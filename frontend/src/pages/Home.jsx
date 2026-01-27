import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'

const Home = () => {

  return (
    <div>
      <Navbar />
      
      <section className='hero'>
        <div className="left">left</div>
        <div className="right">right</div>
      </section>

    </div>
  )
}

export default Home
