import React, { useState } from "react";
import * as Bootstrap from "react-bootstrap";
import shoes1 from "../images/shoes_thumbnail.png";
import shoes2 from "../images/shoes2.png";

function ProjectShoes() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <React.Fragment>
      <div className="col-md-6 my-3">
        <h3>
          Shoes E-commerce{" "}
          <span role="img" aria-label="shoe">
            👟
          </span>
        </h3>
        <h5>Features</h5>
        <ul className="p-3">
          <li>Add product to cart</li>
          <li> Remove product from cart</li>
          <li> Increment and decrement the product count</li>
          <li>Responsive material design</li>
          <li>Pay through card</li>
        </ul>
        <h5>Technology Used</h5>
        <ul className="p-3">
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB atlas server</li>
          <li>Material UI</li>
          <li>Bootstrap</li>
          <li>HTML and CSS</li>
          <li>Stripe payment gateway</li>
          <li>Framer motion</li>
        </ul>
      </div>
      <div className="col-md-6 project__carousel">
        {/* carousel :start */}
        <div className="w-100">
          <Bootstrap.Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={6000}
          >
            <Bootstrap.Carousel.Item>
              <iframe
                title="twitter"
                className="embed-responsive-item d-block w-100"
                src="https://drive.google.com/file/d/1DwxJXSWpdrIpuoWsa9r3B8BiMbBFvGjK/preview"
                allowFullScreen="on"
                height="300px"
                style={{ borderRadius: "20px" }}
              ></iframe>
            </Bootstrap.Carousel.Item>
            <Bootstrap.Carousel.Item>
              <img
                className="d-block w-100"
                src={shoes1}
                alt="Second slide"
                height="300px"
                style={{ borderRadius: "20px" }}
              />
            </Bootstrap.Carousel.Item>
            <Bootstrap.Carousel.Item>
              <img
                className="d-block w-100"
                src={shoes2}
                alt="Third slide"
                height="300px"
                style={{ borderRadius: "20px" }}
              />
            </Bootstrap.Carousel.Item>
          </Bootstrap.Carousel>
        </div>
        {/* carousel: end */}
      </div>
    </React.Fragment>
  );
}

export default ProjectShoes;
