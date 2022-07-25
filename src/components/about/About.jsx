import React from "react";
import "./About.css";
import Board from "../../img/keyboard.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left" data-aos="fade-up">
          <div className="about-card bg"></div>
          <div className="about-card">
            <img src={Board} alt="" className="about-img" />
          </div>
        </div>
        <div className="about-right" data-aos="fade-up">
          <h1 className="about-title">About Me</h1>
          <div className="about-sub">
            <q>
              Tell me and I forget, teach me and I may remember, involve me and
              I learn.
            </q>
          </div>
          <p className="about-desc">
            I'm a Front-end developer interested in HTML, CSS, JavaScript and
            ReactJS. I'm an open and friendly person. Throughout my campus live,
            I've tried various technologies to achieve the best result I can
            get, especially in Front-end engineering. Even though in the end the
            result isn't always great, I know that what matter is that I'ver
            tried my best to learn and give all my abilities to finish my
            project and I always will.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
