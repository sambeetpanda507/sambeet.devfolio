import React from "react";
import "./css/body.css";
import { motion } from "framer-motion";

function Interests() {
  return (
    <div className="interests" id="interests">
      <div className="interests__container">
        <motion.p
          animate={{ y: "4vh", textShadow: "2px 3px #384b48" }}
          transition={{ yoyo: Infinity, duration: 1.5, type: "tween" }}
          className="interests__container__heading d-inline-block"
        >
          Interests
        </motion.p>
        <p className="pr-3 pt-3 interests__container__paragraph mt-2">
          Apart from being a web developer, I enjoy most of my time playing
          computer games, watching animes and web series. I love to paly and
          watch football. When forced indoors, I follow a number of sci-fi and
          action genre movies and television shows. I also spend my free time
          exploring the latest technology advancements in the full stack web
          development world.
        </p>
      </div>
    </div>
  );
}

export default Interests;
