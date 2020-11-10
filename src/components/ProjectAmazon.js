import React, { useState } from "react";
import * as Bootstrap from "react-bootstrap";
import amazon1 from "../images/amazon1.png";
import amazon2 from "../images/amazon2.png";
import amazon3 from "../images/amazon3.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function ProjectAmazon() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <React.Fragment>
      <React.Fragment>
        <div className="col-md-6 my-3">
          <h3>
            Amazon Clone{" "}
            <ShoppingBasketIcon fontSize="large" className="text-info" />
          </h3>
          <h5>Features</h5>
          <ul className="p-3">
            <li>Complete backend authentication</li>
            <li>Shopping cart feature</li>
            <li>Responsive design</li>
          </ul>
          <h5>Technology Used</h5>
          <ul className="p-3">
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Firebase storage</li>
            <li>Material UI</li>
            <li>JSON Web Token</li>
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
                  title="insta"
                  className="embed-responsive-item d-block w-100"
                  src="https://drive.google.com/file/d/1E6uR_JCUYZaNPf7S77DErd0nDk4MxGpx/preview"
                  allowFullScreen="on"
                  height="300px"
                  style={{ borderRadius: "20px" }}
                ></iframe>
              </Bootstrap.Carousel.Item>
              <Bootstrap.Carousel.Item>
                <img
                  className="d-block w-100"
                  src={amazon1}
                  alt="Second slide"
                  height="300px"
                  style={{ borderRadius: "20px" }}
                />
              </Bootstrap.Carousel.Item>
              <Bootstrap.Carousel.Item>
                <img
                  className="d-block w-100"
                  src={amazon2}
                  alt="Third slide"
                  height="300px"
                  style={{ borderRadius: "20px" }}
                />
              </Bootstrap.Carousel.Item>
              <Bootstrap.Carousel.Item>
                <img
                  className="d-block w-100"
                  src={amazon3}
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
    </React.Fragment>
  );
}

export default ProjectAmazon;
