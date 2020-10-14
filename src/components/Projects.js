import React from "react";
import "./css/body.css";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";
import ProjectTwitter from "./ProjectTwitter";
import ProjectShoes from "./ProjectShoes";
import ProjectInsta from "./ProjectInsta";
import ProjectMovies from "./ProjectMovies";
import ProjectAmazon from "./ProjectAmazon";
import ProjectWeather from "./ProjectWeather";

const projectVideo = [
  {
    src:
      "https://drive.google.com/file/d/1E6uR_JCUYZaNPf7S77DErd0nDk4MxGpx/preview",
    path: "https://github.com/sambeetpanda507/amazon-clone",
  },
  {
    src:
      "https://drive.google.com/file/d/10Y7_YtpP2FDlt8Lvx-_AVNZtNP0lLicq/preview",
    path: "https://github.com/sambeetpanda507/weather-application",
  },
];

function Projects() {
  return (
    <div
      className="projects d-flex align-items-center justify-content-start"
      id="projects"
    >
      <div className="container">
        <motion.p
          animate={{ y: "4vh", textShadow: "2px 3px #384b48" }}
          transition={{ yoyo: Infinity, duration: 1.5, type: "tween" }}
          className="projects__heading"
        >
          Projects
        </motion.p>
        <div className="row">
          <ProjectTwitter />
          <ProjectShoes />
          <ProjectInsta />
          <ProjectMovies />
          <ProjectAmazon />
          <ProjectWeather />
        </div>
      </div>
    </div>
  );
}

export default Projects;
