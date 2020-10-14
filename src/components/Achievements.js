import React from "react";
import "./css/body.css";
import { motion } from "framer-motion";

function Achievements() {
  return (
    <div className="achievements" id="achievements">
      <div className="achievements__container">
        <motion.p
          animate={{ y: "4vh", textShadow: "2px 3px #384b48" }}
          transition={{ yoyo: Infinity, duration: 1.5, type: "tween" }}
          className="achievements__heading"
        >
          achievements
        </motion.p>
        <ul className="my-2">
          <li>
            <span role="img" aria-label="cricket">
              🏏
            </span>{" "}
            2<sup>nd</sup> place - inter college cricket tournament - Biju
            Patnaik University of Technology
          </li>
          <li>
            <span role="img" aria-label="handball1">
              🤾
            </span>{" "}
            4<sup>th</sup> place - regional level handball - Kendriya Vidyalaya
            Sangathan
          </li>
          <li>
            <span role="img" aria-label="handball2">
              🤾
            </span>{" "}
            6<sup>th</sup> place - national level handball tournament - Kendriya
            Vidyalaya Sangathan
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Achievements;
