import React, { useState } from "react";
import "./css/sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
import porfileImage from "../images/profile image.jpg";

function SideBar() {
  const [hash, setHash] = useState("");
  const linkHandler = (e) => {
    setHash(e.target.href.split("/")[3]);
  };

  return (
    <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block col-md-3 col-lg-3 col-xl-3 sidebar app__sidebar">
      <div className="sidebar__content mt-5 py-4">
        <div className="sidebar__dp d-flex align-items-center justify-content-center mt-2">
          <div className="sidebar__dpBorder">
            <img src={porfileImage} className="rounded-circle" alt="display" />
          </div>
        </div>
        <div className="sidebar__links">
          <ul className="text-uppercase text-center">
            <li>
              <Link
                smooth
                to="#about"
                className={hash === "#about" ? "active__link" : ""}
                onClick={linkHandler}
              >
                about
              </Link>
            </li>

            <li>
              <Link
                className={hash === "#education" ? "active__link" : ""}
                smooth
                to="#education"
                onClick={linkHandler}
              >
                education
              </Link>
            </li>
            <li>
              <Link
                className={hash === "#skills" ? "active__link" : ""}
                smooth
                to="#skills"
                onClick={linkHandler}
              >
                skills
              </Link>
            </li>
            <li>
              <Link
                className={hash === "#projects" ? "active__link" : ""}
                smooth
                to="#projects"
                onClick={linkHandler}
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                className={hash === "#interests" ? "active__link" : ""}
                smooth
                to="#interests"
                onClick={linkHandler}
              >
                interests
              </Link>
            </li>
            <li>
              <Link
                className={hash === "#awards" ? "active__link" : ""}
                smooth
                to="#achievements"
                onClick={linkHandler}
              >
                achievements
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
