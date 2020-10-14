import React from "react";
import * as Bootstrap from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import "./css/sidebar.css";

function Header() {
  return (
    <div className="header">
      <Bootstrap.Navbar
        className="nav__header d-md-none d-lg-none d-xl-none fixed-top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Bootstrap.Navbar.Brand href="#home" className="text-white">
          Sambeet Sekhar Panda
        </Bootstrap.Navbar.Brand>
        <Bootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Bootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <Bootstrap.Nav className="mr-auto text-capitalize">
            <Link className="nav-link" smooth to="#about">
              About
            </Link>

            <Link className="nav-link" smooth to="#education">
              Education
            </Link>
          </Bootstrap.Nav>
          <Bootstrap.Nav>
            <Link className="nav-link" smooth to="#skills">
              Skills
            </Link>
            <Link className="nav-link" smooth to="#projects">
              Projects
            </Link>
          </Bootstrap.Nav>
          <Bootstrap.Nav>
            <Link className="nav-link" smooth to="#interests">
              Interests
            </Link>
            <Link className="nav-link" smooth to="#achievements">
              Achievements
            </Link>
          </Bootstrap.Nav>
        </Bootstrap.Navbar.Collapse>
      </Bootstrap.Navbar>
    </div>
  );
}

export default Header;
