import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import hero from '../assets/hero.png'
import dash from '../assets/dash.png'

const Home = () => {

  return (
    <div>
      <Navbar />
      
      <section className='hero'>
        <div className="theme">
          <div className="left">
            <div className="hero-content">
              <p className="label">OUR PICKS FOR YOU</p>
              <h1>Latest Styles</h1>
              <p className="shop-label">EXPLORE NOW</p>
            </div>
          </div>
          <div className="right">
            <img src={hero} alt="Hero" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
