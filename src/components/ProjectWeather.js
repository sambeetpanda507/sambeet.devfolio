import React, { useState } from "react";
import * as Bootstrap from "react-bootstrap";
import weather1 from "../images/weather1.png";
import weather2 from "../images/weather2.png";
import CloudIcon from "@material-ui/icons/Cloud";

function ProjectWeather() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <React.Fragment>
      <React.Fragment>
        <div className="col-md-6 my-3">
          <h3>
            Weather Application{" "}
            <CloudIcon fontSize="large" className="text-info" />
          </h3>
          <h5>Features</h5>
          <ul className="p-3">
            <li>Weather API</li>
            <li>Responsive design</li>
          </ul>
          <h5>Technology Used</h5>
          <ul className="p-3">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>HTML & Css</li>
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
                  src="https://drive.google.com/file/d/10Y7_YtpP2FDlt8Lvx-_AVNZtNP0lLicq/preview"
                  allowFullScreen="on"
                  height="300px"
                  style={{ borderRadius: "20px" }}
                ></iframe>
              </Bootstrap.Carousel.Item>
              <Bootstrap.Carousel.Item interval={200}>
                <img
                  className="d-block w-100"
                  src={weather1}
                  alt="Second slide"
                  height="300px"
                  style={{ borderRadius: "20px" }}
                />
              </Bootstrap.Carousel.Item>
              <Bootstrap.Carousel.Item interval={200}>
                <img
                  className="d-block w-100"
                  src={weather2}
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

export default ProjectWeather;
