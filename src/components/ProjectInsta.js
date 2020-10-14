import React, { useState } from "react";
import * as Bootstrap from "react-bootstrap";
import insta1 from "../images/insta1.png";
import insta2 from "../images/insta2.png";
import insta3 from "../images/insta3.png";
import InstagramIcon from "@material-ui/icons/Instagram";

function ProjectInsta() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <React.Fragment>
      <React.Fragment>
        <div className="col-md-6 my-3">
          <h3>
            Instagram Clone{" "}
            <InstagramIcon fontSize="large" className="text-info" />
          </h3>
          <h5>Features</h5>
          <ul className="p-3">
            <li>Share images</li>
            <li>Responsive material design</li>
          </ul>
          <h5>Technology Used</h5>
          <ul className="p-3">
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js - backend framework.</li>
            <li>MongoDB</li>
            <li>Firebase storage</li>
            <li>Material UI</li>
          </ul>
        </div>
        <div className="col-md-6 project__carousel">
          {/* carousel :start */}
          <div className="w-100">
            <Bootstrap.Carousel activeIndex={index} onSelect={handleSelect}>
              <Bootstrap.Carousel.Item interval={200}>
                <iframe
                  title="insta"
                  className="embed-responsive-item d-block w-100"
                  src="https://drive.google.com/file/d/1IZI1uZETrWjcmDq8dEOOjbHtYvrxgjKb/preview"
                  allowFullScreen="on"
                  height="300px"
                  style={{ borderRadius: "20px" }}
                ></iframe>
              </Bootstrap.Carousel.Item>
              <Bootstrap.Carousel.Item interval={200}>
                <img
                  className="d-block w-100"
                  src={insta1}
                  alt="Second slide"
                  height="300px"
                  style={{ borderRadius: "20px" }}
                />
              </Bootstrap.Carousel.Item>
              <Bootstrap.Carousel.Item interval={200}>
                <img
                  className="d-block w-100"
                  src={insta2}
                  alt="Third slide"
                  height="300px"
                  style={{ borderRadius: "20px" }}
                />
              </Bootstrap.Carousel.Item>
              <Bootstrap.Carousel.Item interval={200}>
                <img
                  className="d-block w-100"
                  src={insta3}
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

export default ProjectInsta;
