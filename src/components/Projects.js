import React from "react";
import "./css/body.css";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";

const projectVideo = [
  {
    src:
      "https://drive.google.com/file/d/1fFE1XZcWsP8mW7ibtsvM6bcQOR9c4BYy/preview",
    path: "https://github.com/sambeetpanda507/twitter-clone",
  },
  {
    src:
      "https://drive.google.com/file/d/1DwxJXSWpdrIpuoWsa9r3B8BiMbBFvGjK/preview",
    path: "https://github.com/sambeetpanda507/shoes",
  },
  {
    src:
      "https://drive.google.com/file/d/1IZI1uZETrWjcmDq8dEOOjbHtYvrxgjKb/preview",
    path: "https://github.com/sambeetpanda507/instagram-clone",
  },
  {
    src:
      "https://drive.google.com/file/d/1pao5mXaUD3--9qg1xI_5NpCg5zB5HQZQ/preview",
    path: "https://github.com/sambeetpanda507/movie-review-application",
  },
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
          {projectVideo.map((videos, index) => {
            return (
              <div key={index} className="col-6 col-sm-4 col-md-4 p-2">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title={index}
                    className="embed-responsive-item"
                    src={videos.src}
                    allowFullScreen="on"
                  ></iframe>
                </div>
                <a href={videos.path} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="mt-1 text-capitalize"
                    size="small"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    View github
                  </Button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
