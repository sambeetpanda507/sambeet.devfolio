import React from "react";
import "./css/body.css";
import MongoDB from "../svgs/mongodb-ar21.svg";
import Express from "../svgs/expressjs-ar21.svg";
import ReactIcon from "../svgs/reactjs-icon.svg";
import Node from "../svgs/nodejs-horizontal.svg";
import HtmlIcon from "../svgs/w3_html5-icon.svg";
import CssIcon from "../svgs/css3.svg";
import BootstrapIcon from "../svgs/getbootstrap-icon.svg";
import MaterialUiIcon from "../svgs/material-ui.svg";
import WindowsIcon from "../svgs/microsoft-icon.svg";
import Linux from "../svgs/linux-icon.svg";
import JavascriptIcon from "../svgs/javascript.svg";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        <motion.p
          animate={{ y: "4vh", textShadow: "2px 3px #384b48" }}
          transition={{ yoyo: Infinity, duration: 1.5, type: "tween" }}
          className="skills__heading"
        >
          skills
        </motion.p>
        <p className="skills__langTools">Programming Languages & Tools</p>
        <div className="skills__icons">
          <motion.img
            whileHover={{ scale: 1.1, originX: 0 }}
            src={JavascriptIcon}
            alt="javascript"
          />
          <motion.img
            whileHover={{ scale: 1.1, originX: 0 }}
            src={MongoDB}
            alt="mongo"
          />
          <motion.img
            whileHover={{ scale: 1.1, originX: 0 }}
            src={Express}
            alt="express"
          />
          <motion.img
            whileHover={{ scale: 1.1, originX: 0 }}
            src={ReactIcon}
            alt="react"
          />
          <motion.img
            whileHover={{ scale: 1.1, originX: 0 }}
            src={Node}
            alt="node"
          />
          <motion.img
            whileHover={{ scale: 1.1, originX: 0 }}
            src={HtmlIcon}
            alt="html"
          />
          <motion.img
            whileHover={{ scale: 1.1, originX: 0 }}
            src={CssIcon}
            alt="css"
          />
          <motion.img
            whileHover={{ scale: 1.1, originX: 0 }}
            src={BootstrapIcon}
            alt="bootstrap"
          />
          <motion.img
            whileHover={{ scale: 1.1, originX: 0 }}
            src={MaterialUiIcon}
            alt="material-ui"
          />
          <motion.img
            whileHover={{ scale: 1.1, originX: 0 }}
            src={WindowsIcon}
            alt="windows"
          />
          <motion.img
            whileHover={{ scale: 1.1, originX: 0 }}
            src={Linux}
            alt="linux"
          />
        </div>
        <div className="skills__list p-1 mt-2">
          <ul>
            <li>Full stack web development</li>
            <li>Modern web development practice</li>
            <li>Responsive Design</li>
            <li>Create & manage APIs</li>
            <li>Dynamic & Interactive web pages.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
