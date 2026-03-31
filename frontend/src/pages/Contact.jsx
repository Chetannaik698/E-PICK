import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";
import contact from "../assets/contact.png";
import Discount from "../components/Discount";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <div className="contact-header">
          <h1>CONTACT US</h1>
          <div className="header-line"></div>
        </div>

        <div className="contact-content">
          <div className="contact-image">
            <img src={contact} alt="Contact" />
          </div>

          <div className="contact-info">
            <div className="store-section">
              <h2>Our Store</h2>
              <p className="address">
                54709 Willms Station
                <br />
                Suite 350, Washington, USA
              </p>
              <p className="contact-details">
                Tel: (415) 555-0132
                <br />
                Email: admin@forever.com
              </p>
            </div>

            <div className="careers-section">
              <h2>Careers at Forever</h2>
              <p>Learn more about our teams and job openings.</p>
              <button className="explore-btn">Explore Jobs</button>
            </div>
          </div>
        </div>
      </div>

      <Discount />
      <Footer />
    </div>
  );
};

export default Contact;
