import React from "react";
import { motion } from "framer-motion";

function Education() {
  return (
    <div
      className="education d-flex align-items-center justify-justify-content-start"
      id="education"
    >
      <div className="education__container">
        <motion.p
          animate={{ y: "4vh", textShadow: "2px 3px #384b48" }}
          transition={{ yoyo: Infinity, duration: 1.5, type: "tween" }}
          className="education__title"
        >
          education
        </motion.p>

        <p className="education__collegeName">
          Biju Patnaik University of Technology
        </p>

        <div className="d-flex align-items-center justify-content-between">
          <p className="education__degree">Bachelor of Technology</p>
          <p className="education__date">2014 - 2018</p>
        </div>
        <p className="education__stream">Aeronautical Engineering</p>
        <p className="education__percentage">Percentage: 81%</p>

        <div>
          <p className="education__collegeName">
            Kendriya vidyalaya puri, odisha
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="education__degree">Higher Secondary Education</p>
          <p className="education__date">2012 - 2014</p>
        </div>
        <p className="education__percentage">Percentage: 65%</p>
      </div>
    </div>
  );
}

export default Education;
