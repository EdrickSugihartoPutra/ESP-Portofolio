import React from "react";
import "./skill.css";

import HTML from "../../img/h5.png";
import JS from "../../img/js.png";
import LogoReact from "../../img/react.png";
import Ionic from "../../img/ionic.svg";
import Bootstrap from "../../img/bootstrap.png";
import Figma from "../../img/figma.png";

const Skill = () => {
  return (
    <div className="s" data-aos="fade-up">
      <h1 className="s-title">My Skills</h1>
      <p className="s-text">Some technologies that I'm familiar with are :</p>
      <div className="skills-list">
        <img
          src={HTML}
          alt="htmlbadge"
          className="about-skills-img"
          data-aos="zoom-in"
        />
        <img
          src={JS}
          alt="jsBadge"
          className="about-skills-img"
          data-aos="zoom-in"
        />
        <img
          src={LogoReact}
          alt="reactBadge"
          className="about-skills-img"
          data-aos="zoom-in"
        />
        <img
          src={Ionic}
          alt="ionicBadge"
          className="about-skills-img"
          data-aos="zoom-in"
        />
        <img
          src={Bootstrap}
          alt="booststrapBadge"
          className="about-skills-img"
          data-aos="zoom-in"
        />
        <img
          src={Figma}
          alt="figmaBadge"
          className="about-skills-img"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};

export default Skill;
