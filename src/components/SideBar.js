import React, { useState } from "react";
import "./css/sidebar.css";
import { HashLink as Link } from "react-router-hash-link";

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
            <img
              src="https://instagram.fdel10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66783033_450785819107125_4409157475534635008_n.jpg?_nc_ht=instagram.fdel10-1.fna.fbcdn.net&_nc_ohc=Fo_TdMESys0AX9w8eQU&oh=78078d5091dcc359b48bc97d6e463b30&oe=5FAF5085"
              height="180"
              className="rounded-circle"
              alt="display"
            />
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
