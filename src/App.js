import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SideBar from "./components/SideBar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <div className="col-md-9 app__body col-lg-9 col-xl-9">
            <About />
            <Education />
            <Skills />
            <Projects />
            <Interests />
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
