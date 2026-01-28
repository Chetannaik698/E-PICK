import React from "react";
import Navbar from "../components/Navbar";
import "../styles/About.css";
import image1 from "../assets/about.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="up">
          <h2>
            {" "}
            ABOUT <b>US</b>
          </h2>
        </div>
        <div className="down">
          <div className="down-1">
            <img src={image1} alt="" />
          </div>
          <div className="down-2">
            <p>
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.{" "}
            </p>

            <br />

            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers
            </p>
           <br />
            <p>
             <b> Our Mission </b>
            </p>
            <br />
            <p>Our mission at Forever is to empower customers with choice, convenience, and 
              confidence. We're dedicated to providing a seamless shopping experience that exceeds
               expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
