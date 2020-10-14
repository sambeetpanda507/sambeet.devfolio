import React, { useState } from "react";
import * as Bootstrap from "react-bootstrap";
import twitter1 from "../images/twitter1.png";
import twitter2 from "../images/twitter2.png";
import TwitterIcon from "@material-ui/icons/Twitter";

function ProjectTwitter() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <React.Fragment>
      <div className="col-md-6">
        <h3>
          Twitter Clone{" "}
          <TwitterIcon fontSize="large" className="text-primary" />
        </h3>
        <h5>Features</h5>
        <ul className="p-3">
          <li>Can tweet both text and images</li>
          <li>Can delete tweets</li>
          <li>Based on responsive material design</li>
          <li>
            Covid-19 api included which shows all the data about different
            states in India
          </li>
        </ul>
        <h5>Technology Used</h5>
        <ul className="p-3">
          <li>React for frontend</li>
          <li>Node.js for making api in the backend</li>
          <li>Express.js - backend framework.</li>
          <li>MongoDB NoSQL database with cloud storage atlas server</li>
          <li>Firebase storage</li>
        </ul>
      </div>
      <div className="col-md-6 project__carousel">
        {/* carousel :start */}
        <div className="w-100">
          <Bootstrap.Carousel activeIndex={index} onSelect={handleSelect}>
            <Bootstrap.Carousel.Item interval={200}>
              <iframe
                title="twitter"
                className="embed-responsive-item d-block w-100"
                src="https://drive.google.com/file/d/1fFE1XZcWsP8mW7ibtsvM6bcQOR9c4BYy/preview"
                allowFullScreen="on"
                height="300px"
                style={{ borderRadius: "20px" }}
              ></iframe>
            </Bootstrap.Carousel.Item>
            <Bootstrap.Carousel.Item interval={200}>
              <img
                className="d-block w-100"
                src={twitter1}
                alt="Second slide"
                height="300px"
                style={{ borderRadius: "20px" }}
              />
            </Bootstrap.Carousel.Item>
            <Bootstrap.Carousel.Item interval={200}>
              <img
                className="d-block w-100"
                src={twitter2}
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

export default ProjectTwitter;
