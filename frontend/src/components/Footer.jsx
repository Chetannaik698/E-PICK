import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-section left-section">
        <h2>E-PICK<span>.</span></h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      <div className="footer-section center-section">
        <h3>COMPANY</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/">Delivery</a></li>
          <li><a href="/">Privacy policy</a></li>
        </ul>
      </div>

      <div className="footer-section right-section">
        <h3>GET IN TOUCH</h3>
        <ul>
          <li><a href="tel:+1000000000">+1-000-000-0000</a></li>
          <li><a href="mailto:greatstackdev@gmail.com">epickbussiness@gmail.com</a></li>
          <li><a href="/">instagram</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2026@ epick- All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
