import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Contact.css'
import contact from '../assets/contact.png'

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
                <button >Explore Jobs</button>
              </div>
     
            </div>
          </div>
        
        <div className="sub">
         <div className="subscribe"><h2>Subscribe now & get 20% off</h2>

                        </div>
         <div className="text"><h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
         </div>
         <div className="enter"> 
          <div className="enter1">
              <input type="text" placeholder='Enter your email' />
          </div>
          <div className="but">
            <button id='subscribing'>SUBSCRIBE</button>
          </div>
         </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
