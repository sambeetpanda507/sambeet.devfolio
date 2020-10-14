import React from "react";
import "./css/body.css";
import Typical from "react-typical";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";
import { motion } from "framer-motion";

const aboutVariant = {
  hidden: {
    opacity: 0,
    y: "-200vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "spring" },
  },
};

const hoverVariant = {
  hidden: {
    opacity: 0,
    x: "200vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1, type: "spring", stiffness: 40 },
  },
  hover: {
    scale: 1.1,
  },
};

function About() {
  return (
    <div className="about" id="about">
      <motion.div
        variants={aboutVariant}
        initial="hidden"
        animate="visible"
        className="p-2"
      >
        <p className="about__name">
          <span>SAMBEET</span> <span>SEKHAR</span> <span>PANDA</span>
        </p>
        <p className="about__porfession">
          Hi, I'm a passionate Full stack web developer from India.
        </p>
        <Typical
          className="about__typewriter"
          steps={[
            "",
            500,
            "I'm a programmer 👨‍💻",
            500,
            "I Love MERN Stack 📚",
            500,
            "New Technology Thrives Me 🚀 ",
            500,
          ]}
          loop={Infinity}
          wrapper="h4"
        />
        <div className="about__contacts mt-3 d-flex aling-items-center">
          <motion.div
            variants={hoverVariant}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <IconButton style={{ outline: "none" }}>
              <LinkedInIcon className="text-white" fontSize="large" />
            </IconButton>
          </motion.div>

          <a
            href="https://github.com/sambeetpanda507"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              variants={hoverVariant}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              <IconButton style={{ outline: "none" }}>
                <GitHubIcon className="text-white" fontSize="large" />
              </IconButton>
            </motion.div>
          </a>
          <a
            href="https://twitter.com/Sambeet_10k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              variants={hoverVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <IconButton style={{ outline: "none" }}>
                <TwitterIcon className="text-white" fontSize="large" />
              </IconButton>
            </motion.div>
          </a>

          <a
            href="https://www.instagram.com/sambeet_10k/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              variants={hoverVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <IconButton style={{ outline: "none" }}>
                <InstagramIcon className="text-white" fontSize="large" />
              </IconButton>
            </motion.div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
