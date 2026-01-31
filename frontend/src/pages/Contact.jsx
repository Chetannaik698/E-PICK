import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Contact.css'
import contact from '../assets/contact.png'
import Discount from '../components/Discount'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <div className="contact">
          <div className="contact-us"> CONTACT US</div>
          <div className="contact-details">
            <div className="contact-pic">
              <img src={contact} alt="" />
          </div>
            <div className="contact-info">
              <div className="our-store">
                <h2><b>Our Store</b></h2>
              </div>
              <div className="address"><h3>
                54709 Willms Station <br />
                Suite 350, Washington,
                <br /> USA</h3>
              </div>
              <div className="tel"> <h3>
                Tel: (415) 555-0132 <br />
                Email: <br /> 
                admin@forever.com </h3>
              </div>
              <div className="careers"><h3><b>Careers at Forever</b></h3></div>
              <div className="learn"><p><h4>
                Learn more about our <br />
                 teams and job <br />
                  openings.</h4></p></div>
              <div className="explore"> 
                <button >Explore Job's</button>
              </div>
     
            </div>
          </div>
        
        <Discount />

        <Footer />  
    </div>
    </div>
  )
}

export default Contact
