import React from "react";
import "./Intro.css";
import pic from "../../img/mypic.png";
import scroll from "../../img/scroll-down.png";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div
          className="intro-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="intro-left-wrapper">
            <h2 className="intro-intro">Hello, my name is</h2>
            <h1 className="intro-name">Edrick Sugiharto Putra</h1>
            <div className="intro-title">
              <div className="intro-title-wrapper">
                <div className="intro-title-item">Front End Developer</div>
                <div className="intro-title-item">Web Developer</div>
                <div className="intro-title-item">UI/UX Enthusiast</div>
              </div>
            </div>
            <p className="intro-desc">
              I am an undergradute student from Multimedia Nusantara University
              majoring in informatics, interested in front end development.
              Eager to learn new things for self improovement in website
              development and problem solving skill.
            </p>
            <img src={scroll} alt="mousescroll" className="intro-scroll-logo" />
          </div>
        </div>

        <div
          className="intro-right"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="intro-bg"></div>
          <img
            src={pic}
            alt="profilrpic"
            title="Sorry about the poor quality img T_T"
            className="intro-image"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
