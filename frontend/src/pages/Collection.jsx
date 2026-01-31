import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/collection.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";

const Collection = () => {
  return (
    <div>
      <Navbar />
    <div className="container">
 <div className="filter">
    <h1>FILTERS</h1>

    <div className="category">
      <h4>CATEGORIES</h4>
         <input type="checkbox" /> Men <br />
         <input type="checkbox" /> Women <br />
        <input type="checkbox"/> Kids
   
   </div>

    <div className="type">
      <h4>Type</h4>
      <input type="checkbox" />  Topwear <br />
       <input type="checkbox" />  Bottomwear <br />
      <input type="checkbox" />  Winterwear
    </div>
  </div>

  <div className="collections">
    <div className="all-collection">
      <div className="collection">
        <h1>ALL-Collection</h1>
      </div>
      <div className="sortby">
        <select id="sort">
          <option>Sort by: Relevant</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>
    </div>

    <div className="main-container">
      <div className="container2">
        <div className="image">
    <img src={image1} alt="Product" />
        </div>
        <div className="image-text">
          <p>Kid Tapered Slim Fit <br /> Trouser</p>
          <p className="price">$38</p>
        </div>
      </div>

        <div className="container2">
        <div className="image">
        <img src={image2} alt="Product" />
        </div>
        <div class="image-text">
          <p>Kid Tapered Slim Fit<br /> Trouser</p>
          <p class="price">$38</p>
        </div>
      </div>

        <div class="container2">
        <div class="image">
       <img src={image3} alt="Product" />
        </div>
        <div className="image-text">
          <p>Kid Tapered Slim Fit <br /> Trouser</p>
          <p className="price">$38</p>
        </div>
      </div>

        <div class="container2">
        <div class="image">
       <img src={image4} alt="Product" />
        </div>
        <div className="image-text">
          <p>Kid Tapered Slim Fit <br /> Trouser</p>
          <p className="price">$38</p>
        </div>
      </div>


        <div className="container2">
        <div className="image">
       <img src={image5} alt="Product" />
        </div>
        <div className="image-text">
          <p>Kid Tapered Slim Fit <br />Trouser</p>
          <p className="price">$38</p>
        </div>
      </div>



        <div className="container2">
        <div className="image">
      <img src={image6} alt="Product" />
        </div>
        <div className="image-text">
          <p>Kid Tapered Slim Fit <br />Trouser</p>
          <p className="price">$38</p>
        </div>
      </div>
     

        <div class="container2">
        <div class="image">
        <img src={image7} alt="Product" />
        </div>
        <div class="image-text">
          <p>Kid Tapered Slim Fit <br />Trouser</p>
          <p class="price">$38</p>
        </div>
      </div>


        <div className="container2">
        <div className="image">
          <img src={image7} alt="Product" />
        </div>
        <div class="image-text">
          <p>Kid Tapered Slim Fit <br /> Trouser</p>
          <p className="price">$38</p>
        </div>
      </div>


        <div className="container2">
        <div className="image">
          <img src={image1} alt="Product" />
        </div>
        <div className="image-text">
          <p>Kid Tapered Slim Fit <br /> Trouser</p>
          <p className="price">$38</p>
        </div>
      </div>

        <div className="container2">
        <div className="image">
        <img src={image1} alt="Product" />
        </div>
        <div className="image-text">
          <p>Kid Tapered Slim Fit <br /> Trouser</p>
          <p className="price">$38</p>
        </div>
      </div>

        <div class="container2">
        <div class="image">
          <img src={image1} alt="Product" />
        </div>
        <div class="image-text">
          <p>Kid Tapered Slim Fit <br /> Trouser</p>
          <p class="price">$38</p>
        </div>
      </div>

        <div className="container2">
        <div className="image">
         <img src={image1} alt="Product" />
        </div>
        <div className="image-text">
          <p>Kid Tapered Slim Fit <br /> Trouser</p>
          <p className="price">$38</p>
        </div>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
};

export default Collection;
