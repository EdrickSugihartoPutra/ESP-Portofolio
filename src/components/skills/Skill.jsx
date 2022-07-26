import React, { useContext } from "react";
import "./skill.css";

import HTML from "../../img/h5.png";
import JS from "../../img/js.png";
import LogoReact from "../../img/react.png";
import Ionic from "../../img/ionic.svg";
import Bootstrap from "../../img/bootstrap.png";
import Figma from "../../img/figma.png";
import { ThemeContext } from "../../context";

const Skill = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="s" data-aos="fade-up">
      <h1 className="s-title">My Skills</h1>
      <p className="s-text">Some technologies that I'm familiar with are :</p>
      <div className="skills-list">
        <div className="skill-card">
          <img src={HTML} alt="htmlbadge" className="skills-img" />
          <h4>HTML</h4>
        </div>
        <div className="skill-card">
          <img src={JS} alt="jsBadge" className="skills-img" />
          <h4>JavaScript</h4>
        </div>
        <div className="skill-card">
          <img src={LogoReact} alt="reactBadge" className="skills-img" />
          <h4>React</h4>
        </div>
        <div className="skill-card">
          <img src={Ionic} alt="ionicBadge" className="skills-img" />
          <h4>Ionic</h4>
        </div>
        <div className="skill-card">
          <img src={Bootstrap} alt="booststrapBadge" className="skills-img" />
          <h4>Bootstrap</h4>
        </div>
        <div className="skill-card">
          <img src={Figma} alt="figmaBadge" className="skills-img" />
          <h4>Figma</h4>
        </div>
      </div>
    </div>
  );
};

export default Skill;
