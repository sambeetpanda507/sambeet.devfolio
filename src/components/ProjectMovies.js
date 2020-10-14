import React, { useState } from "react";
import * as Bootstrap from "react-bootstrap";
import movie1 from "../images/movie1.png";
import movie2 from "../images/movie2.png";
import MovieIcon from "@material-ui/icons/Movie";

function ProjectMovies() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <React.Fragment>
      <React.Fragment>
        <div className="col-md-6 my-3">
          <h3>
            Movies Review Application{" "}
            <MovieIcon fontSize="large" className="text-danger" />
          </h3>
          <h5>Features</h5>
          <ul className="p-3">
            <li>Watch trailers</li>
            <li>Check popular movies</li>
            <li>Check top rated movies</li>
            <li>Read reviews and ratings</li>
          </ul>
          <h5>Technology Used</h5>
          <ul className="p-3">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>TMDB API</li>
            <li>HTML & Css</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="col-md-6 project__carousel">
          {/* carousel :start */}
          <div className="w-100">
            <Bootstrap.Carousel activeIndex={index} onSelect={handleSelect}>
              <Bootstrap.Carousel.Item interval={200}>
                <iframe
                  title="movie"
                  className="embed-responsive-item d-block w-100"
                  src="https://drive.google.com/file/d/1pao5mXaUD3--9qg1xI_5NpCg5zB5HQZQ/preview"
                  allowFullScreen="on"
                  height="300px"
                  style={{ borderRadius: "20px" }}
                ></iframe>
              </Bootstrap.Carousel.Item>
              <Bootstrap.Carousel.Item interval={200}>
                <img
                  className="d-block w-100"
                  src={movie1}
                  alt="Second slide"
                  height="300px"
                  style={{ borderRadius: "20px" }}
                />
              </Bootstrap.Carousel.Item>
              <Bootstrap.Carousel.Item interval={200}>
                <img
                  className="d-block w-100"
                  src={movie2}
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

export default ProjectMovies;
