import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import hero from '../assets/hero.png'

const Home = () => {

  return (
    <div>
      <Navbar />
      
      <section className='hero'>
        <div className="theme">
          <div className="left">
              
          </div>
          <div className="right">
            <img src={hero} alt="" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
