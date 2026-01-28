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
            <div className="hero-content">
              <p className="label">OUR BESTSELLERS</p>
              <h1>Latest Arrivals</h1>
              <p className="shop-label">SHOP NOW</p>
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
